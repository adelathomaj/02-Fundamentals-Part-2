'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;


function logger() {
    console.log('My name is Adela');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1998);

// Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1998);

console.log(age1, age2);


// Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

// Arrow Function
// birthYeah => 2037 - birthYeah;
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1998, 'Adela'));
console.log(yearsUntilRetirement(1995, 'Hysen'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1998, 'Adela'));
console.log(yearsUntilRetirement(1970, 'Zoi'));
*/

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

console.log(calcAverage(44, 23, 71) / 3);
console.log(calcAverage(65, 54, 49) / 3);

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy (${avgDolphins} vs ${avgKoalas} !)`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        if (avgDolphins >= 2 * avgKoalas);
        console.log(`Dolphins win the trophy (${avgDolphins} vs ${avgKoalas})!`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);


const friend1 = 'Hysi';
const friend2 = 'Esi';
const friend3 = 'Kita';

const friends = ['Hysi', 'Esi', 'Kita'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Sparko';
console.log(friends);

// We cannot replace the entire array
// friends = ['Bob', 'Alice'];

const firstName = 'Adela';
const adela = [firstName, 'Thomaj', 2021 - 1998, 'JavaScript Trainee', friends];
console.log(adela);
console.log(adela.length);

// Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Hysi', 'Esi', 'Kita'];

// Add Elements
// friends.push('Sparko');
const newLength = friends.push('Sparko');
console.log(friends);
console.log(newLength);

friends.unshift('Lucy');
console.log(friends);

// Remove elements
friends.pop(); // Last
// friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Esi'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Esi'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Hysi')) {
    console.log('You have a friend called Hysi');
}
*/

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Arrow function
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


const adelaArray = [
    'Adela',
    'Thomaj',
    2037 - 1998,
    'JavaScript Trainee',
    ['Hysi', 'Esi', 'Kita']
];
console.log(adelaArray);

const adela = {
    firstName: 'Adela',
    lastName: 'Thomaj',
    age: 2037 - 1998,
    job: 'JavaScript Trainee',
    friends: ['Hysi', 'Esi', 'Kita']
};
console.log(adela);


const adela = {
    firstName: 'Adela',
    lastName: 'Thomaj',
    age: 2037 - 1998,
    job: 'JavaScript Trainee',
    friends: ['Hysi', 'Esi', 'Kita']
};
console.log(adela);

console.log(adela.lastName);

console.log(adela['lastName']);

const nameKey = 'Name';
console.log(adela['first' + nameKey]);
console.log(adela['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Adela? Choose between firstName, lastName, age, job, and friends');
console.log(adela[interestedIn]);

if (adela[interestedIn]) {
    console.log(adela[interestedIn]);
} else {
    console.log('Wrong Request! Choose between firstName, lastName, age, job, and friends.');
}

adela.location = 'Kosovo';
adela['twitter'] = '@adelathomaj';
console.log(adela);

// Challenge

// "Adela has 3 friends, and her best friend is Hysi";

console.log(`${adela.firstName} has ${adela.friends.length} friends, and her best friend is ${adela.friends[0]}`);
*/

/*
const adela = {
    firstName: 'Adela',
    lastName: 'Thomaj',
    birthYeah: 1998,
    job: 'JavaScript Trainee',
    friends: ['Hysi', 'Esi', 'Kita'],
    hasDriversLicense: true,


    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${adela.job} and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `
    }
};

console.log(adela.calcAge());

console.log(adela.age);
console.log(adela.age);
console.log(adela.age);

// Challenge
// "Adela is a 23 years old JavaScript Trainee and she has a driver's license"
console.log(adela.getSummary());
*/

/*

Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

/*

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);



// "John Smith's BMI (28.3) is higher than Mark Miller's BMI (23.9)


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher
    than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

/*

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/*

const adela = [
    'Adela',
    'Thomaj',
    2037 - 1998,
    'JavaScript Trainee',
    ['Hysi', 'Esi', 'Kita'],
    true
];
const types = [];

// console.log(adela[0])
// console.log(adela[0])
// ...
// console.log(adela[4])
// adela[5] does NOT exist

for (let i = 0; i < adela.length; i++) {
    // Reading from Adela array
    console.log(adela[i], typeof adela[i]);

    // Filling types array
    // types[i] = typeof adela[i];
    types.push(typeof adela[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < adela.length; i++) {
    if (typeof adela[i] !== 'string') continue;

    console.log(adela[i], typeof adela[i]);
}

console.log('--- BREAK WITH NUMBERS ---')
for (let i = 0; i < adela.length; i++) {
    if (typeof adela[i] === 'number') continue;

    console.log(adela[i], typeof adela[i]);
}

*/

/*
const adela = [
    'Adela',
    'Thomaj',
    2037 - 1998,
    'JavaScript Trainee',
    ['Hysi', 'Kita', 'Esi'],
    true
];

// 0, 1 ...., 4
// 4, 3 ...., 0

for (let i = adela.length - 1; i >= 0; i--) {
    console.log(i, adela[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------ Starting exercise ${exercise} `);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`)
    };
}

*/

/*

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end....')
}
*/

/*

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
