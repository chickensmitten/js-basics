const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log("Game is starting...");
}

// const person = {
//   greet: function greet() {
//     console.log("Hello There!");
//   }
// }

// person.greet();

console.log(typeof startGame());

startGameBtn.addEventListener('click', startGame);


