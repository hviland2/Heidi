var currentTemp = 50;

var windSpeed = 20;

if(currentTemp <= 50 && windSpeed >= 3){
    var formula = 35.74 + (0.6215*currentTemp) - (35.75*(windSpeed**0.16)) + (0.4275*currentTemp*(windSpeed**0.16));
document.getElementById("windChill").innerText = formula.toFixed(2) + "°F";


} else {
   document.getElementById("windChill").innerText = "N/A" 
}