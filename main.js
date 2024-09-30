function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind");
    let timeElement = document.querySelector(".datetime");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector(".icon");

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = `${Math.round(temperature)}°C`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "e03483d732fba98f417tb9d7ed1ao1d8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather).catch(handleError);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".input");
    searchCity(searchInput.value);
}

function handleError(error) {
    console.error("ERROR", error);
    alert("Unable to obtain weather data. Please try again.");
}

function init() {
    let searchFormElement = document.querySelector("form");
    searchFormElement.addEventListener("submit", handleSearchSubmit);
    searchCity("São Paulo");
}

init();