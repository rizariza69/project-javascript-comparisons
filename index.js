"use strict";

const nameA = "Alpha";
const nameB = "Beta";
const nameCompared = nameA === nameB;

console.log(nameA);
console.log(nameB);
console.log(nameCompared);

// Feel free to have some experiments with comparisons

const ageA = 18;
const ageB = 25;

if (ageA > ageB) {
  console.log("too old");
} else if (ageA < ageB) {
  console.log("too young");
} else {
  console.log("its your age");
}

// Feel free to have some experiments with comparisons

const personA = {
  name: "Alpha",
  age: 20
};

const personB = {
  name: "Betty",
  age: 30
};

switch (personA.age > personB.age) {
  case true:
    console.log(`${personA.name} more than youngwith ${personB.name}`);
    break;

  case false:
    console.log(`${personB.name} more than older with ${personA.name}`);
    break;

  default:
    console.log("good compare age");
}

// Feel free to have some experiments with comparisons

let name = "domi";
let job = "soldier";

if (name === "" && job === "") {
  console.log("please create your name!!");
} else if (name === "domi" && job === "") {
  console.log(`helo ${name}, welcome to the world`);
} else if (name === "domi" && job === "soldier") {
  console.log(`Come on ${name} save the world`);
}

//tes with function

function compareNumber(num1, num2) {
  if (num1 < num2) {
    return true;
  } else if (num1 > num2) {
    return false;
  } else {
    return -1;
  }
}

// TEST CASES
console.log(compareNumber(5, 8)); // true
console.log(compareNumber(5, 3)); // false
console.log(compareNumber(4, 4)); // -1
console.log(compareNumber(3, 3)); // -1
console.log(compareNumber(10, 2)); // false
