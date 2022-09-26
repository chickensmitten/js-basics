// class is syntactical sugar for constructor functions
class Person1 {
  name = 'Max';

  constructor() {
    this.age = 30;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

const person = new Person1();
person.greet();

// this is a constructor function. behind the scenes, the code above is similar to below
function Person() {
  this.age = 30; // a property of class Person
  this.name = 'max'; // a property of class Person
  this.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }; // a method of class Person
}

Person1.prototype = {
  printAge() {
    console.log(this.age);
  },
};

console.dir(Person);
const person1 = new Person();
person1.greet();
console.log(person1.toString());
console.log(person1.__proto__ === Person.prototype);

//
class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person2 extends AgedPerson() {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

// getter and setter to change prototype. It is niche and advanced
const course = {
  // alternatively new Object()
  title: 'Javascript – The Complete Guide',
  rating: 5,
};
console.log(course.__proto__);
console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
});

student.name = "max";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

console.log(student);

course.printRating();
