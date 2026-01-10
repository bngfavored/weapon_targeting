// Data generation for cash paths simulation
const cashPathsData = [{
  "name": "CFO_2025-12-17_Lib.SIPmath",
  "objectType": "sipModel",
  "libraryType": "SIPmath_3_0",
  "dateCreated": "12-17-2025",
  "provenance": "MSR",
  "U01": {
    "rng": [
      {
        "name": "hdr1",
        "function": "HDR_2_0",
        "arguments": {
          "counter": "PM_Index",
          "entity": 1,
          "varId": 1,
          "seed3": 0,
          "seed4": 0
        }
      },
      {
        "name": "hdr2",
        "function": "HDR_2_0",
        "arguments": {
          "counter": "PM_Index",
          "entity": 1,
          "varId": 2,
          "seed3": 0,
          "seed4": 0
        }
      },
      {
        "name": "hdr3",
        "function": "HDR_2_0",
        "arguments": {
          "counter": "PM_Index",
          "entity": 1,
          "varId": 3,
          "seed3": 0,
          "seed4": 0
        }
      },
      {
        "name": "hdr4",
        "function": "HDR_2_0",
        "arguments": {
          "counter": "PM_Index",
          "entity": 1,
          "varId": 4,
          "seed3": 0,
          "seed4": 0
        }
      },
      {
        "name": "hdr5",
        "function": "HDR_2_0",
        "arguments": {
          "counter": "PM_Index",
          "entity": 1,
          "varId": 5,
          "seed3": 0,
          "seed4": 0
        }
      }
    ]
  },
  "sips": [
    {
      "name": "Rev_01",
      "ref": {
        "source": "rng",
        "name": "hdr1"
      },
      "function": "Metalog_1_0",
      "arguments": {
        "lowerBound": 0,
        "aCoefficients": [
          5.198933892879486,
          0.04994329743427788,
          -0.019260357212707066
        ]
      },
      "metadata": {
        "Avg of 10,000": 180,
        "density": [
          0.0,
          1.1584000090509839e-05,
          2.3168000181019678e-05,
          3.475200027152951e-05,
          4.6336000362039356e-05,
          5.7920000452549186e-05,
          6.950400054305902e-05,
          8.108800063356887e-05,
          9.267200072407871e-05,
          0.00010425600081458854,
          0.00011584000090509837,
          0.00012742400099560822,
          0.00013900800108611805,
          0.0004661103260445418,
          0.0014957637836962084,
          0.0039423499787085,
          0.009154099981377799,
          0.01769894748851865,
          0.02675087068757724,
          0.024991280453442285,
          0.010942524629046617,
          0.003363218646105843,
          0.0009958671598194473,
          0.0003153404994593701,
          0.00010387166132417763
        ]
      }
    },
    {
      "name": "Rev_02",
      "ref": {
        "source": "rng",
        "name": "hdr2"
      },
      "function": "Metalog_1_0",
      "arguments": {
        "lowerBound": 0,
        "aCoefficients": [
          5.312536887991132,
          0.05277509148112737,
          -0.0386027938937213
        ]
      },
      "metadata": {
        "Avg of 10,000": 200,
        "density": [
          0.0,
          9.67547005201317e-06,
          1.935094010402634e-05,
          2.902641015603951e-05,
          3.870188020805268e-05,
          4.8377350260065846e-05,
          5.805282031207902e-05,
          6.772829036409219e-05,
          7.740376041610536e-05,
          8.707923046811852e-05,
          9.675470052013169e-05,
          0.00010643017057214485,
          0.00018309755658506787,
          0.0004857602455038994,
          0.0012533202858436613,
          0.0026991057250331262,
          0.005355400089246896,
          0.009562186270268152,
          0.015549807595375966,
          0.0230503284210959,
          0.024743642782869384,
          0.008610623856497308,
          0.0020042054910010855,
          0.00045204552566795186,
          0.00011751655035176017
        ]
      }
    },
    {
      "name": "Rev_03",
      "ref": {
        "source": "rng",
        "name": "hdr3"
      },
      "function": "Metalog_1_0",
      "arguments": {
        "lowerBound": 0,
        "aCoefficients": [
          5.404381667936413,
          0.06329444314435961,
          -0.030978317190709627
        ]
      },
      "metadata": {
        "Avg of 10,000": 220,
        "density": [
          0.0,
          9.78935879542105e-06,
          1.95787175908421e-05,
          2.9368076386263147e-05,
          3.91574351816842e-05,
          4.894679397710524e-05,
          5.873615277252629e-05,
          6.852551156794734e-05,
          7.83148703633684e-05,
          8.810422915878945e-05,
          9.789358795421048e-05,
          0.00029291664631150843,
          0.0007808356848518634,
          0.0018872069413697536,
          0.003953472405288257,
          0.007354632286679227,
          0.012015997170213868,
          0.016887497412748094,
          0.01784637072208335,
          0.010497882627145017,
          0.0038848057116694043,
          0.001376074015576918,
          0.0004661013064589083,
          0.0001775491815615271,
          6.779099391760444e-05
        ]
      }
    },
    {
      "name": "V_Exp",
      "ref": {
        "source": "rng",
        "name": "hdr4"
      },
      "function": "Metalog_1_0",
      "arguments": {
        "lowerBound": 0,
        "aCoefficients": [
          -2.2990600599491655,
          0.03931570418933343,
          -0.011577670133344119
        ]
      },
      "metadata": {
        "Avg of 10,000": 0.1,
        "density": [
          0.0,
          0.021580685895253013,
          0.043161371790506026,
          0.06474205768575904,
          0.08632274358101205,
          0.10790342947626508,
          0.12948411537151808,
          0.1510648012667711,
          0.1726454871620241,
          0.1942261730572771,
          0.21580685895253016,
          0.23738754484778318,
          0.25896823074303615,
          0.2805489166382892,
          0.3370500672724923,
          1.3900946601917545,
          5.180109156591066,
          16.12778175758551,
          38.93800589842057,
          62.98195571553151,
          45.87762670285064,
          14.138952773544336,
          3.70028932519185,
          0.8885739766054703,
          0.2360078988608796
        ]
      }
    },
    {
      "name": "F_Exp",
      "ref": {
        "source": "rng",
        "name": "hdr5"
      },
      "function": "Metalog_1_0",
      "arguments": {
        "lowerBound": 0,
        "aCoefficients": [
          4.999009825998297,
          0.061204278885138616,
          0.01248196487850138
        ]
      },
      "metadata": {
        "Avg of 10,000": 150,
        "density": [
          0.0,
          1.7413950191905363e-05,
          3.4827900383810726e-05,
          5.224185057571609e-05,
          6.965580076762145e-05,
          8.706975095952681e-05,
          0.00010448370115143218,
          0.00012189765134333753,
          0.0001393116015352429,
          0.00015672555172714826,
          0.00017413950191905362,
          0.0005557858415457119,
          0.002541785720516718,
          0.009044472026880355,
          0.02259773449241076,
          0.02782976384518478,
          0.01931882330245648,
          0.01033579243651383,
          0.004985149219397018,
          0.0023143729541047252,
          0.0011446388396606434,
          0.0005080363572553414,
          0.00024854087937402336,
          0.00012486742963461887,
          6.263667424591904e-05
        ]
      }
    }
  ],
  "version": "1"
}]
/**
 * Generates the cash path for a specific trial using actual Monte Carlo calculations
 * Matches Excel ChancePlanAI K5:O15 and PMTable Cash_01/02/03 columns
 * @param {number} trialNum - The trial number to calculate (e.g., 33, 34, 35...)
 * @returns {Array} Array of [Month0, Month1, Month2, Month3] ending cash values
 */
function generateCashPath(trialNum) {
    // Month 0: Starting cash
    const path = [startingCash];

    // Calculate ending cash for each month using actual simulation
    // Excel shows endingCash (after line draws) from PMTable J/K/L columns
    for (let month = 1; month <= 3; month++) {
        const position = calculateTrialCashPosition(trialNum, month);
        path.push(Math.round(position.endingCash));
    }

    return path;
}

function getPathColor(index, total) {
    const hue = 210;
    const saturation = 70 + (index / total) * 20;
    const lightness = 45 + (index / total) * 20;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

let chart;
function initChart() {
    const ctx = document.getElementById('cashPathsChart').getContext('2d');

    let startTrial = parseInt(document.getElementById('startTrial').value);
    let numCurves = parseInt(document.getElementById('numCurves').value);

    // Safety check: ensure we don't exceed maxTrials
    const endTrial = startTrial + numCurves - 1;
    if (endTrial > maxTrials) {
        numCurves = maxTrials - startTrial + 1;
        document.getElementById('numCurves').value = numCurves;
    }

    document.getElementById('chartTitle').textContent =
        `Ending Cash Paths ${startTrial}-${startTrial + numCurves - 1}`;

    const datasets = [];
    for (let i = 0; i < numCurves; i++) {
        const data = generateCashPath(startTrial + i);
        datasets.push({
            label: `Path ${startTrial + i}`,
            data: data,
            borderColor: getPathColor(i, numCurves),
            backgroundColor: 'transparent',
            borderWidth: 1,
            tension: 0.3,
            pointRadius: 1,
            pointHoverRadius: 2,
            pointBackgroundColor: getPathColor(i, numCurves),
        });
    }
    
    if (chart) {
        chart.destroy();
    }
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Month 0', 'Month 1', 'Month 2', 'Month 3'],
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 3,
                    right: 3,
                    bottom: 3,
                    left: 3
                }
            },
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                    },
                    ticks: {
                        color: '#64748b',
                        font: {
                            family: "'DM Sans', sans-serif",
                            size: 10
                        }
                    }
                },
                y: {
                    grid: {
                        color: function(context) {
                            // Make the $0 line bold and darker
                            if (context.tick.value === 0) {
                                return 'rgba(148, 163, 184, 0.8)';
                            }
                            return 'rgba(148, 163, 184, 0.1)';
                        },
                        lineWidth: function(context) {
                            // Make the $0 line thicker
                            if (context.tick.value === 0) {
                                return 2;
                            }
                            return 1;
                        }
                    },
                    ticks: {
                        color: '#64748b',
                        font: {
                            family: "'Space Mono', monospace",
                            size: 9
                        },
                        callback: function(value) {
                            return '$' + value;
                        }
                    },
                    min: -100,
                    max: 200
                }
            }
        }
    });
}

function updateGauge(percentage) {
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (percentage / 100) * circumference;
    document.getElementById('gaugeFill').style.strokeDashoffset = offset;
    // Update both percentage displays
    const gaugeValueElement = document.getElementById('gaugeValue');
    if (gaugeValueElement) {
        gaugeValueElement.textContent = percentage.toFixed(1) + '%';
    }
    const riskValueElement = document.getElementById('riskValue');
    if (riskValueElement) {
        riskValueElement.textContent = (100 - percentage).toFixed(1) + '%';
    }
}

function updateChartInputConstraints() {
    const startTrialInput = document.getElementById('startTrial');
    const numCurvesInput = document.getElementById('numCurves');

    const startTrial = parseInt(startTrialInput.value) || 1;
    const numCurves = parseInt(numCurvesInput.value) || 1;

    // Calculate max allowed curves based on starting trial
    const maxCurves = maxTrials - startTrial + 1;

    // Update the max attribute
    numCurvesInput.max = maxCurves;

    // If current numCurves exceeds the new max, adjust it
    if (numCurves > maxCurves) {
        numCurvesInput.value = maxCurves;
    }
}

function adjustValue(inputId, delta) {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value) + delta;
    const min = parseInt(input.min) || 1;
    const max = parseInt(input.max) || 999;
    value = Math.max(min, Math.min(max, value));
    input.value = value;

    // Update constraints if startTrial changed
    if (inputId === 'startTrial') {
        updateChartInputConstraints();
    }

    initChart();
}

document.getElementById('startTrial').addEventListener('change', function() {
    updateChartInputConstraints();
    initChart();
});
document.getElementById('numCurves').addEventListener('change', function() {
    updateChartInputConstraints();
    initChart();
});

// Also validate on input (as user types)
document.getElementById('startTrial').addEventListener('input', function() {
    updateChartInputConstraints();
});
document.getElementById('numCurves').addEventListener('input', function() {
    updateChartInputConstraints();
});

// Sync both forecast toggles
function handleForecastChange(value) {
    if (value === 'submitted') {
        updateGauge(91.1);
    } else {
        updateGauge(87.5);
    }

    // Update all toggle options
    document.querySelectorAll('.toggle-option').forEach(option => {
        const input = option.querySelector('input');
        if (input.value === value) {
            option.classList.add('active');
            input.checked = true;
        } else {
            option.classList.remove('active');
            input.checked = false;
        }
    });
}

document.querySelectorAll('.toggle-option').forEach(option => {
    option.addEventListener('click', function() {
        const value = this.querySelector('input').value;
        handleForecastChange(value);
    });
});

// Period select handler
function handlePeriodChange(value) {
    // Recalculate with new selected month
    if (cfoData) {
        updateDashboard();
    } else {
        // Fallback to hardcoded values if data not loaded yet
        const gaugeValues = { '1': 98.5, '2': 95.2, '3': 91.1, '4': 85.3, '5': 78.9, '6': 72.4 };
        updateGauge(gaugeValues[value] || 91.1);
    }
}

document.getElementById('periodSelect').addEventListener('change', function() {
    handlePeriodChange(this.value);
});

// Update LOC Limit based on Increase LOC input
function updateLOCLimit() {
    const increaseLOCInput = document.getElementById('increaseLOC');
    const locLimitValue = document.getElementById('loc-limit-value');

    if (increaseLOCInput && locLimitValue) {
        // Parse the value from the input, handling accounting format
        const increaseValue = parseAccountingNumber(increaseLOCInput.value);
        const newLOCLimit = baseLOCLimit + increaseValue;
        const rounded = Math.round(newLOCLimit);

        // Format with no sign if zero
        if (rounded === 0) {
            locLimitValue.textContent = '$0';
        } else {
            locLimitValue.textContent = '$' + rounded;
        }
    }
}

// Add event listeners for CFO Levers inputs
document.addEventListener('DOMContentLoaded', function() {
    // Initialize chart input constraints
    updateChartInputConstraints();

    initChart();
    updateGauge(91.1);

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleSlider = themeToggle?.querySelector('.theme-toggle-slider');
    const htmlElement = document.documentElement;

    // Set initial theme (default to light mode)
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle?.classList.add('active');
        if (themeToggleSlider) themeToggleSlider.textContent = '🌙';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = htmlElement.getAttribute('data-theme') === 'dark';

            if (isDark) {
                // Switch to light mode
                htmlElement.removeAttribute('data-theme');
                themeToggle.classList.remove('active');
                if (themeToggleSlider) themeToggleSlider.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            } else {
                // Switch to dark mode
                htmlElement.setAttribute('data-theme', 'dark');
                themeToggle.classList.add('active');
                if (themeToggleSlider) themeToggleSlider.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Font size toggle functionality
    const fontSizeBtns = document.querySelectorAll('.font-size-btn');

    // Set initial font size (default to medium)
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    htmlElement.setAttribute('data-font-size', savedFontSize);

    // Set active button on load
    fontSizeBtns.forEach(btn => {
        if (btn.getAttribute('data-size') === savedFontSize) {
            btn.classList.add('active');
        }
    });

    // Add click handlers
    fontSizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            fontSizeBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get font size and apply it
            const fontSize = this.getAttribute('data-size');
            htmlElement.setAttribute('data-font-size', fontSize);
            localStorage.setItem('fontSize', fontSize);
        });
    });

    // Settings menu toggle
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDropdown = document.getElementById('settingsDropdown');

    if (settingsBtn && settingsDropdown) {
        settingsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            settingsDropdown.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!settingsDropdown.contains(e.target) && e.target !== settingsBtn) {
                settingsDropdown.classList.remove('active');
            }
        });

        // Prevent menu from closing when clicking inside
        settingsDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // CFO Levers collapse/expand toggle
    const cfoLeversHeader = document.getElementById('cfoLeversHeader');
    const cfoLeversContent = document.getElementById('cfoLeversContent');
    const expandIcon = cfoLeversHeader?.querySelector('.expand-icon');

    if (cfoLeversHeader && cfoLeversContent && expandIcon) {
        cfoLeversHeader.addEventListener('click', function() {
            cfoLeversContent.classList.toggle('expanded');
            expandIcon.classList.toggle('expanded');

            // Change icon from + to ×
            if (expandIcon.classList.contains('expanded')) {
                expandIcon.textContent = '×';
            } else {
                expandIcon.textContent = '+';
            }
        });
    }

    // Listen for changes on Increase LOC input
    const increaseLOCInput = document.getElementById('increaseLOC');
    if (increaseLOCInput) {
        increaseLOCInput.addEventListener('input', function() {
            increaseLOCValue = parseAccountingNumber(this.value);
            updateLOCLimit();
            updateDashboard(); // Recalculate with new LOC limit
        });
        increaseLOCInput.addEventListener('change', function() {
            increaseLOCValue = parseAccountingNumber(this.value);
            updateLOCLimit();
        });
    }

    // Listen for CFO Lever changes
    document.getElementById('cutOpex')?.addEventListener('change', function(e) {
        cutOpExValue = parseAccountingNumber(e.target.value);
        updateDashboard();
    });

    document.getElementById('collectAR')?.addEventListener('change', function(e) {
        collectARValue = parseAccountingNumber(e.target.value);
        console.log('Collect A/R changed to:', e.target.value, '→ Parsed as:', collectARValue);
        updateDashboard();
    });

    // Listen for changes on Line of Credit (Current) input in settings
    const lineOfCreditCurrentInput = document.getElementById('lineOfCreditCurrent');
    if (lineOfCreditCurrentInput) {
        lineOfCreditCurrentInput.addEventListener('input', function() {
            baseLOCLimit = parseAccountingNumber(this.value);
            updateLOCLimit();
            updateDashboard();
        });
    }

    // Listen for changes on Beginning Cash input in settings
    const beginningCashInput = document.getElementById('beginningCash');
    if (beginningCashInput) {
        beginningCashInput.addEventListener('input', function() {
            startingCash = parseAccountingNumber(this.value);
            updateDashboard();
        });
    }

    // Listen for changes on Fixed Exp Monthly Growth input in settings
    const fixedExpGrowthInput = document.getElementById('fixedExpGrowth');
    if (fixedExpGrowthInput) {
        fixedExpGrowthInput.addEventListener('input', function() {
            fixedExpGrowth = parseAccountingNumber(this.value);
            updateDashboard();
        });
    }

    // Listen for changes on Loan Payment input in settings
    const loanPaymentInput = document.getElementById('loanPayment');
    if (loanPaymentInput) {
        loanPaymentInput.addEventListener('input', function() {
            // Negate because user enters positive value but it's stored as negative (outflow)
            loanPayment = -parseAccountingNumber(this.value);
            updateDashboard();
        });
    }

    // Listen for changes on Max Trials input in settings
    const maxTrialsInput = document.getElementById('maxTrialsInput');
    if (maxTrialsInput) {
        maxTrialsInput.addEventListener('input', function() {
            const newMaxTrials = parseInt(this.value) || 10000;
            maxTrials = Math.max(100, Math.min(100000, newMaxTrials)); // Clamp between 100 and 100,000
            this.value = maxTrials; // Update the input to show the clamped value
            updateChartInputConstraints();
            updateDashboard();
        });
    }

    // Initialize LOC Limit display
    updateLOCLimit();

    // Engine toggle functionality
    const engineBtns = document.querySelectorAll('.engine-toggle-btn');
    engineBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            engineBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get engine type and update global variable
            const engineType = this.getAttribute('data-engine');
            calculationEngine = engineType; // 'submitted' or 'chanceplan'

            console.log('Calculation Engine changed to:', engineType);

            // Recalculate dashboard with new engine mode
            updateDashboard();
        });
    });

    // Card selector functionality for mobile
    const selectorBtns = document.querySelectorAll('.selector-toggle-btn');
    const cardSubmitted = document.querySelector('.card-submitted');
    const cardSimulated = document.querySelector('.card-simulated');
    const cardChart = document.querySelector('.card-chart');

    selectorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            selectorBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Hide all cards
            cardSubmitted?.classList.remove('active');
            cardSimulated?.classList.remove('active');
            cardChart?.classList.remove('active');

            // Show selected card
            const cardType = this.getAttribute('data-card');
            if (cardType === 'submitted') {
                cardSubmitted?.classList.add('active');
                cardSubmitted.style.display = 'block';
                cardSimulated.style.display = 'none';
                cardChart.style.display = 'none';
            } else if (cardType === 'simulated') {
                cardSimulated?.classList.add('active');
                cardSubmitted.style.display = 'none';
                cardSimulated.style.display = 'block';
                cardChart.style.display = 'none';
            } else if (cardType === 'chart') {
                cardChart?.classList.add('active');
                cardSubmitted.style.display = 'none';
                cardSimulated.style.display = 'none';
                cardChart.style.display = 'block';
            }
        });
    });

    // Process CFO SIPmath data on page load
    processCFOData();
});

// Handle resize for chart
window.addEventListener('resize', function() {
    if (chart) {
        chart.resize();
    }
});

// === Global Variables for CFO Dashboard ===
let cfoData = null; // Stores the loaded SIPmath data
let correlationMatrixData = null; // Stores correlation matrix if present
let numSips = 0; // Number of SIPs in the model
let rngParamsArray = []; // Stores RNG parameters for each SIP
let maxTrials = 10000; // Number of Monte Carlo trials to run (configurable)

// CFO Lever values (user inputs)
let cutOpExValue = 0;
let collectARValue = 0;
let increaseLOCValue = 0;

// Starting conditions
let startingCash = 50; // $50k starting cash
let baseLOCLimit = 20; // $20k base line of credit
let fixedExpGrowth = 10; // $10k monthly growth
let loanPayment = -50; // -$50k loan payment in month 3 (negative = outflow)

// Calculation engine mode (matches Excel W9 toggle)
// 'submitted' = Use deterministic averages (Excel W5=1)
// 'chanceplan' = Use stochastic SIPmath trials (Excel W5=2)
let calculationEngine = 'submitted';

// === Mathematical Helper Functions ===

/**
 * Parses a number in accounting format (handles parentheses as negative)
 * @param {string} value - The string value to parse (e.g., "($100)", "$50", "-25")
 * @returns {number} The parsed number value
 */
function parseAccountingNumber(value) {
    if (!value) return 0;

    // Convert to string and trim
    let str = String(value).trim();

    // Check if wrapped in parentheses (accounting format for negative)
    const isNegative = str.startsWith('(') && str.endsWith(')');

    // Remove parentheses, dollar signs, and commas
    str = str.replace(/[$,()]/g, '');

    // Parse the number
    let num = parseFloat(str);

    // Apply negative sign if it was in parentheses
    if (isNegative && !isNaN(num)) {
        num = -num;
    }

    return isNaN(num) ? 0 : num;
}

// Helper Math Functions
function mod(x, y) { return x % y; }
function LN(x) { return Math.log(x); }
function exp(x) { return Math.exp(x); }

// HDR PRNG - Deterministic pseudo-random number generator
function HDRprng(PM_Index, varID, entity, seed3, seed4) {
    var r = (mod((mod(mod(999999999999989, mod(PM_Index * 2499997 + varID * 1800451 + entity * 2000371 + seed3 * 1796777 +
        seed4 * 2299603, 7450589) * 4658 + 7450581) * 383, 99991) * 7440893 + mod(mod(999999999999989,
        mod(PM_Index * 2246527 + varID * 2399993 + entity * 2100869 + seed3 * 1918303 + seed4 * 1624729, 7450987) * 7580 + 7560584) * 17669, 7440893)) * 1343, 4294967296) + 0.5) / 4294967296;
    return r;
}

// Metalog Inverse CDF (Quantile Function)
function uMQ(a, r) {
    // Ensure r is within valid bounds to prevent issues with LN
    r = Math.max(1e-15, Math.min(1 - 1e-15, r));
    const rMinusHalf = r - 0.5;
    const logRatio = LN(r / (1 - r)); // Use global LN

    let result = a[0] +
                 a[1] * logRatio +
                 a[2] * rMinusHalf * logRatio +
                 a[3] * rMinusHalf +
                 a[4] * rMinusHalf**2 +
                 a[5] * rMinusHalf**2 * logRatio +
                 a[6] * rMinusHalf**3 +
                 a[7] * rMinusHalf**3 * logRatio +
                 a[8] * rMinusHalf**4 +
                 a[9] * rMinusHalf**4 * logRatio +
                 a[10] * rMinusHalf**5 +
                 a[11] * rMinusHalf**5 * logRatio +
                 a[12] * rMinusHalf**6 +
                 a[13] * rMinusHalf**6 * logRatio +
                 a[14] * rMinusHalf**7 +
                 a[15] * rMinusHalf**7 * logRatio;
    return result;
}

// === Correlation Support Functions ===

// Standard normal inverse CDF
function normSInv(p) {
    if (p <= 0 || p >= 1) throw new Error("p must be in (0,1)");

    const a = [-39.696830, 220.946098, -275.928510, 138.357751, -30.664798, 2.506628];
    const b = [-54.476098, 161.585836, -155.698980, 66.801311, -13.280681];
    const c = [-0.0077849, -0.322396, -2.400758, -2.549733, 4.374664, 2.938164];
    const d = [0.0077847, 0.322467, 2.445134, 3.754409];

    const plow = 0.02425;
    const phigh = 1 - plow;
    let q, r;

    if (p < plow) {
        q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0]*q + c[1])*q + c[2])*q + c[3])*q + c[4])*q + c[5]) /
               ((((d[0]*q + d[1])*q + d[2])*q + d[3])*q + 1);
    } else if (p > phigh) {
        q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0]*q + c[1])*q + c[2])*q + c[3])*q + c[4])*q + c[5]) /
                 ((((d[0]*q + d[1])*q + d[2])*q + d[3])*q + 1);
    } else {
        q = p - 0.5;
        r = q * q;
        return (((((a[0]*r + a[1])*r + a[2])*r + a[3])*r + a[4])*r + a[5]) * q /
               (((((b[0]*r + b[1])*r + b[2])*r + b[3])*r + b[4])*r + 1);
    }
}

// Cholesky decomposition for symmetric positive-definite matrices
function cholesky(matrix) {
    const n = matrix.length;
    const L = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            let sum = 0;
            for (let k = 0; k < j; k++) {
                sum += L[i][k] * L[j][k];
            }
            if (i === j) {
                const val = matrix[i][i] - sum;
                if (val <= 0) throw new Error("Matrix is not positive definite");
                L[i][j] = Math.sqrt(val);
            } else {
                L[i][j] = (matrix[i][j] - sum) / L[j][j];
            }
        }
    }
    return L;
}

// Convert uniform to normal
function uniformsToNormals(u) {
  return u.map(normSInv);
}

// Apply Cholesky factor to normal vector
function applyCholesky(L, z) {
  const n = z.length;
  const result = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result[i] += L[i][j] * z[j];
    }
  }
  return result;
}

// Standard normal CDF
function normCDF(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

// Error function approximation
function erf(x) {
  const sign = Math.sign(x);
  x = Math.abs(x);

  const a1 =  0.254829592, a2 = -0.284496736,
        a3 =  1.421413741, a4 = -1.453152027,
        a5 =  1.061405429, p  = 0.3275911;

  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x));
  return sign * y;
}

// Generate dependent uniforms from HDR using Gaussian copula
function gaussianCopulaSample(covMatrix, hdrSample) {
    const L = cholesky(covMatrix);
    const z = uniformsToNormals(hdrSample);
    const correlated = applyCholesky(L, z);
    return correlated.map(normCDF);
}

// Generate dependent Metalog samples from HDR + Copula
function metalogCopulaSample(covMatrix, hdrSample, metalogInverseFnArray) {
    const uCorrelated = gaussianCopulaSample(covMatrix, hdrSample);
    // Add safety check for metalogInverseFnArray length
    if (!metalogInverseFnArray || metalogInverseFnArray.length !== uCorrelated.length) {
        console.error(`Mismatched lengths in metalogCopulaSample: uniforms=${uCorrelated.length}, functions=${metalogInverseFnArray?.length}`);
        // Return NaNs or throw error, depending on desired handling
        return uCorrelated.map(() => NaN);
    }
    return uCorrelated.map((u, i) => {
         // Add safety check for individual function existence
         if (typeof metalogInverseFnArray[i] === 'function') {
             return metalogInverseFnArray[i](u);
         } else {
              console.warn(`No valid inverse function found for index ${i} in metalogCopulaSample`);
              return NaN;
         }
    });
}

// === CFO Data Processing Functions ===

/**
 * Processes the CFO SIPmath data from cashPathsData.
 */
function processCFOData() {
    try {
        // Load the first (and only) dataset from cashPathsData
        cfoData = cashPathsData[0];

        // Reset correlation state
        correlationMatrixData = null;
        numSips = 0;
        rngParamsArray = [];

        const hasCorrelationMatrix = cfoData.globalVariables?.some(
            gv => gv.name === 'correlationMatrix'
        );
        const currentNumSips = cfoData.sips?.length || 0;

        // Setup Correlation Context if present
        if (hasCorrelationMatrix && currentNumSips > 1) {
            console.log("Correlation matrix found. Setting up correlation context.");
            correlationMatrixData = cfoData.globalVariables.find(
                gv => gv.name === 'correlationMatrix'
            ).value;
            numSips = currentNumSips;

            // Prepare RNG params array
            rngParamsArray = cfoData.sips.map((sip, index) => {
                let rngArgs = null;
                try {
                    // Try to find RNG from copula definition first
                    const copulaDef = cfoData.U01?.copula?.[0];
                    const copulaRngName = copulaDef?.arguments?.rng?.[index];
                    if (copulaRngName) {
                        rngArgs = cfoData.U01?.rng?.find(
                            r => r.name === copulaRngName
                        )?.arguments;
                    }
                    // Fallback to direct RNG array
                    if (!rngArgs) {
                        rngArgs = cfoData.U01?.rng?.[index]?.arguments;
                    }
                } catch (e) {
                    console.warn("Error finding RNG params for SIP", index, e);
                }

                if (rngArgs) {
                    return {
                        varId: rngArgs.varId,
                        entity: rngArgs.entity,
                        seed3: rngArgs.seed3,
                        seed4: rngArgs.seed4
                    };
                } else {
                    console.warn(`RNG params not found for SIP index ${index}. Using defaults.`);
                    return { varId: index + 1, entity: 1, seed3: 0, seed4: 0 };
                }
            });
            console.log("Global RNG Parameters prepared:", rngParamsArray);
        } else {
            console.log("No correlation matrix found. Using independent calculations.");
            // Still set up RNG params for independent calculations
            numSips = currentNumSips;
            rngParamsArray = cfoData.sips.map((sip, index) => {
                const rngArgs = cfoData.U01?.rng?.[index]?.arguments;
                if (rngArgs) {
                    return {
                        varId: rngArgs.varId,
                        entity: rngArgs.entity,
                        seed3: rngArgs.seed3,
                        seed4: rngArgs.seed4
                    };
                } else {
                    return { varId: index + 1, entity: 1, seed3: 0, seed4: 0 };
                }
            });
        }

        // Initialize the dashboard with calculated values
        updateDashboard();

        console.log("CFO SIPmath data loaded successfully");

    } catch (error) {
        console.error("Error processing CFO SIPmath data:", error);
        alert("Error loading CFO forecast data: " + error.message);
    }
}

/**
 * Calculates the trial value for a specific SIP and trial number.
 * Uses correlation if context is active.
 * @param {object} sip - The SIP object (Rev_01, Rev_02, V_Exp, etc.).
 * @param {number} trialNum - The specific trial number (1-maxTrials).
 * @returns {number} The calculated value for the specified trial (in thousands).
 */
function calculateTrialValue(sip, trialNum = 1) {
    let trialValue = NaN;

    // Determine if correlation context is active
    const useCorrelation = !!(
        correlationMatrixData &&
        rngParamsArray &&
        rngParamsArray.length === numSips &&
        numSips > 1
    );

    if (sip.function === "Metalog_1_0") {
        let aCoeff = [...sip.arguments.aCoefficients];
        // Pad to 16 coefficients
        while (aCoeff.length < 16) {
            aCoeff.push(0);
        }

        try {
            let finalUniform = NaN;

            if (useCorrelation && cfoData) {
                // Correlated Path
                const sipIndex = cfoData.sips.findIndex(
                    s => s.name === sip.name
                );

                if (sipIndex !== -1 && rngParamsArray[sipIndex]) {
                    // Reconstruct Covariance Matrix
                    const size = correlationMatrixData.columns.length;
                    let covMatrix = Array.from(
                        { length: size },
                        () => Array(size).fill(0)
                    );
                    correlationMatrixData.matrix.forEach(item => {
                        const rowIndex = correlationMatrixData.rows.indexOf(item.row);
                        const colIndex = correlationMatrixData.columns.indexOf(item.col);
                        if (rowIndex !== -1 && colIndex !== -1) {
                            covMatrix[rowIndex][colIndex] = item.value;
                        }
                    });

                    // Generate independent HDR samples for all dimensions
                    let hdrSampleVector = rngParamsArray.map(params =>
                        params ? HDRprng(
                            trialNum,
                            params.varId,
                            params.entity,
                            params.seed3,
                            params.seed4
                        ) : Math.random()
                    );

                    // Generate correlated uniforms using Gaussian Copula
                    let correlatedUniformsVector = gaussianCopulaSample(
                        covMatrix,
                        hdrSampleVector
                    );

                    // Extract the uniform for the current SIP
                    finalUniform = correlatedUniformsVector[sipIndex];
                } else {
                    console.warn(
                        `Could not find SIP index or RNG params for ${sip.name}. Falling back.`
                    );
                    finalUniform = NaN;
                }
            }

            // If correlation failed or wasn't active, calculate independently
            if (isNaN(finalUniform)) {
                // Independent Path
                let rngParams;
                const sipIndex = cfoData?.sips?.findIndex(
                    s => s.name === sip.name
                );

                if (sipIndex !== -1 && rngParamsArray && rngParamsArray[sipIndex]) {
                    rngParams = rngParamsArray[sipIndex];
                } else {
                    // Absolute fallback
                    try {
                        rngParams = sip.U01?.rng?.[0]?.arguments;
                        if (!rngParams) throw new Error("No direct RNG found");
                    } catch {
                        console.warn(
                            `Using default RNG params for independent calc of ${sip.name}`
                        );
                        rngParams = {
                            varId: (sipIndex ?? 0) + 1,
                            entity: 1,
                            seed3: 0,
                            seed4: 0
                        };
                    }
                }
                finalUniform = HDRprng(
                    trialNum,
                    rngParams.varId,
                    rngParams.entity,
                    rngParams.seed3,
                    rngParams.seed4
                );
            }

            // Apply Metalog inverse transform (uMQ)
            trialValue = uMQ(aCoeff, finalUniform);

            // Apply bounds if they exist
            let lb = sip.arguments.lowerBound;
            let ub = sip.arguments.upperBound;
            if (!isNaN(trialValue)) {
                if (lb !== undefined) {
                    if (ub === undefined) {
                        trialValue = lb + Math.exp(trialValue);
                    } else {
                        trialValue = lb + ub * Math.exp(trialValue) /
                                      (1 + Math.exp(trialValue));
                    }
                } else if (ub !== undefined) {
                    trialValue = ub - Math.exp(-trialValue);
                }
            }

        } catch (error) {
            console.error(`Error calculating value for ${sip.name}:`, error);
            trialValue = uMQ(aCoeff, 0.5); // Fallback to median

            // Apply bounds to fallback
            let lb = sip.arguments.lowerBound;
            let ub = sip.arguments.upperBound;
            if (!isNaN(trialValue)) {
                if (lb !== undefined) {
                    if (ub === undefined) {
                        trialValue = lb + Math.exp(trialValue);
                    } else {
                        trialValue = lb + ub * Math.exp(trialValue) /
                                      (1 + Math.exp(trialValue));
                    }
                } else if (ub !== undefined) {
                    trialValue = ub - Math.exp(-trialValue);
                }
            }
        }
    } else {
        console.warn(
            `Unsupported function type ${sip.function} for ${sip.name}.`
        );
        trialValue = NaN;
    }

    return trialValue;
}

/**
 * Maps SIPmath SIP names to business meanings
 */
const SIP_MAPPINGS = {
    'Rev_01': { label: 'Month 1 Revenue', month: 1, type: 'revenue' },
    'Rev_02': { label: 'Month 2 Revenue', month: 2, type: 'revenue' },
    'Rev_03': { label: 'Month 3 Revenue', month: 3, type: 'revenue' },
    'V_Exp': { label: 'Variable Expenses', type: 'expense' },
    'F_Exp': { label: 'Fixed Expenses', type: 'expense' }
};

/**
 * Gets the SIP data for a specific variable by name
 */
function getSIPByName(sipName) {
    if (!cfoData || !cfoData.sips) return null;
    return cfoData.sips.find(sip => sip.name === sipName);
}

/**
 * Calculates the ending cash position for a specific trial and month.
 * Formula: Cash = Starting Cash + Revenues - OpEx - Debt + LOC Draw
 * CFO Levers:
 *   - Collect A/R: Added to Month 3 REVENUE only
 *   - Cut OpEx: Reduces FIXED EXPENSES
 *   - Increase LOC: Increases line of credit limit
 * Engine Mode:
 *   - 'submitted': Uses deterministic metadata averages (matches Excel W5=1)
 *   - 'chanceplan': Uses stochastic trial calculations (matches Excel W5=2)
 * @param {number} trialNum - The trial number (1-maxTrials)
 * @param {number} month - The month number (1-3)
 * @returns {object} { endingCash, revenue, opex, debt, cashFlow, startingCash, lineDraw, cashPosition }
 */
function calculateTrialCashPosition(trialNum, month) {
    // Get revenue for this month
    const revSip = getSIPByName(`Rev_0${month}`);
    let revenue;

    // Check calculation engine mode (matches Excel IF($W$9, D11, F11) logic)
    if (calculationEngine === 'submitted') {
        // Use deterministic metadata average (Excel D column)
        revenue = revSip?.metadata?.['Avg of 10,000'] || 0;
    } else {
        // Use stochastic trial calculation (Excel F column)
        revenue = revSip ? calculateTrialValue(revSip, trialNum) : 0;
    }

    // Add Collect A/R to Month 3 revenue ONLY (matches Excel E13 formula)
    if (month === 3) {
        if (trialNum === 1) {
            console.log(`Month 3, Trial 1: Base revenue=${revenue}, collectARValue=${collectARValue}, Final revenue=${revenue + collectARValue}`);
        }
        revenue += collectARValue;
    }

    // Get variable expenses (as percentage of revenue)
    const vExpSip = getSIPByName('V_Exp');
    let vExpPct;

    if (calculationEngine === 'submitted') {
        vExpPct = vExpSip?.metadata?.['Avg of 10,000'] || 0.1;
    } else {
        vExpPct = vExpSip ? calculateTrialValue(vExpSip, trialNum) : 0.1;
    }

    const variableExp = revenue * vExpPct;

    // Get fixed expenses
    const fExpSip = getSIPByName('F_Exp');
    let baseFixedExp;

    if (calculationEngine === 'submitted') {
        baseFixedExp = fExpSip?.metadata?.['Avg of 10,000'] || 150;
    } else {
        baseFixedExp = fExpSip ? calculateTrialValue(fExpSip, trialNum) : 150;
    }

    // Apply Cut OpEx to base fixed expenses FIRST (matches Excel E15 formula)
    const fixedExpAfterCuts = baseFixedExp - cutOpExValue;

    // Add monthly growth AFTER applying cuts (matches Excel E31, F31, G31)
    // Month 1: +$0, Month 2: +$10k, Month 3: +$20k
    const fixedExpWithGrowth = fixedExpAfterCuts + (month - 1) * fixedExpGrowth;

    // Calculate total OpEx
    const totalOpEx = variableExp + fixedExpWithGrowth;

    // Debt payment (only in month 3) - loanPayment is negative (outflow)
    const debtPayment = (month === 3) ? loanPayment : 0;

    // Calculate cash flow for this month
    // Since debtPayment is negative, adding it subtracts from cash flow
    const cashFlow = revenue - totalOpEx + debtPayment;

    // Get starting cash for this month (cumulative from previous months)
    // IMPORTANT: Use cashPosition (before line draws), NOT endingCash (after line draws)
    // This matches Excel's G35 = F35 + G33 formula
    let startCash = startingCash;
    if (month > 1) {
        // Need to calculate cumulative cash from previous months
        for (let m = 1; m < month; m++) {
            const prevMonth = calculateTrialCashPosition(trialNum, m);
            startCash = prevMonth.cashPosition;  // Use position, not endingCash!
        }
    }

    // Calculate operating cash position (before LOC draw)
    const cashPosition = startCash + cashFlow;

    // Calculate line of credit draw if needed (matches Excel E37, F37, G37)
    const locLimit = baseLOCLimit + increaseLOCValue;
    let lineDraw = 0;
    if (cashPosition < 0) {
        lineDraw = Math.min(Math.abs(cashPosition), locLimit);
    }

    // Calculate ending cash (after LOC draw)
    const endingCash = cashPosition + lineDraw;

    return {
        endingCash: endingCash,
        revenue: revenue,
        opex: totalOpEx,
        debt: debtPayment,
        cashFlow: cashFlow,
        startingCash: startCash,
        lineDraw: lineDraw,
        cashPosition: cashPosition
    };
}

/**
 * Runs Monte Carlo simulation for all months
 * Matches Excel PMTable calculations
 * @param {number} selectedMonth - The month to focus analysis on
 * @returns {object} Simulation results with statistics
 */
function runMonteCarloSimulation(selectedMonth) {
    const results = {
        month1: { cash: [], lineDraw: [], chanceLOCDraw: 0, chanceCashNegative: 0 },
        month2: { cash: [], lineDraw: [], chanceLOCDraw: 0, chanceCashNegative: 0 },
        month3: { cash: [], lineDraw: [], chanceLOCDraw: 0, chanceCashNegative: 0 }
    };

    // Run trials (matches Excel PMTable rows 4-10003)
    for (let trial = 1; trial <= maxTrials; trial++) {
        for (let month = 1; month <= 3; month++) {
            const position = calculateTrialCashPosition(trial, month);

            // Use calculated values from position (already includes LOC logic)
            const finalCash = position.endingCash;
            const lineDraw = position.lineDraw || 0;

            const monthKey = `month${month}`;
            results[monthKey].cash.push(finalCash);
            results[monthKey].lineDraw.push(lineDraw);
        }
    }

    // Calculate statistics for each month (matches Excel Chanceboard E23-G27)
    for (let month = 1; month <= 3; month++) {
        const monthKey = `month${month}`;
        const cashArray = results[monthKey].cash;
        const lineDrawArray = results[monthKey].lineDraw;

        // Calculate averages
        results[monthKey].avgCash = cashArray.reduce((a, b) => a + b, 0) / maxTrials;
        results[monthKey].avgLineDraw = lineDrawArray.reduce((a, b) => a + b, 0) / maxTrials;

        // Calculate chances
        results[monthKey].chanceLOCDraw =
            (lineDrawArray.filter(d => d > 0).length / maxTrials) * 100;
        results[monthKey].chanceCashNegative =
            (cashArray.filter(c => c < 0).length / maxTrials) * 100;

        // Calculate chance of cash >= 0 (for the gauge)
        results[monthKey].chanceCashPositive =
            (cashArray.filter(c => c >= 0).length / maxTrials) * 100;
    }

    return results;
}

/**
 * Updates the dashboard with calculated values from Monte Carlo simulation
 */
function updateDashboard() {
    if (!cfoData) {
        console.warn("No CFO data loaded");
        return;
    }

    // Get selected month from dropdown
    const periodSelect = document.getElementById('periodSelect');
    let selectedMonth = periodSelect ? parseInt(periodSelect.value) : 3;

    // Handle "Quarter" selection - use Month 3
    if (isNaN(selectedMonth) || periodSelect?.value === 'quarter') {
        selectedMonth = 3;
    }

    console.log(`Running simulation for month ${selectedMonth}...`);
    console.log(`CFO Levers: Cut OpEx=${cutOpExValue}, Collect A/R=${collectARValue}, Increase LOC=${increaseLOCValue}`);

    // Run Monte Carlo simulation for all trials
    const results = runMonteCarloSimulation(selectedMonth);

    console.log("Simulation complete:", results);

    // Update gauge/chance meter for selected month
    const monthKey = `month${selectedMonth}`;
    if (results[monthKey]) {
        updateGauge(results[monthKey].chanceCashPositive);
    }

    // Update Submitted Forecast table (deterministic values using median/mean)
    updateSubmittedForecast();

    // Update Simulated Cash Flow Results table
    updateSimulatedResults(results, selectedMonth);

    // Update Ending Cash Paths chart with actual simulation data
    initChart();
}

/**
 * Updates the Submitted Forecast table with deterministic values
 * Matches Excel Chanceboard sheet rows 13-19
 * IMPORTANT: This table shows the ORIGINAL SUBMITTED PLAN without CFO lever adjustments!
 * Only "Increase LOC" affects this table (in line draw calculations).
 */
function updateSubmittedForecast() {
    // Use metadata averages from SIPmath data for deterministic forecast
    const rev1Sip = getSIPByName('Rev_01');
    const rev2Sip = getSIPByName('Rev_02');
    const rev3Sip = getSIPByName('Rev_03');
    const vExpSip = getSIPByName('V_Exp');
    const fExpSip = getSIPByName('F_Exp');

    // Base values from ChancePlanAI D column (NO CFO LEVERS APPLIED!)
    const rev1 = rev1Sip?.metadata?.['Avg of 10,000'] || 180;
    const rev2 = rev2Sip?.metadata?.['Avg of 10,000'] || 200;
    const rev3 = rev3Sip?.metadata?.['Avg of 10,000'] || 220;
    const vExpPct = vExpSip?.metadata?.['Avg of 10,000'] || 0.1;
    const fExp = fExpSip?.metadata?.['Avg of 10,000'] || 150;

    // NO Collect A/R applied to Submitted Forecast!
    // NO Cut OpEx applied to Submitted Forecast!

    // Calculate OpEx for each month (matches Excel E14, F14, G14)
    // Formula: -(V_Exp*Revenue + F_Exp + monthly_growth)
    const opex1 = -(rev1 * vExpPct + fExp); // Month 1: no growth
    const opex2 = -(rev2 * vExpPct + fExp + fixedExpGrowth); // Month 2: +$10k
    const opex3 = -(rev3 * vExpPct + fExp + 2 * fixedExpGrowth); // Month 3: +$20k

    // Calculate cash flow for each month (matches Excel E16, F16, G16)
    // Formula: SUM(revenue + opex + debt) where opex and debt are negative
    const cashFlow1 = rev1 + opex1; // Month 1: no debt payment
    const cashFlow2 = rev2 + opex2; // Month 2: no debt payment
    const cashFlow3 = rev3 + opex3 + loanPayment; // Month 3: includes debt payment

    // Calculate ending cash for each month BEFORE line draws (matches Excel E18, F18, G18)
    const cash1 = startingCash + cashFlow1;
    const cash2 = cash1 + cashFlow2;
    const cash3 = cash2 + cashFlow3;

    // Calculate line draws if needed (matches Excel E19, F19, G19)
    const locLimit = baseLOCLimit + increaseLOCValue;
    const lineDraw1 = Math.min(locLimit, Math.max(0, -cash1));
    const lineDraw2 = Math.min(locLimit, Math.max(0, -cash2));
    const lineDraw3 = Math.min(locLimit, Math.max(0, -cash3));

    // Note: Cash row displays cash BEFORE line draws
    // Line draws are shown separately in the Line Draw row

    // Update table cells (if they exist)
    const updateCell = (id, value, isMonetary = true) => {
        const cell = document.getElementById(id);
        if (cell) {
            const rounded = isMonetary ? Math.round(value) : parseFloat(value.toFixed(1));

            // Format the value
            if (isMonetary) {
                // Handle zero case - no sign
                if (rounded === 0) {
                    cell.textContent = '$0';
                } else {
                    cell.textContent = `$${rounded}`;
                }
            } else {
                cell.textContent = value.toFixed(1);
            }

            // Apply color classes and handle value-highlight
            cell.classList.remove('value-positive', 'value-negative', 'value-neutral', 'value-highlight', 'value-warning');
            if (rounded < 0) {
                cell.classList.add('value-warning'); // Use value-warning for negative (red background)
            } else if (rounded > 0) {
                cell.classList.add('value-highlight'); // Use value-highlight for positive (green background)
            } else {
                cell.classList.add('value-neutral');
            }
        }
    };

    // Month 1
    updateCell('submitted-revenues-mo1', rev1);
    updateCell('submitted-opex-mo1', opex1);
    updateCell('submitted-debt-mo1', 0);
    updateCell('submitted-cashflow-mo1', cashFlow1);
    updateCell('submitted-cash-mo1', cash1);
    updateCell('submitted-linedraw-mo1', lineDraw1);

    // Month 2
    updateCell('submitted-revenues-mo2', rev2);
    updateCell('submitted-opex-mo2', opex2);
    updateCell('submitted-debt-mo2', 0);
    updateCell('submitted-cashflow-mo2', cashFlow2);
    updateCell('submitted-cash-mo2', cash2);
    updateCell('submitted-linedraw-mo2', lineDraw2);

    // Month 3
    updateCell('submitted-revenues-mo3', rev3);
    updateCell('submitted-opex-mo3', opex3);
    updateCell('submitted-debt-mo3', loanPayment);
    updateCell('submitted-cashflow-mo3', cashFlow3);
    updateCell('submitted-cash-mo3', cash3);
    updateCell('submitted-linedraw-mo3', lineDraw3);

    // Update starting cash display
    const startCashCell = document.getElementById('submitted-starting-cash');
    if (startCashCell) {
        const rounded = Math.round(startingCash);
        const cashDisplay = rounded === 0 ? '$0' : `$${rounded}`;
        startCashCell.textContent = `Starting Cash: ${cashDisplay}`;
    }
}

/**
 * Updates the Simulated Results table with Monte Carlo statistics
 */
function updateSimulatedResults(results, selectedMonth) {
    const updateCell = (id, value, isMonetary = true) => {
        const cell = document.getElementById(id);
        if (cell) {
            const rounded = isMonetary ? Math.round(value) : parseFloat(value.toFixed(1));

            // Format the value
            if (isMonetary) {
                // Handle zero case - no sign
                if (rounded === 0) {
                    cell.textContent = '$0';
                } else {
                    cell.textContent = `$${rounded}`;
                }
            } else {
                cell.textContent = `${value.toFixed(1)}%`;
            }

            // Apply color classes and handle value-highlight
            cell.classList.remove('value-positive', 'value-negative', 'value-neutral', 'value-highlight', 'value-warning');
            if (rounded < 0) {
                cell.classList.add('value-warning'); // Use value-warning for negative (red background)
            } else if (rounded > 0) {
                cell.classList.add('value-highlight'); // Use value-highlight for positive (green background)
            } else {
                cell.classList.add('value-neutral');
            }
        }
    };

    // Month 1
    if (results.month1) {
        updateCell('simulated-cash-mo1', results.month1.avgCash);
        updateCell('simulated-linedraw-mo1', results.month1.avgLineDraw);
        updateCell('simulated-chance-loc-mo1', results.month1.chanceLOCDraw, false);
        updateCell('simulated-chance-cash-mo1', results.month1.chanceCashNegative, false);
        // Force red styling for Chance Cash < $0
        const cashCell1 = document.getElementById('simulated-chance-cash-mo1');
        if (cashCell1) {
            cashCell1.classList.remove('value-highlight', 'value-neutral');
            cashCell1.classList.add('value-warning');
        }
    }

    // Month 2
    if (results.month2) {
        updateCell('simulated-cash-mo2', results.month2.avgCash);
        updateCell('simulated-linedraw-mo2', results.month2.avgLineDraw);
        updateCell('simulated-chance-loc-mo2', results.month2.chanceLOCDraw, false);
        updateCell('simulated-chance-cash-mo2', results.month2.chanceCashNegative, false);
        // Force red styling for Chance Cash < $0
        const cashCell2 = document.getElementById('simulated-chance-cash-mo2');
        if (cashCell2) {
            cashCell2.classList.remove('value-highlight', 'value-neutral');
            cashCell2.classList.add('value-warning');
        }
    }

    // Month 3
    if (results.month3) {
        updateCell('simulated-cash-mo3', results.month3.avgCash);
        updateCell('simulated-linedraw-mo3', results.month3.avgLineDraw);
        updateCell('simulated-chance-loc-mo3', results.month3.chanceLOCDraw, false);
        updateCell('simulated-chance-cash-mo3', results.month3.chanceCashNegative, false);
        // Force red styling for Chance Cash < $0
        const cashCell3 = document.getElementById('simulated-chance-cash-mo3');
        if (cashCell3) {
            cashCell3.classList.remove('value-highlight', 'value-neutral');
            cashCell3.classList.add('value-warning');
        }
    }
}

/**
 * Evaluates a comparison condition.
 * @param {number} value The value to compare.
 * @param {string} operator The comparison operator (e.g., '>', '<').
 * @param {number} target The target value to compare against.
 * @returns {boolean} True if the condition is met, false otherwise.
 */
function evaluateCondition(value, operator, target) {
    if (isNaN(value) || isNaN(target)) {
        return false;
    }
    switch (operator) {
        case '>': return value > target;
        case '<': return value < target;
        case '>=': return value >= target;
        case '<=': return value <= target;
        case '==': case '=': return value == target;
        case '!=': case '<>': return value != target;
        default:
            console.warn(`Unsupported comparison operator: ${operator}`);
            return false;
    }
}

// Viewport Display for debugging
function updateViewportDisplay() {
    const display = document.getElementById('viewportDisplay');
    if (display) {
        display.textContent = `${window.innerWidth}px × ${window.innerHeight}px`;
    }
}

// Update on load and resize
window.addEventListener('load', updateViewportDisplay);
window.addEventListener('resize', updateViewportDisplay);
updateViewportDisplay();