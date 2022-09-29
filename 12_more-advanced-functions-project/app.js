// pure function
function add(num1, num2) {
  return num1 + num2;
}
add(1, 5); // 6
add(12, 15); // 27

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
const hobbies = ['sports', 'cooking'];
function printHobbies(h) {
  h.push('New Hobby');
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

// // To make nesting simpler, you can first change Max' original notation ...
// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     return amount * tax;
//   }
//   return calculateTax;
// }
// // ... to this equivalent notation ...
// function createTaxCalculator(tax) {
//   return function (amount) {
//     return amount * tax;
//   }
// }
// // ... or even this one:
// function createTaxCalculator(tax) {
//   return amount => amount * tax;
// }
// // And this one-liner would also do the same:
// const createTaxCalculator = tax => amount => amount * tax;

// About closure
let multiplier = 1.1;
function createMultiplierFruits(percentage) {
  // each function registers the variables of its surrounding function and follows it as it changes.
  // multiplyFruits registers variables of its surrounding environment, which is percentage only.
  // every function is a closure because it closes over the surrounding environment and memorises it.
  function multiplyFruits(amount) {
    return amount * percentage * multiplier;
  }
  return multiplyFruits;
}
const calculateOrangesWithMultipler = createMultiplierFruits(0.2);
console.log(calculateOrangesWithMultipler(75));
multiplier = 1.2; // this will change the multiplier
const calculateApplesWithMultipler = createMultiplierFruits(0.3); // the multplyFruit function will refer to the new multiplier
console.log(calculateApplesWithMultipler(60));

// more about closure
function greetUser() {
  let name = 'Anna';
  console.log('Hi' + name);
}
let name = 'Max';
greetUser(); // will return hi anna, not hi max because function first checks inner env, it can't find value then only executes the outer env.

// Recursion method
// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// } // this is not a recursion, this is a loop
function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
} // this is recursion
console.log(powerOf(2, 3)); // 2 * 2 * 2

// advanced recursion method
const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [{ name: 'Simon' }, { name: 'Amelia' }],
        },
      ],
    },
    { name: 'Julia' },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend)); // ... is needed to flatten the array
    getFriendNames(friend);
  }
  return collectedNames;
}
console.log(getFriendNames(myself));
