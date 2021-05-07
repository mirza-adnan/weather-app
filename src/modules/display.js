import getData from "./data";

function getSearch () {
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");

  searchButton.addEventListener("click", handleSearch);

  function handleSearch () {
    if (searchBar.value) {
      const location = searchBar.value;
      searchBar.value = "";
      displayData(location);
    }
  }
}

function displayData (location) {
  const region = document.querySelector(".location");
  const condition = document.querySelector(".condition").querySelector("span");
  const temperature = document.querySelector(".temperature").querySelector("span");
  const wind = document.querySelector(".wind").querySelector("span"); 
  const feelsLike = document.querySelector(".feels-like").querySelector(".fl-value"); 
  const humidity = document.querySelector(".humidity").querySelector("span"); 
  const pressure = document.querySelector(".pressure").querySelector("span");

  getData(location)
    .then((data) => {
      if (data.cod === 200) {
        reAnimate();
        region.textContent = data.name;
        condition.textContent = data.weather[0].main;
        temperature.textContent = String(Math.round(Number(data.main.temp)));
        wind.textContent = `${data.wind.speed} m/s`;
        feelsLike.textContent = String(Math.round(Number(data.main.feels_like)));
        humidity.textContent = `${data.main.humidity}%`;
        pressure.textContent = `${data.main.pressure} hPa`;
        changeIcon(data.weather[0].main);
      } else {
        alert("Could not find the city you specified");
      }
      
    });
}

function changeIcon (data) {
  const conditionIcon = document.querySelector(".condition").querySelector("i");
  switch (data) {
  case "Clear":
    conditionIcon.className = "far fa-sun";
    break;
  case "Rain":
    conditionIcon.className = "fas fa-cloud-showers-heavy";
    break;
  case "Clouds":
    conditionIcon.className = "fas fa-cloud";
    break;
  case "Drizzle":
    conditionIcon.className = "fas fa-cloud-rain";
    break;
  case "Thunderstorm":
    conditionIcon.className = "fas fa-cloud-showers-heavy";
    break;
  case "Snow":
    conditionIcon.className = "fas fa-snowflake";
    break;
  }
}

function removeAnimation () {
  const weatherLeft = document.querySelector(".weather-left");
  const weatherRight = document.querySelector(".weather-right");
  const line = document.querySelector(".line");

  [weatherLeft, weatherRight].forEach(weather => {
    weather.addEventListener("animationend", () => {
      weather.classList.remove("fade");
    });
  });

  line.addEventListener("animationend", () => {
    line.classList.remove("elongate");
  });
}

function reAnimate() {
  document.querySelector(".weather-left").classList.add("fade");
  document.querySelector(".weather-right").classList.add("fade");
  document.querySelector(".line").classList.add("elongate");
}

function handleKeyboard () {
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");
  window.addEventListener("keydown", (e) => {
    if (document.activeElement === searchBar) {
      if (e.key === "Enter" && searchBar.value) {
        searchButton.click();
      }
    }
  });
}

export {getSearch, displayData, handleKeyboard, removeAnimation};

