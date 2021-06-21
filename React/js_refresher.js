/* #region  Variables */

// Use let and const instead of var

const myName = "William McConnell"; // should never change
let myNickName = "Bill"; // can change

// Functions
// Normal Function
function printMyName(name) {
  console.log(name);
}

function multiply(number) {
  return number * 2;
}
/* #endregion */

/* #region Arrow Function  */

const printMyNameArrow = (name) => {
  console.log(name);
};

const multiplyArrow = (number) => number * 2;
/* #endregion */

/* #region  Import/Export */
// when using a default export statement, you can import using any variable you choose. (This is typical when a file exports a single default argument)
// Examples

// Export file
/*
const person = {
    name : 'Bill'
}
export default person
*/

// Import file
/*
import prs from './person.js'
import { person as prs2 } from './person.js'
*/
/* #endregion */

/* #region  Classes */

// Parent Class with constructor and function
class Human {
  constructor() {
    this.genger = "Male";
  }

  printGender() {
    console.log(this.genger);
  }
}

// Child Class extends parent class. Needs super() to run parent functions.
class Person extends Human {
  constructor() {
    super();
    this.name = "Bill";
  }

  printName() {
    console.log(this.name);
  }
}

const prson = new Person();
prson.printGender();
prson.printName();
/* #endregion */

/* #region  Classes with Modern Syntax */

class NewHuman {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class NewPerson extends NewHuman {
  name = "Bill";

  printName = () => {
    console.log(this.name);
  };
}

const newPerson = new NewPerson();
newPerson.printName();
newPerson.printGender();
/* #endregion */

/* #region  Spread and Rest Operators */

// Spread Operators

const oldArray = [-1, 0];
// Rather than adding the old array as a single element in the new array, a spread operator pulls the
// values from the old array and makes them values in the new array.
const newArray = [...oldArray, 1, 2];

const oldObject = {
  firstProperty: 1,
  secondProperty: 2,
};

// You can use a spread operator to add properties to an object and then overwrite those same added properties.
const newObject = { ...oldObject, thirdProperty: 3, secondProperty: 22 };

// Rest operators

// Merges all function parameters into an array 'args'
// This lets us use any array based functions on the args parameter.
function sortArguments(...args) {
  return args.sort();
}

/* #endregion */

/* #region  Destructuring */

// Destructuring is the process of pulling values of an array, or parameters of an object into a variable.

const numbers = [1, 2, 3, 4, 5];
[num1, , num3, ...numN] = numbers;

const car1 = { make: "Honda", model: "Accord" };
const { make: carMake, model } = car1;

/* #endregion */

/* #region  Reference and Primitive Types */

num1 = 1;
num2 = num1;
// num2 is now 1.

prsn = new Person();
prsn2 = prsn;
// Any changes to prsn are reflected in prsn2
// Reference, no copy.

prsn2 = { ...prsn };
// Actual Copy rather than reference.

/* #endregion */

/* #region  Map Array Function */

const numbers = [1, 2, 3];
const doubleNumbers = numbers.map((num) => num * 2);

/* #endregion */
