//Introductory Messages
alert("Welcome to the Mars Expeditionary Force.");
alert(`Initializing Connection...
Checking Navigational Systems...
Verifying Life Support...
`);
let systemCheck = 95;
while(systemCheck<=100) {
    alert(`System Check: ${systemCheck}% complete...`);
    systemCheck += 1;
};
alert("System Check complete.");

//Entering username and greeting w/ greeting set as a variable.
const username = prompt("Welcome, Commander. What is your name?");
const greeting = `Acknowledged.
Your name and designation have been added to the registry.
Glad to have you with us, Commander ${username}.
Hope you're ready for Mars.
`
alert(greeting);

//Gauging readiness w/ yes and no set as variables.
let excited = prompt("Have you read the MEF-23-Readiness Protocol manual?");
let yes = `Well done, Commander ${username}. We have a feeling you'll do well.`;
let no = "This should've been done prior to your arrival. Be sure to prioritize completing this.";
excited = excited.toUpperCase();
excited = excited.trim();
if(excited.startsWith("Y")) {
    alert(yes)
} else if(excited.startsWith("N")) {
    alert(no)
} else alert("Interesting response...regardless, you should be sure to read it.");

//Checking luggage and converting input to a number
alert(`We now need to register your luggage items, Commander ${username}.`);
let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = Number(numSuitcases);
if(numSuitcases > 2) {
    alert("There is a limit of two suitcases. Don't worry; we'll get rid of the extra baggage.")
} else alert("Perfect. You're clear to travel on any class vessel.")

//Registering animal companion
alert("You're allowed to bring one pet of any kind with you.");
let companionType = prompt("What kind of animal would you like to bring?");
let companionName = prompt("What is your companion's name?");
//Correcting the formatting of the animal's name
let firstLetterA = companionType[0];
firstLetterA = firstLetterA.toUpperCase();
let otherLettersA = companionType.slice(1);
otherLettersA = otherLettersA.toLowerCase();
companionType = firstLetterA + otherLettersA;
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = firstLetter + otherLetters;
alert("Affirmative. We're adding " + companionName + " the " + companionType + " to the registry.");

//Setting up decor
alert("The Mars Expeditionary Force comes with a fully equipped fleet.");
alert(`The following vessels are available for selection:

A) MEF-Galaxy Class "Explorer"
B) MEF-Interceptor Class "Hunter"
C) MEF-Transporter Class "Nomad"
D) MEF-Passenger Class "Traveler"
E) MEF-Imperial Class "Emperor"

`);
let decorOption = prompt("Would you like A, B, C, D, or E?");
decorOption = decorOption.toUpperCase();
let decor;
if(decorOption === "A") {
    decor = "Explorer"
} else if (decorOption === "B") {
    decor = "Hunter"
} else if (decorOption === "C") {
    decor = "Nomad"
} else if (decorOption === "D") {
    decor = "Traveler"
} else if (decorOption === "E") {
    decor = "Emperor"
}

let planets = prompt(`Have you been to either of the following quarantined planets within the past 3 Earth years?

- Venus
- Mercury
- I haven't been to either of these planets within that timeframe.

`)
let firstLetterP = planets[0];
firstLetterP = firstLetterP.toUpperCase();
let otherLettersP = planets.slice(1);
otherLettersP = otherLettersP.toLowerCase();
planets = firstLetterP + otherLettersP;
if(planets === "Venus") {
    alert("Be sure to visit the MEF's Burn Recovery Unit after this orientation.")
} else if(planets === "Mercury") {
    alert("Report to Medical for decontamination immediately.")
} else alert(`Good to hear, Commander ${username}.`);


//Referencing pervious inputs
alert(`${username} and ${companionName} have now been registered aboard the ${decor} vessel.`);

//Launchpad Temperature Warmup
let temp = 0;
while(temp<=1200){
    alert(`Preparing for launch. Current launchpad temperature is ${temp}F`);
    temp += 100;
}

alert("Optimal launch temperature has been reached.")
alert("Initializing countdown...");

//Countdown Timer
let timer = 5;
while(timer>0) {
    alert(`${timer}...`);
    timer -= 1;
}
alert("***LIFTOFF***");