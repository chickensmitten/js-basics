// class is syntactical sugar for constructor functions
class Person {
  name = "Max";

  constructor() {
    this.age = 30;
  }

  greet() {
    console.log(
      `Hi, I am ${this.name} and I am ${this.age} years old`
    );
  }
}

const person = new Person();
person.greet();

// this is a constructor function. behind the scenes, the code above is similar to below
function Person() {
  this = {};
  this.age= 30;
  this.name = "max";
  this.greet = function() {
    console.log(
      `Hi, I am ${this.name} and I am ${this.age} years old`
    );    
  };
  return this;
}

const person1 = Person();
person1.greet();

