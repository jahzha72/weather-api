const API_KEY = "b3a4a520dadc6605126865c285482dfb";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");
const loading = document.getElementById("loading");

button.addEventListener("click", () => {
  const city = input.value.trim();

  if (city === "") {
    showError("Please enter a city name");
    return;
  }

  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    toggleLoading(true);
    button.disabled = true;

    const url =
      `${BASE_URL}?q=${encodeURIComponent(city)},PH&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || "Failed to fetch weather data");
    }

    const data = await response.json();
    displayWeather(data);

  } catch (err) {
    showError(err.message);
  } finally {
    toggleLoading(false);
    button.disabled = false;
  }
}

function displayWeather(data) {
  error.textContent = "";
  result.innerHTML = `
    <div class="card">
      <h2>${data.name}</h2>
      <img 
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="Weather icon"
      />
      <p>${data.weather[0].description}</p>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    </div>
  `;
}


function showError(message) {
  result.innerHTML = "";
  error.textContent = message;
}
function toggleLoading(show) {
  loading.classList.toggle("hidden", !show);
}
