// define functions
const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(usrInput.value);
}

function add() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  // currentResult = currentResult + +userInput.value;
  outputResult(currentResult, calcDescription);
  // if this is not added in this function, when add is click, there's be no output
}

// execute functions

addBtn.addEventListener('click', add);
// addBtn.addEventListener("click", add(1,2));
// this doesn't work because when loading the files, it executes immediately
// because we have parenthesis with arguments
// it should only execute when clicked.
