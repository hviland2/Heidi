// create five-day forecast
for (i = 1; i < 6; i++) {
    if ([currentDate.getDay() + (i - 1)] <= 6) {
      document.getElementById(`day${i}`).innerHTML =
        weekDayNames[currentDate.getDay() + (i - 1)];
    } else {
      document.getElementById(`day${i}`).innerHTML =
        weekDayNames[currentDate.getDay() + (i - 1) - 7];
    }
  }
  
  // call API
  
  // const apiKey = "29691f8306258dc58418908dfb6464bf";
  // let cityID = document.getElementById("cityID").value;
  // const unit = "imperial";
  
  const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=${unit}&appid=${apiKey}`;
  
  fetch(apiForecastURL)
    .then(response => response.json())
    .then(forecasts => {
      let nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + 1);
      let dateString = getDateString(nextDate);
      let hourString = "18:00:00";
      let counter = 1;
  
      // loop though results
      forecasts.list.forEach(forecast => {
        if (
          forecast.dt_txt.includes(dateString) &&
          forecast.dt_txt.includes(hourString)
        ) {
          // insert temp
          const element = document.getElementById(`temp${counter}`);
          element.innerHTML = Math.ceil(forecast.main.temp) + "&deg;F";
  
          // increment Variables
          counter += 1;
          nextDate.setDate(nextDate.getDate() + 1);
          dateString = getDateString(nextDate);
        }
      });
    });
  function getDateString(date) {
    let dateString =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return dateString;
  }
  