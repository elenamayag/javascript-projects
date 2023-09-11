// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName;
shuttleName = 'Determination';

let shuttleSpeedMph; 
shuttleSpeedMph = 17500;

let distanceToMarsKm;
distanceToMarsKm = 225000000;

let distanceToMoonKm;
distanceToMoonKm = 38400;

let milesPerKm;
milesPerKm = 0.621;



let milesToMars;
milesToMars = distanceToMarsKm * milesPerKm;

let hoursToMars;
hoursToMars = milesToMars / shuttleSpeedMph;

let daysToMars; 
daysToMars = hoursToMars / 24;



let milesToMoon;
milesToMoon = distanceToMoonKm * milesPerKm;

let hoursToMoon;
hoursToMoon = milesToMoon / shuttleSpeedMph

let daysToMoon;
daysToMoon = hoursToMoon / 24 


console.log(shuttleName)
console.log(shuttleSpeedMph)
console.log(distanceToMarsKm)
console.log(distanceToMoonKm)
console.log(milesPerKm)
console.log(milesToMars)
console.log(hoursToMars)
console.log(daysToMars)
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars. ")
console.log(milesToMoon)
console.log(hoursToMoon)
console.log(daysToMoon)
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon. ")