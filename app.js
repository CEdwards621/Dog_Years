//set initial human age
const myAge = 27;

//convert first 2 humans years to dog years
let earlyYears = 2;
earlyYears *= 10.5;

//convert later human years to dog years
let laterYears = myAge - 2;
laterYears *= 4;

//calculate total dog years
let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Christine'.toLowerCase();

console.log(`My Name: ${myName}`);
console.log(`My Age: ${myAge}`);
console.log(`My Age In Dog Years: ${myAgeInDogYears}`);

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
