// === Modal Content Definitions ===
const modalContent = {
    thresholdModal: {
        title: 'Success Threshold',
        content: `
            <p>Each element of the SIP represents the remaining combat effectiveness of the target in a single simulated trial. Mission success is defined relative to an attacker-specified effectiveness threshold. The chance of mission success is calculated as the proportion of simulated trials in which remaining combat effectiveness is less than or equal to that threshold.</p>
            <p>For example, if mission success requires reducing the target to 30 percent combat effectiveness or lower, the chance of success is the fraction of trials in which the simulated remaining effectiveness is 30 percent or below.</p>
        `
    },
    effectivenessModal: {
        title: 'Expected Remaining Combat Effectiveness',
        content: `
            <p>Combat effectiveness is a constructed metric representing the target's combat capability relative to an initial baseline of 100 percent. A value of 100 percent indicates full operational capability, while lower values reflect degradation resulting from engagement.</p>
            <p><em>From the attacker's perspective, lower remaining combat effectiveness corresponds to greater mission success; conversely, higher values indicate greater residual capability for the target.</em></p>
        `
    }
};

// === Trial Data (loaded from Excel) ===
// Format: [W_1_T_1, W_1_T_2, W_2_T_1, W_2_T_2, W_3_T_1, W_3_T_2, W_4_T_1, W_4_T_2]
// Index: [0: W1T1, 1: W1T2, 2: W2T1, 3: W2T2, 4: W3T1, 5: W3T2, 6: W4T1, 7: W4T2]
let trialData = null;
const averages = [0.687005, 0.553479, 0.503667, 0.503667, 0.5038, 0.5038, 0.551971, 0.689181];

// === Global State ===
let weaponSelections = [true, false, false, false]; // Default: W1 selected
let selectedTarget = 1; // 1 or 2
let effectivenessThreshold = 0.3; // 30%
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

    // Group into 10 display bins (0-10%, 10-20%, ..., 90-100%) by summing every 10 bins
    const displayBins = [];
    for (let i = 0; i < 10; i++) {
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

// === View Toggle State ===
let activeView = 'histogram'; // 'histogram' or 'effectiveness'

function updateEffectivenessTable() {
    const tbody = document.getElementById('effectivenessTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    // Normalize color scale across all 8 values
    const minVal = Math.min(...averages);
    const maxVal = Math.max(...averages);
    const range = maxVal - minVal || 1;

    function heatColor(value) {
        const norm = (value - minVal) / range; // 0=min(red), 1=max(green)
        // Excel-style red → yellow → green
        let r, g, b;
        if (norm <= 0.5) {
            const t = norm * 2;
            r = Math.round(248 + (255 - 248) * t);
            g = Math.round(105 + (235 - 105) * t);
            b = Math.round(107 + (132 - 107) * t);
        } else {
            const t = (norm - 0.5) * 2;
            r = Math.round(255 + (99  - 255) * t);
            g = Math.round(235 + (190 - 235) * t);
            b = Math.round(132 + (123 - 132) * t);
        }
        return `rgb(${r},${g},${b})`;
    }

    for (let w = 1; w <= 4; w++) {
        const t1idx = (w - 1) * 2 + 0;
        const t2idx = (w - 1) * 2 + 1;
        const t1val = averages[t1idx];
        const t2val = averages[t2idx];
        const row = document.createElement('tr');
        row.innerHTML = `<td>Weapon ${w}</td>` +
            `<td style="background:${heatColor(t1val)};color:#1a1a1a">${(t1val * 100).toFixed(1)}%</td>` +
            `<td style="background:${heatColor(t2val)};color:#1a1a1a">${(t2val * 100).toFixed(1)}%</td>`;
        tbody.appendChild(row);
    }
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
        effEl.textContent = '';
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

    // Convert to data points with x positions (bar centers at 5, 15, 25, etc.)
    const barData = histData.map((value, index) => ({
        x: index * 10 + 5,
        y: value
    }));

    // Destroy existing chart to force complete rebuild
    if (histogramChart) {
        histogramChart.destroy();
        histogramChart = null;
    }

    histogramChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Frequency',
                data: barData,
                backgroundColor: '#60a5fa',
                borderRadius: 0,
                barPercentage: 1.0,
                categoryPercentage: 1.0,
                barThickness: 'flex',
                maxBarThickness: 100
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 0
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    min: 0,
                    max: 100,
                    offset: false,
                    bounds: 'ticks',
                    grace: 0,
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        offset: false,
                        drawTicks: true
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: 'Space Mono'
                        },
                        stepSize: 10,
                        padding: 0,
                        callback: function(value) {
                            return value + '%';
                        }
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
                        title: function(context) {
                            const x = context[0].parsed.x;
                            const start = x - 5;
                            const end = x + 5;
                            return `${start}% - ${end}%`;
                        },
                        label: function(context) {
                            return context.raw.y.toFixed(1) + '% of trials';
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

    // Default to small font on phones, medium otherwise
    const defaultFontSize = window.innerWidth <= 450 ? 'small' : 'medium';
    document.documentElement.setAttribute('data-font-size', defaultFontSize);
    document.querySelectorAll('.font-size-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.size === defaultFontSize);
    });

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
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const newSize = this.dataset.size;
            
            // Set data-font-size on html element to trigger CSS !important rules
            document.documentElement.setAttribute('data-font-size', newSize);
            
            document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
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

    // View toggle (Histogram / Combat Effectiveness)
    document.querySelectorAll('.view-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activeView = this.dataset.view;
            const histView = document.getElementById('histogramView');
            const effView = document.getElementById('effectivenessView');
            const cardTitle = document.querySelector('.histogram-section .card-title');
            if (activeView === 'histogram') {
                histView.style.display = '';
                effView.style.display = 'none';
                if (cardTitle) cardTitle.textContent = 'Remaining Combat Effectiveness';
            } else {
                histView.style.display = 'none';
                effView.style.display = 'block';
                if (cardTitle) cardTitle.textContent = 'Expected Remaining Combat Effectiveness';
                updateEffectivenessTable();
            }
        });
    });

    // === Modal Event Handlers ===
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalContentEl = document.getElementById('modalContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Info button click handlers
    document.querySelectorAll('.info-btn[data-modal]').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            if (modalContent[modalId]) {
                modalTitle.textContent = modalContent[modalId].title;
                modalContentEl.innerHTML = modalContent[modalId].content;
                modalOverlay.classList.add('active');
            }
        });
    });

    // Close modal handlers
    modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
        }
    });
});
