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
  this.age= 30;
  this.name = "max";
  this.greet = function() {
    console.log(
      `Hi, I am ${this.name} and I am ${this.age} years old`
    );    
  };
}

console.dir(Person);
const person1 = new Person();
person1.greet();
console.log(person1.toString());
console.log(person1.__proto__ === Person.prototype);
