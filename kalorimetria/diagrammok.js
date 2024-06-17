function drawChart1(formId, canvasId) {
    // Get form elements
    const form = document.getElementById(formId);
    const minPressure = parseFloat(form.elements['minPressure'].value);
    const maxPressure = parseFloat(form.elements['maxPressure'].value);
    const minVolume = form.elements['minVolume'] ? parseFloat(form.elements['minVolume'].value) : null;
    const maxVolume = form.elements['maxVolume'] ? parseFloat(form.elements['maxVolume'].value) : null;
    const minTemperature = form.elements['minTemperature'] ? parseFloat(form.elements['minTemperature'].value) : null;
    const maxTemperature = form.elements['maxTemperature'] ? parseFloat(form.elements['maxTemperature'].value) : null;

    // Generate data points
    const data = [];
    const steps = 10;
    for (let i = 0; i <= steps; i++) {
        const t = minTemperature + (maxTemperature - minTemperature) * i / steps;
        const v = minVolume + (maxVolume - minVolume) * i / steps;
        const p = minPressure + (maxPressure - minPressure) * i / steps;
        if (formId === 'izotermForm') {
            data.push({ x: v, y: p });
        } else if (formId === 'izobarForm') {
            data.push({ x: t, y: v });
        } else if (formId === 'izochorForm') {
            data.push({ x: t, y: p });
        }
    }

    // Chart.js configuration
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Diagram',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                showLine: true
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: formId === 'izotermForm' ? 'Volume (m³)' : 'Temperature (°C)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: formId === 'izobarForm' ? 'Volume (m³)' : 'Pressure (Pa)'
                    }
                }
            }
        }
    });
}


function drawChart2(formId, canvasId) {
    // Get form elements
    const form = document.getElementById(formId);
    const minPressure = parseFloat(form.elements['minPressure'].value);
    const maxPressure = parseFloat(form.elements['maxPressure'].value);
    const minVolume = form.elements['minVolume'] ? parseFloat(form.elements['minVolume'].value) : null;
    const maxVolume = form.elements['maxVolume'] ? parseFloat(form.elements['maxVolume'].value) : null;
    const minTemperature = form.elements['minTemperature'] ? parseFloat(form.elements['minTemperature'].value) : null;
    const maxTemperature = form.elements['maxTemperature'] ? parseFloat(form.elements['maxTemperature'].value) : null;

    // Generate data points
    const data = [];
    const steps = 10;
    for (let i = 0; i <= steps; i++) {
        const t = minTemperature + (maxTemperature - minTemperature) * i / steps;
        const v = minVolume + (maxVolume - minVolume) * i / steps;
        const p = minPressure + (maxPressure - minPressure) * i / steps;
        if (formId === 'izotermForm') {
            data.push({ x: v, y: p });
        } else if (formId === 'izobarForm') {
            data.push({ x: t, y: v });
        } else if (formId === 'izochorForm') {
            data.push({ x: t, y: p });
        }
    }

    // Chart.js configuration
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Diagram',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                showLine: true
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: formId === 'izotermForm' ? 'Volume (m³)' : 'Temperature (°C)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: formId === 'izobarForm' ? 'Volume (m³)' : 'Pressure (Pa)'
                    }
                }
            }
        }
    });
}

function drawChart3(formId, canvasId) {
    // Get form elements
    const form = document.getElementById(formId);
    const minPressure = parseFloat(form.elements['minPressure'].value);
    const maxPressure = parseFloat(form.elements['maxPressure'].value);
    const minVolume = form.elements['minVolume'] ? parseFloat(form.elements['minVolume'].value) : null;
    const maxVolume = form.elements['maxVolume'] ? parseFloat(form.elements['maxVolume'].value) : null;
    const minTemperature = form.elements['minTemperature'] ? parseFloat(form.elements['minTemperature'].value) : null;
    const maxTemperature = form.elements['maxTemperature'] ? parseFloat(form.elements['maxTemperature'].value) : null;

    // Generate data points
    const data = [];
    const steps = 10;
    for (let i = 0; i <= steps; i++) {
        const t = minTemperature + (maxTemperature - minTemperature) * i / steps;
        const v = minVolume + (maxVolume - minVolume) * i / steps;
        const p = minPressure + (maxPressure - minPressure) * i / steps;
        if (formId === 'izotermForm') {
            data.push({ x: v, y: p });
        } else if (formId === 'izobarForm') {
            data.push({ x: t, y: v });
        } else if (formId === 'izochorForm') {
            data.push({ x: t, y: p });
        }
    }

    // Chart.js configuration
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Diagram',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                showLine: true
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: formId === 'izotermForm' ? 'Volume (m³)' : 'Temperature (°C)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: formId === 'izobarForm' ? 'Volume (m³)' : 'Pressure (Pa)'
                    }
                }
            }
        }
    });
}