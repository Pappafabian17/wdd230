const apiKey = '676062271fc423d47b65b2ee7e8d67f0';
const lat = -38.004976129466634; 
const lon = -57.55055513128936;
const units = 'metric';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}&lang=en`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const temp = data.main.temp.toFixed(1);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById('current-temp').textContent = `🌡️ ${temp} °C`;
    document.getElementById('weather-description').textContent = `☁️ ${desc}`;
    
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = iconUrl;
    weatherIcon.alt = desc;
    weatherIcon.style.display = 'inline';
}

fetchWeather();
