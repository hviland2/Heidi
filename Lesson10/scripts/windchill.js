const apiKey = "29691f8306258dc58418908dfb6464bf";
let cityID = document.getElementById("cityID").value;
const unit = "imperial";

const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=${unit}&appid=${apiKey}`;

fetch(apiWeatherURL)
  .then(response => response.json())
  .then(currentWeather => {
    let currentTemp = currentWeather.main.temp;
let windSpeed = currentWeather.wind.speed;
let highTemp = currentWeather.main.temp_max;
let currenly = currentWeather.weather[0].main;
let humility = currentWeather.main.humidity;
let windChill = 0;

if (currentTemp < 50 && windSpeed > 3) {
  windChill =
    35.74 +
    0.6215 * currentTemp -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
}
document.getElementById("currentTemp").innerHTML =
  Math.ceil(currentTemp) + "&degF";
document.getElementById("highTemp").innerHTML =
  Math.ceil(highTemp) + "&degF";
document.getElementById("windSpeed").innerHTML = windSpeed + " mph";
document.getElementById("currenty").innerHTML = currenly;
document.getElementById("humility").innerHTML = humility + "%";

if (windChill === 0) {
  document.getElementById("windChill").innerHTML = "N/A";
} else {
  document.getElementById("windChill").innerHTML =
    Math.round(windChill) + "&degF";
}
  });