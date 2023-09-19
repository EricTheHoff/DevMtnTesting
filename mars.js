//Introductory Messages
alert("Welcome to the Mars Expeditionary Force");
alert(`Checking navigational systems...
Verifying life support...`);
alert("System check 95% complete...");
alert("Ready to go!");

//Entering username and greeting
const username = prompt("Welcome, Commander. What is your name?");
const greeting = `Glad to have you with us, Commander ${username}.
Hope you're ready for Mars...`
alert(greeting);

//Gauging excitement
let excited = prompt("Are you excited? Type Y or N");
let yes = "I knew you'd say that. It's so cool that you're going to Mars!";
let no = "Well, it's too late to back out now.";
excited = excited.toUpperCase();
excited = excited.trim();
if(excited.startsWith("Y")) {
    alert(yes)
} else if(excited.startsWith("N")) {
    alert(no)
} else alert("That's not valid");

//Checking luggage
alert("It's time to get packing.");
let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = Number(numSuitcases);
if(numSuitcases > 2) {
    alert("That's way too many. You'll have to pack more lightly.")
} else alert("Perfect. You'll certainly fit in any spaceship!")

//Registering animal companion
alert("You're allowed to bring one companion animal with you.");
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
alert("Cool, so we're bringing " + companionName + " the " + companionType);

//Setting up decor
alert("The agency has an interior design team that can outfit your ship!");
alert(`You have a few curated options to choose from. Your options are:

A) Sleek, modern minimalism.
B) Retro, vintage space age.
C) Victorian-era steampunk.
D) Gothic Science Horror.
E) Just a toilet in the corner, please.
`);
let decorOption = prompt("Would you like A, B, C, D, or E?");
decorOption = decorOption.toUpperCase();
let decor;
if(decorOption === "A") {
    decor = "Modern Minimalist"
} else if (decorOption === "B") {
    decor = "Vintage Space Age"
} else if (decorOption === "C") {
    decor = "Victorian Steampunk"
} else if (decorOption === "D") {
    decor = "Gothic Horror"
} else if (decorOption === "E") {
    decor = "Legendary Toilet"
}

let planets = prompt(`Which of the following planets would you like to visit?

- Venus
- Mercury
- Somewhere else

`)
let firstLetterP = planets[0];
firstLetterP = firstLetterP.toUpperCase();
let otherLettersP = planets.slice(1);
otherLettersP = otherLettersP.toLowerCase();
planets = firstLetterP + otherLettersP;
if(planets === "Venus") {
    alert("It's not worth the trip.")
} else if(planets === "Mercury") {
    alert("Mercury isn't in season.")
} else alert("Trust me, Mars is far more interesting.");


//Referencing pervious inputs
alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship!`);

//Launchpad Temperature Warmup
let temp = 0;
while(temp<=1200){
    alert(`Preparing for launch. Current launchpad temperature is ${temp}`);
    temp += 100;
}

alert("Initializing countdown...");

//Countdown Timer
let timer = 5;
while(timer>0) {
    alert(`${timer}...`);
    timer -= 1;
}
alert("***LIFTOFF***");