  var currentDate = new Date();
  
  //get day of week
  var weekDayNumber = currentDate.getDay();
  var weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var weekDayName = weekDayNames[weekDayNumber];
  
  //get months
  var monthNumber = currentDate.getMonth();
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var monthName = monthNames[monthNumber];
  //Display date String
  
  currentDateString =
    weekDayName +
    ", " +
    currentDate.getDate() +
    " " +
    monthName +
    " " +
    currentDate.getFullYear();
  
  // Inject to DOM
  document.getElementById("currentDate").innerHTML = currentDateString;
  
  // ToggleMenu
  function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }
  
  // show/hide pancake
  if (currentDate.getDay() === 5 ){
    document.getElementById("pancake").removeAttribute("class", "hidden");
  }
  
  // Display Range
  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
  }
  
  // Go back page button
  function goBack() {
    window.history.back();
  }
  if (weekDayNumber===5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}