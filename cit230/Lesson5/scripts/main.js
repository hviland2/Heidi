<<<<<<< HEAD
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("currentYear").innerHTML = days[currentDate.getDay()] + ", " + months[currentDate.getMonth()]+ " " + currentDate.getDate() + ", " + currentYear;

//create the 5 day forecast
var weekDayNumber= currentDate.getDay();
var daysOfWeek=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
var weekDay=daysOfWeek[weekDayNumber];
currentDateString = weekDay + ` ,`;

currentDateString+= currentDate.getDate();

let currentDay = weekDayNumber;

for (let i=1; i<6; i++){
    currentDay++;
    if(currentDay>6){
        currentDay=0;
    }

    const element=document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}

if (weekDayNumber===5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
=======
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("currentYear").innerHTML = days[currentDate.getDay()] + ", " + months[currentDate.getMonth()]+ " " + currentDate.getDate() + ", " + currentYear;

//create the 5 day forecast
var weekDayNumber= currentDate.getDay();
var daysOfWeek=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
var weekDay=daysOfWeek[weekDayNumber];
currentDateString = weekDay + ` ,`;

currentDateString+= currentDate.getDate();

let currentDay = weekDayNumber;

for (let i=1; i<6; i++){
    currentDay++;
    if(currentDay>6){
        currentDay=0;
    }

    const element=document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}

if (weekDayNumber===5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
>>>>>>> ef7cf5635a01354b7fd82bc5a446741da3735f56
}