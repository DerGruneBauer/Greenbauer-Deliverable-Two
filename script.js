let rain = prompt("How many inches of rain fell?");
let inches = parseInt(rain);

let asterisks = '';
for (let index = 0; index < inches; index++) {
  asterisks += '*'
}
console.log('Rain:', asterisks)

// easier way to generate asterisks
// let asterisks = "*".repeat(inches);
// console.log('Rain', asterisks);

let yield = 50;
if (inches >= 20) {
  yield = yield - yield * 0.1;
} else if (inches < 10) {
  yield = yield - yield * 0.2;
}

let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "yes") {
  let grade = prompt("Did you use regular or premium fertilizer?");
  if (grade === "regular") {
    yield = yield + yield * 0.1;
  } else if (grade === "premium") {
    yield = yield + yield * 0.15;
  }
}

console.log(`The yield should be ${yield} bushels per acre.`);
