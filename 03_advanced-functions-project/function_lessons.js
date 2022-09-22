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
const nothing = () => {} // no arguments/parameters must have parentheses
const minus = m => m += 1; // one argument/parameter
const add = (a, b) => a + b; // arrow functions allows you to shorten the code like a ternary expression without return and curly brackets, compared with above.
(a, b) => {
  a *= 2;
  return a + b;
} // if more than one expression in function body

// declaring anonymous function inside a function
startGameBtn.addEventListener('click', function () {
  console.log('This is an anon function inside a function', age);
  // age is undefined and will throw an error.
  // caveat here is that the error message will not be able to give hint on what is wrong as the function is anonymous
});
