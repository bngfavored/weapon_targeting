// Data generation for cash paths simulation
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

document.querySelectorAll('.toggle-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.toggle-option').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        this.querySelector('input').checked = true;
        
        if (this.querySelector('input').value === 'submitted') {
            updateGauge(91.1);
        } else {
            updateGauge(87.5);
        }
    });
});

document.getElementById('periodSelect').addEventListener('change', function() {
    const gaugeValues = { '1': 98.5, '2': 95.2, '3': 91.1, '4': 85.3, '5': 78.9, '6': 72.4 };
    updateGauge(gaugeValues[this.value] || 91.1);
});

document.addEventListener('DOMContentLoaded', function() {
    initChart();
    updateGauge(91.1);
});

// Handle resize for chart
window.addEventListener('resize', function() {
    if (chart) {
        chart.resize();
    }
});