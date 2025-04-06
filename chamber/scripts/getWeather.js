const apiKey = "676062271fc423d47b65b2ee7e8d67f0";
const lat = -38.0023;
const lon = -57.5575;

async function getWeather() {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const weatherData = await weatherResponse.json();

    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("temperature").textContent = `Temperature: ${weatherData.main.temp.toFixed(1)}°C`;
    document.getElementById("description").textContent = `Condition: ${weatherData.weather[0].description}`;
    document.getElementById("weather-icon").src = iconUrl;
    document.getElementById("weather-icon").alt = weatherData.weather[0].description;

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const forecastData = await forecastResponse.json();

    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = "";

    const dailyForecasts = forecastData.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    dailyForecasts.forEach(forecast => {
      const li = document.createElement("li");
      const date = new Date(forecast.dt_txt).toLocaleDateString("en-GB", {
        weekday: "short",
        month: "short",
        day: "numeric"
      });

      const forecastTemp = forecast.main.temp.toFixed(1);
      const forecastIcon = forecast.weather[0].icon;
      const forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIcon}@2x.png`;
      const forecastDescription = forecast.weather[0].main;

      li.innerHTML = `
        <strong>${date}</strong>: ${forecastTemp}°C - ${forecastDescription}
        <img src="${forecastIconUrl}" alt="${forecastDescription}" width="48" height="48">
      `;
      forecastList.appendChild(li);
    });

  } catch (error) {
    console.error("Weather API Error:", error);
  }
}

getWeather();
