// DONE Store your current age into a variable.
// DONE Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let myCurrentAge = 28;

let myMaxAge = 99;

let dailyUsage = 2;

let daysInYear = 365;

let remainingYears = myMaxAge - myCurrentAge;

const totalSupply = remainingYears * dailyUsage * daysInYear;

console.log(totalSupply)
