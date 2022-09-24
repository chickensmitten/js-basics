const ids = new Set([1, 2, 3]); // can pass in any iterable, can be array, another set or Node List
ids.add(2); // cannot add because 2 already exist
ids.has[4]; // returns false

const person1 = { name: 'Max' };
const person2 = { name: 'Hex' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]); // retrurns a map with nested array
personData.get(person1); //this works, it gets [{ date: 'yesterday', price: 10 }], as person1 is key
personData.set(person2, [{ date: 'forthnightly', price: 100 }]); // set input data
for (const entry of personData.entries()) {
  console.log(entry); // returns key value entries together
}
for (const [key, value] of personData.entries()) {
  console.log(key, value); // returns key value separately
}
for (const key of personData.keys()) {
  console.log(key); // returns all person1 and person2 as they are keys
}
for (const value of personData.values()) {
  console.log(value); // returns all person1 and person2 as they are keys
}

// weaksets
let person = {name: "Max"};
const persons = new WeakSet();
persons.add(person); // weaksets has less set methods
person = null; // and easier for garbage collection especially when you don't need it anymore. because set holds reference even if you declare it as null.

// weakmaps
const personData1 = new WeakMap();
personData1.set(person, "Extra info!"); // weakmaps has less set methods
person = null; // and easier for garbage collection especially when you don't need it anymore. because maps holds reference even if you declare it as null.