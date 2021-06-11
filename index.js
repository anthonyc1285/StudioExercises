// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
//User Input Bonus
const input = require('readline-sync');
let astronautCount = Number(input.question("Enter the number of astronauts: "));
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg =	74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";

let dashes = "-------------------------------------"

// Write code to generate the LC04 report here:
console.log(`
${dashes}
> LC04 - LAUNCH CHECKLIST
${dashes}
Date: ${date}
Time: ${time}

${dashes}
> ASTRONAUT INFO
${dashes}
count: ${astronautCount}
status: ${astronautStatus}

${dashes}
> FUEL DATA
${dashes}
* Fuel temp celsius: ${fuelTempCelsius} C
* Fuel level: ${fuelTempCelsius}

${dashes}
> MASS DATA
${dashes}
* Crew mass: ${crewMassKg}
* Fuel mass: ${fuelMassKg}
* Shuttle mass: ${shuttleMassKg}
* Total mass: ${totalMassKg}

${dashes}
> FLIGHT PLAN
${dashes}
* weather: ${weatherStatus}

${dashes}
> OVERALL STATUS
${dashes}
* Clear for takeoff: YES
`);

// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
