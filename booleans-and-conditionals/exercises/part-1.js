// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:
// engines are off 




//shuttle speed
if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}
//predict code blocks
console.log("Yes")
// monitor the shuttl
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let avgAstronautMassKg = 80.7;
let crewMassKg = astronautCount * avgAstronautMassKg
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maxMassLimit = 850000;
let fuelTempCelsius = -225;
let minFuelTemp = -300;
let maxFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
if ((astronautCount <= 7) && (astronautStatus = "ready") && (totalMassKg < maxMassLimit) && (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) && (fuelLevel = "100%") && (weatherStatus = "clear")) {
   console.log("Have a safe trip astronauts!");
} else {
   console.log("Not safe for liftoff:Liftoff Aborted")
}  
console.log("Date:", date)
console.log("Time:", time)
console.log("Astronaut Count:", + astronautCount)
console.log("Crew Mass:" + crewMassKg + "kg")
console.log("Total Mass:" + totalMassKg + "kg")
console.log("Fuel Temperature:" + fuelTempCelsius + "C")
console.log("Weather Status:" + weatherStatus)
console.log("Have a safe trip astronauts!")


