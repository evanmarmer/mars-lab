const username = prompt('Hi there, whats your name?');

alert(`hi ${username}`)

alert('Welcome to The Mars Adventure Game. Yesterday, you received a call from your good friend at NASA and They need someone to go to Mars this weekend, and YOU’VE been chosen!!')

let excited = prompt('Are you excited? (Type Y or N)')

excited = excited.toUpperCase()

if (excited === 'Y') {
    alert("I knew you'd say that. It’s so cool that you’re going to Mars!")
} 

if (excited === 'N') {
    alert("Well, it’s too late to back out now.")
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
    alert("That’s way too many. You’ll have to pack more lightly.")
}
if (numSuitcases < 2) {
    alert("Perfect. youll certainly fit in the spaceship!")
}

alert("You're allowed to bring one companion animal with you.");
let companionType = prompt('What kind of companion animal would you like to bring?');
let companionName = prompt("What is your companion's name?");


let firstLetter = companionName[0]
firstLetter = firstLetter.toUpperCase()
let otherLetters = companionName.slice(1)
otherLetters = otherLetters.toLowerCase()
companionName = firstLetter + otherLetters

firstLetter = companionType[0]
firstLetter = firstLetter.toUpperCase()
otherLetters = companionType.slice(1)
otherLetters = otherLetters.toLowerCase()
companionType = firstLetter + otherLetters

alert(`Cool, so you're bringing ${companionName} the ${companionType} `)

alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt('Choose your options, Type A for "Sleek, modern minimalism", or Type B for "Retro/vintage space age", or Type C for "Victorian-era steampunk"')

let decor;
if (decorChoice === 'A') {
  decor = 'modern minimalist';
}
if (decorChoice === 'B') {
    decor = 'Retro/vintage space age'
}
if (decorChoice === 'C') {
    decor = 'Victorian-era steampunk'
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);

let timer = 5;
while (timer > 0) {
  alert(`${timer}...`);
  timer -= 1 ;
}
alert('*** LIFTOFF ***');