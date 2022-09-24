// basic ways to create array
const numbers = [1, 2, 3]; // always use this
const moreNumbers = new Array(); // []
const moreNumbers1 = new Array("hi", "numbers"); // ["hi", "numbers"]
const moreNumbers2 = Array(1, 2);
const moreNumbers3 = new Array(5); // creates an array of fixed length 5
const moreNumbers4 = Array.of(1,2);

// array for array like object
const moreNumbers5 = Array.from("Hi!"); // ["H", "i", "!"]

// array for array like object IRL
const listItems = document.querySelectorAll("li"); // returns NodeList iterable. Not really an array
const arrayListItems = Array.from(listItems); // returns real array [li, li, li]

// What you can store in arrays
// can store same types or mixed types
const personalData = [30, "Max", {moreDetails: []}, [1, 3, 4]];

// input data into arrays
const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading"); // adds item into back of array ["Sports", "Cooking", "Reading"]
hobbies.unshift("Coding") // adds item into front of array ["Coding", "Sports", "Cooking", "Reading"]
hobbies.pop(); // removes item from back of array ["Coding", "Sports", "Cooking"]
hobbies.shift(); // removes item from front of array ["Sports", "Cooking"]
hobbies[5] = "Reading" // adds reading into index5 ["Sports", "Cooking", undefined, undefined, undefined, "Reading"]

// advanced methods
const returnSplicedArray = hobbies.splice(0, 0, "Good Food") // available on real arrays. Not iterables, not array like objects. first variable is here it starts. second is if you want to delete it. third is the array items to add in. returns a new array
const returnSplicedArray1 = hobbies.splice(-2, 0, "Good Food") // can also start with negative
const newStoredArray = hobbies.slice(); // returns a brand new array based on the old array
const newStoredArray1 = hobbies.slice(0, 2); // return an array that starts at first element until the index 2. can also start with negative
const newStoredArray2 = hobbies.slice(1); // return an array from second item to the end
const newStoredArray3 = hobbies.concat([2, 3, 4]); // adds an array with an array and returns a new array

// get index of the value that you are adding in
hobbies.indexOf("Reading"); // will stop after finding the first element that fits the description starting from the left
hobbies.lastIndexOf("Reading"); // will stop after finding the first element that fits the description starting from the right
const personData = [{name: "Max"}, {name: "Manuel"}]
hobbies.indexOf({ name: "Max"}); // will return -1 if it doesn't find anything. It cannot find objects anyways because objects are reference values
const manuel = personData.find((person, index, persons) => {
  return person.name === "Manuel";
}); // returns {name: "Manuel"}
const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === "Max";
}) // returns the index 0
hobbies.includes("Not found"); // if not found will return -1

// forEach
const prices = [10, 92.99, 50.80, 6.58]
const tax = 0.19
const taxAdjustedPrices = [];
prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  taxAdjustedPrices.push(priceObj);
});

// map()
const taxAdjustedPrices1 = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  return priceObj;
}); // returns a brand new array

// sorting with custom logic
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}); // returns a sorted list of smallest to largest
sortedPrices.reverse() // returns reversed sorting

// filter based on logic
const filteredArray = prices.filter((price, index, prices) => {
  return price > 50;
}); // return prices greater than an amount
const filteredArray1 = prices.filter(price => price > 50); // shorten with arrow function. This function is the same as above

// reduce an array to a simpler value
const sum = prices.reduce((previousValue, currentValue, currentIndex, prices) => {
  return previousValue + currentValue;
}, 0); // summation of the array, the zero i starting value
const sum1 = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0); // shorter reduce function

// split() 
const randoString = "newyork;happens,here.0"
const transRandoString = randoString.split(";"); // splits to an array of two strings
const nameFragments = ["Max", "Hex"]
const mergedNameFragments = nameFragments.join(" ");

// using spread operator in array
const addedPrices = [...prices, 1, 4]; // returns prices array with 1 and 4 inside the new copied array
Math.min(...addedPrices); // returns the smallest price. Math.min doesnt work with array. spread operator deconstructs the array for Math.min to work

// Array Destructuring
const nameData = ["Max", "Schwartz", "Mr", 30]
const [firstName, lastName, ...otherInformation] = nameData; // first name returns Max, last name returns Schwartz, otherinformation returns Mr and 30 in array
console.log(firstName, lastName, ...otherInformation);

// Maps and Sets



