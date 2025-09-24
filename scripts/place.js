console.log("Last updated: 2024-06-20");

// Place your custom weather script here.
const temperature = 5; // °C
const windSpeed = 20;  // km/h
const conditions = "Sunny"; // Example condition
const units = 'metric'; // 'metric' or 'imperial'

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed, units = 'metric') {
    return units === 'metric'
        ? (temp <= 10 && windSpeed > 4.8
            ? 13.12 + 0.6215*temp - 11.37*Math.pow(windSpeed, 0.16) + 0.3965*temp*Math.pow(windSpeed, 0.16)
            : "N/A")
        : (temp <= 50 && windSpeed > 3
            ? 35.74 + 0.6215*temp - 35.75*Math.pow(windSpeed, 0.16) + 0.4275*temp*Math.pow(windSpeed, 0.16)
            : "N/A");
}

// Display weather information
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('temperature').textContent = temperature + "°C";
    document.getElementById('windSpeed').textContent = windSpeed + " km/h";
    document.getElementById('conditions').textContent = conditions;

    const windChillValue = calculateWindChill(temperature, windSpeed, units);
    document.getElementById('windChill').textContent = typeof windChillValue === 'number' ? windChillValue.toFixed(2) + "°" : windChillValue;
});
