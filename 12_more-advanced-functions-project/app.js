// pure function
function add(num1, num2) {
  return num1 + num2;
}
add(1, 5) // 6
add(12, 15) // 27

// impure function
function addRandom(num1) {
  return num1 + Math.random();
}
addRandom(5);

// impure function that changes an outside variable aka side effects
let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
addMoreNumbers(1, 5);

// impure function that changes an outside variable aka side effects
const hobbies = ["sports", "cooking"];
function printHobbies(h) {
  h.push("New Hobby");
  console.log(h);
}
printHobbies(hobbies);

// factory functions
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax; // this returns calculateTax function with the tax hardcoded inside the function
}
const calculateVatAmount = createTaxCalculator(0.19); // calculateVatAmount is calculateTax wih hardcoded 0.19 tax
const calculateIncomeTaxAmount = createTaxCalculator(0.25);
console.log(calculateVatAmount(100));
console.log(createTaxCalculator(0.19)(100)); // same as above
console.log(calculateIncomeTaxAmount(200));
// Explanation of code above
// We execute createTaxCalculator with a tax of 0.19. This returns the calculateTax function with a hardcoded tax of 0.19 inside. A reference to this returned calculateTax function is stored in calculateVatAmount, which we then can call with an amount as parameter.
// A reference doesn't call a function. For calling a function the parentheses are required.

// To make nesting simpler, you can first change Max' original notation ...
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}
// ... to this equivalent notation ...
function createTaxCalculator(tax) {
  return function (amount) {
    return amount * tax;
  }
}
// ... or even this one:
function createTaxCalculator(tax) {
  return amount => amount * tax;
}
// And this one-liner would also do the same:
const createTaxCalculator = tax => amount => amount * tax;