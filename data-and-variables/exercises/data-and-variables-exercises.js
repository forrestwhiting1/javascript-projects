// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
console.log(milesToMars)
let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(hoursToMars)
let daysToMars = hoursToMars / 24;
console.log(daysToMars)
// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars ");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph; 
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(milesToMoon)
console.log(hoursToMoon)
console.log(daysToMoon)
console.log( shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
const input = require('readline-sync');
let answer = input.question("Hey there buddy hows the weather?");
console.log(`Wow! So the weather is ${answer} today? Neat!`);
let num = 7;

if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}