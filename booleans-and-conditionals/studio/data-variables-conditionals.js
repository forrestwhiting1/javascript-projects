// Initialize Variables below
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
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount < 7) {
    console.log("ready to launch");
}    
// add logic below to verify all astronauts are ready
if (astronautStatus = "ready") {
    console.log("ready to launch");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maxMassLimit) {
    console.log("ready to Launch");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 || fuelTempCelsius < -150) {
    console.log("ready to launch");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel = "100%") {
    console.log("ready to launch");
}
// add logic below to verify the weather status is clear
if (weatherStatus = "clear") {
    console.log("ready to launch");
}
// Verify shuttle launch can proceed based on above conditions
if ((astronautCount <= 7) && (astronautStatus = "ready") && (totalMassKg < maxMassLimit) && (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) && (fuelLevel = "100%") && (weatherStatus = "clear")) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
} else {
    console.log("Not safe for liftoff:Liftoff Aborted")
}  

console.log("Date:", date)
console.log("Time:", time)
console.log("Astronaut Count:" + astronautCount)
console.log("Crew Mass:" + crewMassKg + "kg")
console.log("Total Mass:" + totalMassKg + "kg")
console.log("Fuel Temperature:" + fuelTempCelsius + "C")
console.log("Weather Status:" + weatherStatus)
console.log("Have a safe trip astronauts!")
