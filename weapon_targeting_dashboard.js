// === Trial Data (loaded from Excel) ===
// Format: [W_1_T_1, W_1_T_2, W_2_T_1, W_2_T_2, W_3_T_1, W_3_T_2, W_4_T_1, W_4_T_2]
// Index: [0: W1T1, 1: W1T2, 2: W2T1, 3: W2T2, 4: W3T1, 5: W3T2, 6: W4T1, 7: W4T2]
let trialData = null;
const averages = [0.687005, 0.553479, 0.503667, 0.503667, 0.5038, 0.5038, 0.551971, 0.689181];

// === Global State ===
let weaponSelections = [true, false, false, false]; // Default: W1 selected
let selectedTarget = 1; // 1 or 2
let effectivenessThreshold = 0.5; // 50%
let stochasticMode = false;
const maxTrials = 10000;


// === Chart Instances ===
let histogramChart = null;

// === Data Loading ===
async function loadTrialData() {
    try {
        const response = await fetch('targeting_data_compact.json');
        const data = await response.json();
        trialData = data.trials;
        console.log(`Loaded ${trialData.length} trials`);
        updateDashboard();
    } catch (error) {
        console.error('Error loading trial data:', error);
        // Use averages as fallback
        trialData = null;
        updateDashboard();
    }
}

// === Calculation Functions ===

/**
 * Get weapon effectiveness for a specific weapon, target, and trial
 * @param {number} weapon - Weapon number (1-4)
 * @param {number} target - Target number (1 or 2)
 * @param {number} trial - Trial index (0-9999)
 * @returns {number} Effectiveness value (0-1, where 1 = no effect/miss)
 */
function getWeaponEffectiveness(weapon, target, trial) {
    if (!trialData || !stochasticMode) {
        // Use average value
        const idx = (weapon - 1) * 2 + (target - 1);
        return averages[idx];
    }
    // Use trial-specific value
    const idx = (weapon - 1) * 2 + (target - 1);
    return trialData[trial][idx];
}

/**
 * Calculate residual effectiveness for a weapon
 * Residual = 1 - effectiveness if weapon is selected, else 1 (no effect)
 */
function getResidual(weapon, target, trial) {
    if (!weaponSelections[weapon - 1]) {
        return 1; // Weapon not selected, no effect on target
    }
    const effectiveness = getWeaponEffectiveness(weapon, target, trial);
    // Effectiveness of 1 means weapon missed (residual = 1)
    // Effectiveness < 1 means weapon hit (residual = effectiveness)
    return effectiveness;
}

/**
 * Calculate remaining combat capability
 * This is the product of all residual values
 */
function calculateRemainingCapability(target, trial) {
    let capability = 1;
    for (let w = 1; w <= 4; w++) {
        capability *= getResidual(w, target, trial);
    }
    return capability;
}

/**
 * Run Monte Carlo simulation
 */
function runSimulation() {
    const numTrials = (trialData && stochasticMode) ? maxTrials : 1;
    let successCount = 0;
    let totalCapability = 0;
    const capabilities = [];

    for (let t = 0; t < numTrials; t++) {
        const cap = calculateRemainingCapability(selectedTarget, t);
        capabilities.push(cap);
        totalCapability += cap;
        if (cap <= effectivenessThreshold) {
            successCount++;
        }
    }

    return {
        avgCapability: totalCapability / numTrials,
        chanceOfSuccess: (successCount / numTrials) * 100,
        capabilities: capabilities
    };
}

/**
 * Create histogram bins from capability data
 */
function createHistogramData(capabilities) {
    const numBins = 100; // 100 bins for 1% increments
    const bins = new Array(numBins).fill(0);
    const binWidth = 0.01; // Each bin covers 1%

    for (const cap of capabilities) {
        // Cap values at 1.0 (100%) to ensure they fit within 100 bins (0-1% through 99-100%)
        const binIndex = Math.min(Math.floor(cap / binWidth), numBins - 1);
        bins[binIndex]++;
    }

    // Group into 11 display bins (0-10%, 10-20%, ..., 90-100%) by summing every 10 bins
    const displayBins = [];
    for (let i = 0; i < 11; i++) {
        let sum = 0;
        for (let j = 0; j < 10; j++) {
            sum += bins[i * 10 + j];
        }
        displayBins.push(sum);
    }

    // Convert to percentages
    const total = capabilities.length;
    return displayBins.map(count => (count / total) * 100);
}

// === UI Update Functions ===

function updateDashboard() {
    // Sync button states with weaponSelections array
    document.querySelectorAll('.weapon-btn').forEach(btn => {
        const weaponNum = parseInt(btn.dataset.weapon);
        btn.classList.toggle('active', weaponSelections[weaponNum - 1]);
    });

    // Sync UI state with variables to ensure consistency
    const targetSelect = document.getElementById('targetSelect');
    if (targetSelect) {
        selectedTarget = parseInt(targetSelect.value);
    }
    const activeEngine = document.querySelector('.engine-toggle-btn.active');
    if (activeEngine) {
        stochasticMode = activeEngine.dataset.engine === 'stochastic';
    }
    const thresholdInput = document.getElementById('thresholdInput');
    if (thresholdInput) {
        const value = thresholdInput.value.replace('%', '').trim();
        const num = parseFloat(value);
        if (!isNaN(num) && num >= 0 && num <= 100) {
            effectivenessThreshold = num / 100;
        }
    }

    // Run simulation
    const results = runSimulation();

    // Update average effectiveness display
    const avgEffEl = document.getElementById('avgEffectiveness');
    avgEffEl.textContent = (results.avgCapability * 100).toFixed(0) + '%';

    // Update weapon effectiveness displays
    for (let w = 1; w <= 4; w++) {
        const effEl = document.getElementById(`eff${w}`);
        const idx = (w - 1) * 2 + (selectedTarget - 1);
        const eff = averages[idx];
        effEl.textContent = '(' + (eff * 100).toFixed(1) + '%)';
    }

    // Update gauge
    updateGaugeChart(results.chanceOfSuccess);

    // Update histogram
    updateHistogramChart(results.capabilities);
}

function updateGaugeChart(successPercent) {
    // Update SVG gauge
    const gaugeFill = document.getElementById('gaugeFill');
    const gaugeValue = document.getElementById('gaugeValue');
    const riskValue = document.getElementById('riskValue');

    // Calculate stroke-dashoffset for the success percentage
    // Full circle circumference = 2 * PI * r = 2 * 3.14159 * 50 = 314.159
    const circumference = 314.159;
    const offset = circumference - (successPercent / 100) * circumference;

    gaugeFill.style.strokeDashoffset = offset;

    // Update pointer values
    gaugeValue.textContent = successPercent.toFixed(1) + '%';
    riskValue.textContent = (100 - successPercent).toFixed(1) + '%';
}

function updateHistogramChart(capabilities) {
    const ctx = document.getElementById('histogramChart').getContext('2d');
    const histData = createHistogramData(capabilities);
    const labels = [
        '0%', '10%', '20%', '30%', '40%',
        '50%', '60%', '70%', '80%', '90%', '100%'
    ];

    // Destroy existing chart to force complete rebuild
    if (histogramChart) {
        histogramChart.destroy();
        histogramChart = null;
    }

    histogramChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Frequency',
                data: histData,
                backgroundColor: '#60a5fa',
                borderRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        offset: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: 'Space Mono'
                        },
                        align: 'center'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)'
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: 'Space Mono'
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw.toFixed(1) + '% of trials';
                        }
                    }
                }
            }
        }
    });
}

// === Event Listeners ===

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme (default to light)
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-font-size', 'medium');

    // Settings dropdown toggle
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDropdown = document.getElementById('settingsDropdown');

    settingsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        settingsDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!settingsDropdown.contains(e.target) && !settingsBtn.contains(e.target)) {
            settingsDropdown.classList.remove('active');
        }
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleSlider = themeToggle.querySelector('.theme-toggle-slider');

    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.classList.remove('active');
            themeToggleSlider.textContent = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.classList.add('active');
            themeToggleSlider.textContent = '🌙';
        }
    });

    // Font size toggle
    document.querySelectorAll('.font-size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.documentElement.setAttribute('data-font-size', this.dataset.size);
        });
    });

    // Load trial data
    loadTrialData();

    // Weapon buttons
    document.querySelectorAll('.weapon-btn').forEach(btn => {
        const weaponNum = parseInt(btn.dataset.weapon);

        btn.addEventListener('click', function() {
            // Toggle active state
            const isActive = btn.classList.toggle('active');
            weaponSelections[weaponNum - 1] = isActive;
            updateDashboard();
        });
    });

    // Threshold input
    document.getElementById('thresholdInput').addEventListener('change', function() {
        let value = this.value.replace('%', '').trim();
        let num = parseFloat(value);
        if (!isNaN(num)) {
            effectivenessThreshold = num / 100;
            this.value = num + '%';
            updateDashboard();
        }
    });

    // Target select
    document.getElementById('targetSelect').addEventListener('change', function() {
        selectedTarget = parseInt(this.value);
        updateDashboard();
    });

    // Calculation Engine toggle
    document.querySelectorAll('.engine-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all buttons
            document.querySelectorAll('.engine-toggle-btn').forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');
            // Update stochastic mode
            stochasticMode = this.dataset.engine === 'stochastic';
            updateDashboard();
        });
    });
});
