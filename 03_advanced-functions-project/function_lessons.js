const startGameBtn = document.getElementById('start-game-btn');

// shows that a function is an object
console.log(typeof startGame());

// adding functions inside an object/hash
const person = {
  name: 'Max',
  greet: function greet() {
    console.log('Hello There!');
  },
};
person.greet();

// using function as a declaration/statement
function startGame() {
  console.log('Game is starting...');
}
startGameBtn.addEventListener('click', startGame);

// using function as an expression
// cannot call endingGame before this function with function expressions
endingGame(); // this is not allowed
const endingGame = function endGame() {
  console.log('Game is ending...');
};
startGameBtn.addEventListener('click', endingGame);

// using an anonymous function. Anon functions end with a semicolon operator
const anonFunction = function () {
  console.log('This is an anon function');
};

// using arrow function as anon function
const add2 = function (a, b) {
  return a + b;
};
const nothing = () => {}; // no arguments/parameters must have parentheses
const minus = (m) => (m += 1); // one argument/parameter
const add = (a, b) => a + b; // arrow functions allows you to shorten the code like a ternary expression without return and curly brackets, compared with above.
(a, b) => {
  a *= 2;
  return a + b;
}; // if more than one expression in function body

// declaring anonymous function inside a function
startGameBtn.addEventListener('click', function () {
  console.log('This is an anon function inside a function', age);
  // age is undefined and will throw an error.
  // caveat here is that the error message will not be able to give hint on what is wrong as the function is anonymous
});

// adding default arguments/parameters if nothing is given
const add3 = function (a, b = 1) {
  return a + b;
};
add3(2); // order of arugments are important, 2 here is a.
add3(2, undefined); // or if you pass in undefined, default arguments will be used. Other flasy values will not have this effect like null, NaN, 0.
const add4 = function (a, b = a === 2 ? 1 : 0) {
  return a + b;
}; // you can use parameter that came before it like the ternary expression above.

// Rest Operator or three dots. Allows you to take all your arguments and merge into an array
const sumAgain = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
sumAgain(1, 5, 10, -3, 6, 19);
sumAgain(1, 5, 10, -3, 6, 19, -34, 100);
// below are not allowed
// const wrongSum1 = (...numbers, a) => {}
// const wrongSum2 = (...numbers, ...other) => {}
// below are allowed
// const wrongSum1 = (a, b, c, ...numbers) => {}
const subtractDown = () => {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  } // arguments provides an array like object. But don't use this
  return sum;
};

// Functions within functions
const sumUp = (a, b, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  return validateNumber;
};

// Callback function
const sumCallBacks = (showResultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  showResultHandler(sum);
};
const showResult = (result) => {
  alert('Show result of all added numbers' + result);
};
console.log(sumCallBacks(showResult, 1, 3, 4, 83));

// about bind()
// when .bind() is called as a method on your object, it will create a new function reference which is not immediately executed. It is prepared for future execution
const combineForBind = (showResultHandler, operation, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += num;
    } else {
      sum -= num;
    }
  }
  showResultHandler(sum); // because .bind() is used, sum will be after the message text written in the .bind() method
};
const showResult1 = (messageText, result) => {
  alert(messageText + ' ' + result);
};
console.log(
  combineForBind(
    showResult1.bind(this, 'The result after adding all number is:'),
    'ADD',
    5,
    3,
    6,
    3,
    2
  )
);
console.log(
  combineForBind(
    showResult1.bind(this, 'The result after subtracting all number is:'),
    'SUBTRACT',
    5,
    3,
    6,
    3,
    2
  )
);
