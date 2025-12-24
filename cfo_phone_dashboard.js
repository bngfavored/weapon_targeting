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
function generateCashPath(seed) {
    const startingCash = 50;
    const path = [startingCash];
    
    const random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
    
    let cash = startingCash;
    for (let i = 1; i <= 3; i++) {
        const baseFlow = [12, 20, -22][i-1];
        const variance = (random() - 0.5) * 60;
        cash += baseFlow + variance;
        path.push(Math.round(cash));
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
    
    const startTrial = parseInt(document.getElementById('startTrial').value);
    const numCurves = parseInt(document.getElementById('numCurves').value);
    
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
            borderWidth: 2,
            tension: 0.3,
            pointRadius: 2,
            pointHoverRadius: 4,
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
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 35, 50, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: 'rgba(148, 163, 184, 0.2)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: $${context.raw}`;
                        }
                    }
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
                        color: 'rgba(148, 163, 184, 0.1)',
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

function adjustValue(inputId, delta) {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value) + delta;
    const min = parseInt(input.min) || 1;
    const max = parseInt(input.max) || 999;
    value = Math.max(min, Math.min(max, value));
    input.value = value;
    initChart();
}

document.getElementById('startTrial').addEventListener('change', initChart);
document.getElementById('numCurves').addEventListener('change', initChart);

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

// Sync both period selects
function handlePeriodChange(value) {
    const gaugeValues = { '1': 98.5, '2': 95.2, '3': 91.1, '4': 85.3, '5': 78.9, '6': 72.4 };
    updateGauge(gaugeValues[value] || 91.1);

    // Sync both selects
    document.getElementById('periodSelect').value = value;
    const periodSelect2 = document.getElementById('periodSelect2');
    if (periodSelect2) {
        periodSelect2.value = value;
    }
}

document.getElementById('periodSelect').addEventListener('change', function() {
    handlePeriodChange(this.value);
});

const periodSelect2 = document.getElementById('periodSelect2');
if (periodSelect2) {
    periodSelect2.addEventListener('change', function() {
        handlePeriodChange(this.value);
    });
}

// Update LOC Limit based on Increase LOC input
function updateLOCLimit() {
    const baseLOC = 20;
    const increaseLOCInput = document.getElementById('increaseLOC');
    const locLimitValue = document.getElementById('loc-limit-value');

    if (increaseLOCInput && locLimitValue) {
        // Parse the value from the input, removing $ and commas
        const increaseValue = parseFloat(increaseLOCInput.value.replace(/[$,]/g, '')) || 0;
        const newLOCLimit = baseLOC + increaseValue;
        locLimitValue.textContent = '$' + newLOCLimit.toFixed(0);
    }
}

// Add event listeners for CFO Levers inputs
document.addEventListener('DOMContentLoaded', function() {
    initChart();
    updateGauge(91.1);

    // Listen for changes on Increase LOC input
    const increaseLOCInput = document.getElementById('increaseLOC');
    if (increaseLOCInput) {
        increaseLOCInput.addEventListener('input', updateLOCLimit);
        increaseLOCInput.addEventListener('change', updateLOCLimit);
    }

    // Initialize LOC Limit display
    updateLOCLimit();
});

// Handle resize for chart
window.addEventListener('resize', function() {
    if (chart) {
        chart.resize();
    }
});

// === Mathematical Helper Functions ===

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