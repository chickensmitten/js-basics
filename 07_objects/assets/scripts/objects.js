// recap methods for using objects
let person = {
  name: "Max",
  location: "Europe",
  age: 30,
  hobbies: ["sports", "cooking"],
  greet: function() {
    alert("Hi there!");
  }
};
person.isAdmin = true;
person.greet();
delete person.age;
person.age // returns undefined

let person = {
  "last name": "Hex",
  1.5: "hello"
}
person["last name"]; // returns Hex
person[1.5];

// getting styles in html
const movieList = document.getElementById("movie-list");
movieList.style[backgroundColor] = "red";
movieList.style.display = "block";

// another way to set items in objects
const userChosenKeyName = "level";
person[userChosenKeyName]
// or
let person = {
  [userChosenKeyName]: "...",
} // person.level returns ...

// taking all elements from an object and copying it to another object
let person2 = { ...person };
let person3 = { ...person, age: 29 }; // if there is age, it is overridden
person3 = { ...person, age: 30, hobbies: [...person.hobbies] }; // keys with reference values like arrays will not be copied. You have to add them in

// about object.assign
const person4 = Object.assign({}, person); // creates a copy of new person4 with person properties. person4 is not referencing person

// object destructuring
const { name } = person; // when using name, it returns Max
const { country: location } = person; // assign a name to the key to avoid clashing with other names
const { age, ...otherProps } = person; // age returns age. otherProps returns everything else except age

// check if property in object exists
if (!("race" in person)) {
  // do something
} // can also use to check based on truthy like person.race etc

// instantiating functions in object and using this
const newMovie = {
  info: {
    title: "lowercased title",
    subtitle: "random subtitle"
  },
  id: Math.random().toString(),
  getFormattedTitle: function() {
    console.log(this); // to see that window is inside it
    return this.info.title.toUpperCase();
  },
  getFormattedSubTitle() {
    return this.info.subtitle.toUpperCase();
  }
};
const movie = newMovie.getFormattedTitle(); // returns LOWERCASED TITLE 
let { getFormattedTitle, getFormattedSubTitle } = newMovie; 
getFormattedTitle = getFormattedTitle.bind(movie);
let text = getFormattedTitle() + "-"; // returns LOWERCASED TITLE-
let text1 = getFormattedSubTitle.call(movie) + "-"; // returns RANDOM SUBTITLE-
let text2 = getFormattedSubTitle.apply(movie, []) + "-"; // returns RANDOM SUBTITLE-

// caveat this in object / object this
const searchMovieHandler = function() {
  console.log(this);
  // do something
}
searchBtn.addEventListener("click", searchMovieHandler) //this inside getFormattedSubtitle refers to the addEventListener, it returns the button output

const thisMovieHandler = () => {
  console.log(this);
  // do something
}
// this // console.log(this) is equivalent calling this in this document
searchBtn.addEventListener("click", thisMovieHandler) //arrow function is different from normal function. this returns window
// this would work
```
const members = {teamName: "Blue Rockets", people: ["Max", "Manuel"], getTeamMembers() {
  this.people.forEach(p => {
    console.log(p + " - " + this.teamName);
  });
}}; // this works

const members = {teamName: "Blue Rockets", people: ["Max", "Manuel"], getTeamMembers() {
  this.people.forEach(function(p) {
    console.log(p + " - " + this.teamName);
  });
}}; // this doesn't work cause the this is forEach and causes it to access the windows instead of getTeamMembers function
```
// thorough explanation of this with this URL down below: 
// https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/16029756#questions

// object getters and setters
// getters and setters inside objects allows you to add functions like extra validation, transformation or fallback
// getters and setters must come together
const oldMovie = {
  info: {
    set title(val) {
      if (val.trim() === "") {
        this._title = "DEFAULT";
        return;
      }
    },
    get title() {
      return this._title.toUpperCase();
    }
  }
}

oldMovie.info.title = title; // triggers set
console.log(oldMovie.info.title) // triggers get