document.addEventListener("DOMContentLoaded", function () {
  const apiKey = '71d2de7338msh5a586a3a9397e5fp183f41jsn5275cbbf069b';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  function getWeather(city) {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        updateWeatherInfo(response);
        updateCityName(city);
      })
      .catch(err => console.error(err));
  }

  function updateWeatherInfo(response) {
    const tempElement = document.getElementById('temp');
    const cloudPctElement = document.getElementById('cloud_pct');
    const windSpeedElement = document.getElementById('wind_speed');
    const feelsLikeElement = document.getElementById('feels_like');
    const humidityElement = document.getElementById('humidity');
    const windDegreesElement = document.getElementById('wind_degrees');
    const sunriseElement = document.getElementById('sunrise');
    const sunsetElement = document.getElementById('sunset');

    tempElement.textContent = response.temp;
    cloudPctElement.textContent = response.cloud_pct;
    windSpeedElement.textContent = response.wind_speed;
    feelsLikeElement.textContent = response.feels_like;
    humidityElement.textContent = response.humidity;
    windDegreesElement.textContent = response.wind_degrees;
    sunriseElement.textContent = response.sunrise;
    sunsetElement.textContent = response.sunset;
  }

  function updateCityName(city) {
    const cityElement = document.getElementById('city');
    cityElement.textContent = ` ${city}`;
  }

  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const cityInput = document.getElementById("City");
    getWeather(cityInput.value);
  });

  // Initial call with default city
  getWeather("New Delhi");
});

