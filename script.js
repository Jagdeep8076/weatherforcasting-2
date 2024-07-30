const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const forecastList = document.getElementById('forecast-list');

searchBtn.addEventListener('click', getWeather);

function getWeather() {
  const city = cityInput.value.trim();
  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  const url = `https:tps://data.api.xweather.com/airquality

  fetch(url)
    .then(response => response.json())
    .then(data => {
      cityName.textContent = data.name;
      weatherDescription.textContent = data.weather[0].description;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

      getForecast(data.coord.lat, data.coord.lon);
    })
    .catch(error => console.error(error));
}

function getForecast(lat, lon) {
 
