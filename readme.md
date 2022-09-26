# JS Basic

## let variables vs const constants
- using `let` as variables can change.
- using `const` as variables, it can't be changed.
*Pro Tip: use `const` as often as possible as it makes it clear on your intentions. It shows that the data never changes. Also it shows good coding practice.*

**Good Variable Names**
- camelCase: `let userName`
- letters and digits: `let ageGroup5`
- starting with $: `let $kindOfSpecial`
- starting with _: `let _internalValue`

**Not Good Variable Names**
- snake case: `let user_name`
- starting with digit: `let21Players`
- no other special characters: `let user-b`
- reserved keywords: `let let`

## Strings and Commenting
**Commenting**
- one line comment using `// <content>`
- multiple line comment using `/* <content> */` 

**More on Strings in JS**
- regarding single quotes or double quotes. Feel free to use it accordingly. But be consistent
- use backticks to add dynamic values like `${}`
- backticks also allow multiple lines
- using `white-space: pre;` backticks with white spaces will add line break spacing.
- using `\n` for normal double quotes will add line break spacing
- to have backslash or single quotes string, put backslash in front of it `\\` `\'`

## Data Types
- numbers, string, booleans, objects, arrays
- booleans `true` or `false`
- objects: `{ name: "Max", age: 31 }`
- arrays: `[1, "3", True]`
- use `parseInt(<value>)` to convert a string to int. you can also put `+<value>` in front of the string.
- embed syntax like `${<value>}` auto converts everything within it into string. 
- [Click here for more details](/documentation/02_mixing-numbers-and-strings.md)

**Primitive Values vs Reference Values**
- Primitive values: strings, numbers, booleans, null, undefined, Symbol
    - Typically stored in the Stack (not the heap)
    - Variable stores value itself
    - Copying a variable, copies the value

- Reference Values: All other objects. Arrays are a type of object.
    - Stores in memory (Heap). Variables stores a pointer (address) to location in memory.
    - Copying a varialbe, only copies the pointer/reference.


**Special Values**
- `undefined`: default value of uninitialized variables. You shouldn't assign undefined as a value
- `null`: never assumed by default. You have to set this with equals.
- `NaN`: stands for Not a Number. Technically a number type. `3 * "hi"` yields `NaN`

**typeof operator**
- typeof is used to check the type of a variable at runtime.
- `userName = "Max"`, then use `typeof userName` will return `string`

## Importing scripts properly
- `defer` and `async` is only works for external scripts. Internal scripts inside the documents doesn't benefit from them.
- `defer` load early, execute later. Scripts with defer never block the page. Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).
- `async` load early, execute as soon as possible. The page content shows up immediately: async doesn’t block it. DOMContentLoaded may happen both before and after async, no guarantees here.
- for images and diagrams, [add js to page](/public/add-js-to-page.png), [import script](/public/import-scripts.png), [timeline summary](/public/timeline-summary.png),

## Next Level Debugging
- [Debugging with browser](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15918028#questions)
- [Debugging with VS code](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/16991828#questions)

## Operators
- `++<value>` return value after the change
- `<value>--` return value before the change
- other operators: `+=`, `-=`, `*=`, `/=`, `**` exponentiation, `%` divide two numbers yielding remainder.

**Boolean Operators and Conditions**
- `===` is better than `==`. `!==` is better than `!=`. This is because it not only checks for value, but also checks for type.
- when comparing strings, `b` is greater than `a` because JS compares Unicode values.
- `condition` in `if (condition) {}` should be just a boolean. Example below. Redundant to add an equation inside the condition. [Click here for more details](documentation/03_booleans-text-comparisons)
```
const isLoggedIn = true;
if (isLoggedIn) {
    // This code will execute because isLoggedIn is true => A valid condition
}
```

**Comparing Objects**
- Two same objects stored in different variables, when compared with `===` and `==` are not the same. e.g.
```
const person1 = {name: "Max"}
const person2 = {name: "Max"}

person1 === person2 // yields false

const person3 = person1
person3 === person1 // yields true
```

**Operator Precedence**
- [Click here for a list of operator procedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

**Falsy and Truthy Values**
- It is mainly used to ensure that a value is not `""`, `0`, `null`, `undefined`, `NaN`. [Click here for flasy and truthy values](/public/flasy-truthy-values.png)
- Sometimes we have functions that doesn't work with falsy values. [Click here for flasy and truthy explained](/public/falsy-truthy-explained.png)
- JS tries to coerce a variable into boolean with no explicit instructions are given. It doesn't convert the variable into true or false statements though. [Click here for coercion vs conversion](/documentation/04_coercion-vs-conversion.md)
```
let userInput = 'Max';
if (userInput) {
    ... // this code here will execute because 'Max' is "truthy" (all strings but empty strings are)
}
```

**Boolean Tricks with Logical Operators**
- `!!` converts truthy value into true value (e.g. !!1) or falsy value into false value (e.g. !!"")
- `||` returns the first value if the value is truthy. else returns the second value if is falsy.
- `&&` returns the second value if the first value is truthy. Else return nothing
- this is very useful for clean conditional code for html
- [Click here for quick illustration](/public/boolean-tricks.png)
- [Click here for summary of logical operators](/documentation/05_logical-operators-summary.md)


## Ternary Operator vs Conditional Expressions
- this is a ternary operator `const userName = isLogin ? "MAX" : null` without which you will write longer code like below
```
const userName = if (isLogin) {
    return "Max";
} else {
    return null;
}
```

## Loops
**for for-of for-in while**
- `for loop`: execute code a certain amount of times (with counter variable).
```
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```
- `for-of loop`: execute for every element in an array.
```
for (const el of array) {
    console.log(i);
}
```
- `for-in loop`: execute for every key in an object
```
for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}
```
- `while loop`: execute code as long as condition is true
```
while (isLoggedIn) {
    ...
}
```
**break and continue loop**
- `break` stops the entire loop
- `continue` jumps to next loop cycle

## Error Handling with Try Catch
- Typical errors are user inputs and network errors
- `try {} catch (error) {} finally {}`
- `throw <variable>;` sometimes maybe you want to throw error inside `catch () {}`. First thrown because it is for your servers, then throw again for your analytics
- `finally {}` always execute whenever you have a catch error or not. maybe can be used to clean up variables or release data etc.

## Strict mode
- using `"use strict;"` at the beginning of a page will disable certain [javascript behaviours](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode)

## Garbage Collection
- How is memory in Heap managed? It is managed with Garbage Collection (GC).
- GC periodically checks the Heap for unused objects, then removes it automatically.
- Still have to beware of memory leaks. e.g. it happens when you create an anonymous function (i.e. a function that doesnt have a name) with the same function as a normal lydeclared function.

This leaks memory
```
function doCalculations() {
    // ... do calculations
}

function doSomething("click", function() {
    // ... do calculations
});

```
This doesn't leak memory
```
function doCalculations() {
    // ... do calculations
}

function doSomething("click", doCalculations);
```
- [Click here for more about memory leaks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

## Functions
- functions are code on demand
- it is predefined first. It doesn't get executed. then you call the function with parameters if there's any
- parenthesis with arguments will execute the code when the page is loaded. e.g. `add(1,2)` is a parenthesis with argument. `add` is just a function. Assuming the function is defined earlier.
- [Click here for more details on functions](/documentation/01_functions-explained.md)
- [Click here for more details on paramters vs arguments](/documentation/06_paramters-arguments.md)
- Function Declaration/Statements: Hoisted to the top, it can be declared anywhere in the file. Can call the function declaration/statement anywhere in the file
- Function Expression: Hoisted to top but not initialised or defined. Can't be declared anywhere in the file. Has to be declared before it is called.
- [Click here for more arrow functions syntax](/documentation/07_arrow-functions-syntax.md)
- For more information about advanced functions like Anonymous Functions, Callback Functions & Functions in Functions, Default Arguments & Rest Operator, bind() & more, [Click here](/03_advanced-functions-project/function_lessons.js)
- For more explanation on .bind(), [Click here](/public/bind-explanation.png)
- Rest Operators or three dots using `...<variable>`. refer to [Rest Operator Line in this file for more info](/03_advanced-functions-project/function_lessons.js)

## Document Object Model (DOM)
- About DOM. Learn accesing the DOM, traversing the DOM, styling DOM elements, create/insert Elements.
- [Click here for more info on DOM](/04_dom-project/dom.md)

## More on Arrays
- Iterables includes Arrays, NodeList, Strings, Map, Set.
- Array-like Objects are objects that have length property and use indexes to access items. like NodeList, String
- Main caveat of arrays is whether the new array is a reference or a copied version.
- Sets, orders are not guaranteed, duplicates not allowed, no index access
- Maps, any key values are allowed, order is guaranteed, duplicate keys not allowed, key based access.
- 98% we will use Arrays and Objects
- [About Arrays, Sets, Maps example codes](/06_creating-arrays/setsmaps.js)
- [Difference between Arrays, Sets and Maps](/public/maps-sets-objects.png)
- [Use this to access more arrays, sets and maps functions with VSCode](/public/accessing-more-weak-set-functions.png)
- Maps are quite similar to objects, but maps are better performant for large data, can use any values as keys like booleans and functions, better write performance too. [Click here for more info](/public/maps-vs-objects.png)
- [Click here for more on arrays examples](/06_creating-arrays/app.js)

## More on Objects
![Objects](/public/what-are-objects.png)
- What are objects? Mostly anything that are not primitive value. [Click here for more information](/documentation/08_what-are-objects.md)
- [Click here for more info on this in Objects](/documentation/09_this-summary.md)

## Object-oriented Programming (OOP)
- OOP is programming by defining object entities in your code. To create objects, you must first define it as classes of objects.
- Explanation of classes (framework for defining objects) vs instances (objects are instances of classes)
![classes-and-instances](/public/classes-and-instances.png)
- Defining classes in JS code, `class` is a reserved word
```
class Product {
  title = "DEFAULT"; //default value
  iageUrl; // undefined default value
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title; // refers to this class
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }  

  render () {} // can be used. Mostly for html logic
}

const product1 = New Product(... put values here...);
```
- classes can add logic like html, not only data containers

**About Static**
- class static method ![static](/public/static-methods-properties.png)
- static allows you to use class methods
```
class App {
  static cart;
  
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
App.addProductToCart(product);
```
- Use classes when you are reusing certain objects over and over again


**Inheritance**
- a class can extends from another class
`class Porche extends Cars {}`
- with inheritance, you can call `super()` in the constructor function to init the constructor in the parent class.
- [Click here for code implementation](/08_oop_project/assets/scripts/app.js)
- `super()` parent constructor has to be executed before. `this` field name = field value must be added after.
- if `this` is not referring to the correct function, can use anon arrow function or use `.bind(this)`
```
// arrow function
orderButton.addEventListener("click", () => this.orderProducts());

// .bind()
orderButton.addEventListener("click", this.orderProducts.bind(this));

// initializing arrow functions 
orderButton.addEventListener("click", this.orderProducts);

orderProducts = () => {
console.log("something")
}
```

**Private Fields, Properties & Methods**
[private-fields-properties-methods](/public/private-fields-properties.png)
- using `#` to denote private
- before private properties, `_` is used in front of constant object to denote it is private
- because private properties are new, [read this for how pseudo-private properties used to be done in Js](/documentation/10_pseudo-private-properties.md)

**instanceof Operator**
- instanceof operator returns true of false if object belongs to class
```
class Person {
    name = "Max";
}
const p = new Person();
typeof p // returns object
p instanceof Person // returns true

btn instanceof HTMLButtonElemnt // true
btn instanceof Person // false
```
- `const obj = new Object();` is same as calling `const obj = {};`

**Object Descriptors**
- object descriptors allows you to lock down certain capabilities in an object like configurable, enumerable, writable etc.
- `Object.getOwnPropertyDescriptors(p)` // returns metadata of Person
- The code below locks down `writable` for object `p`
```
Object.defineProperty(p, "name", {
    configurable: true,
    enumerable: true,
    value: p.name,
    writable: false
});
```

## More on constructors
- 

**Constructor Functions**


**Prototypes & Prototypical Inheritance**