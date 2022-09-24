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



