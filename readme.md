# JS Basic

## Main Learning Takeaway
- selecting the right value, properties etc in side the function or the function itself is important. Most errors are because you selected the wrong one. To solve it, you need to traverse with DOM with console.log
- Everything in JS is array or objects. This means, most times, it is about adding and removing stuff from arrays or objects.
- Use JS frameworks to save code, however within the same page, can use DOM methods.


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

**More on Numbers and Strings**
- every numbers in Javacript is floating points.
- numbers are stored as 64 bit floating points.
- `Number.MAX_SAFE_INTEGER` returns biggest possible integer. There are many more methods for `Number` it is same as `Math.pow(2, 53) -1`.
- Javascript can display numbers bigger than max safe integer, but it wouldn't be able to calculate it try `Math.pow(2, 53) +1`. It will be incorrect/imprecise
- Calculating with floating points are imprecise. Therefore Javascript calculations are imprecise.
- `BigInt` is a primitive value that can be used to calculate imprecision.
- `Math` and `Number` methods are available. Can search through MDN docs. [Here for math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [here for numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- For string methods, [click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- Can also use regex to filter strings for true or false
- [Click here for more information](/13_more-numbers-strings-project/app.js)

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

**Pure Functions**
- What are pure functions, see image below and [read here for more info](/12_more-advanced-functions-project/app.js)
![pure-functions](/public/pure-functions.png)
- It is always to good idea to aim for pure functions without side effects. That is the goal.

**Factory Functions**
- It is a function that produces another function. 
- [Click here for more info](/12_more-advanced-functions-project/app.js)

**Closures**
- Every function in javascript is a closure
- Closure deals with different lexical environments. Each function has its own lexical environment that the function lives in the a global lexical environment.
- [Click here for more info](/12_more-advanced-functions-project/app.js)

**Recursion**
- it is a function calling itself
- recursion requires an exit condition
- [Click here for more info](/12_more-advanced-functions-project/app.js)
- advanced recursion is very useful for deeply nest, many level of nesting objects
- recursion can be hard to reason through, use breakpoints to do it

## Document Object Model (DOM) and Browser APIs
- About DOM. Learn accesing the DOM, traversing the DOM, styling DOM elements, create/insert Elements.
- [Click here for more info on DOM](/04_dom-project/dom.md)
- `projectElement.dataset.extraInfo;` accesses `data-extra-info`
```
const projectElement = document.getElementById(this.id);
const tooltipText = projectElement.dataset.extraInfo;
<li
  id="p1"
  data-extra-info="Got lifetime access, but would be nice to finish it soon!"
  class="card"
>
```
- calling `getboundingClientRect()` from `document.getElementById("main-box").getBoundingClientRect()` gives you useful information of an element to manage its width, height, position etc.
- get the screen width and height `document.documentElement.clientWidth` and `document.documentElement.clientHeight`
- Other element manipulation methods include: `.offsetTop`, `.offsetLeft`, `.clientTop`, `.clientLeft`, `.offsetWidth`, `.offsetHeight`,`.clientWidth`, `.clientHeight`, `.scrollHeight`, `.scrollTop`. [For more info checkout HTML element article](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
- [Click here for more info](/10-practice-oop/assets/scripts/app.js)
- use `location` method to do thing related to the webpage URL
-`location.href = "https://google.com"` goes directly to a new website
-`location.replace("https://google.com")` goes directly to a new website without back button
- `history` allows you interact with `location` history
- `history.back` goes back a page where you came from
- `history.go(5)` goes back 5 steps
- `navigator` allows you to check the browser type, `.geolocation.getCurrentPosition` e.g. `navigator.userAgent` though this is not really useful because web developers can lie. Better to check if the `navigator` contains certain functions 
- getting dates
```
const date = new Date();
date.getDay();
date.getTime();
const date2 = new Date("07/11/19"); // Jully 11th 2019 etc
```
- custom errors
```
const customError = new Error("Something wrong!")
customError.code // returns 404. There are many more errors
console.dir(customError) // to see everything under the hood
```
- [Search Mozilla for more on Browser APIs](https://developer.mozilla.org/en-US/docs/Web/API)

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
- static allows you to use class methods by calling the class then the property `Class.some_property` instead of calling from an instance 
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

// instead of calling from instance
app = App(...something... here);
app.addProductToCart(product);

```
- In Ruby, it is akin to class methods vs instance methods
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

**Constructors**
- classes in javacript are syntactic sugar for constructor functions.
- construction functions are functions which can be called together with the `new` keyword to create an object based on it.
- [Click here for more examples](/09_constructor/app.js)

**Prototypes & Prototypical Inheritance**
![prototypes](/public/prototypes.png)
![prototypes-objects](/public/prototype-objects.png)
![prototypes-in-console](/public/prototype-in-console.png)
![prototypes-chain](/public/prototype-chain.png)
- constructor functions and prototypes power Javascript objects
- every contructor functions you build has prototype property
- prototype is an object itself.
- Idea behind "Prototypical Inheritance" is to provide fall back for objects
- prototype objects == "Fallback objects". if certain property is called from the object and not found, it will call the object before it. Working sort of like inheritance.
- Every object uses `console.dir(Object.prototype);` as its default fallback value
- What's the difference between someObj.__proto__ vs SomeFunction.prototype?
`__proto__` points at the prototype object of `someObj`, `prototype` at the prototype object that will be assigned as prototype to objects created based on `SomeFunction`
- [Click here for Prototype Summary](/documentation/11_prototype-summary.md)
![Different kinds of method declarations](/public/different-kinds-of-method-declarations.png)
- Different kind of method declarations

## Events
- exampls of event listenders `addEventListener()` (in Browser) or `on()` (in node JS)
- search for MDN Event to get more event examples
- using `onclick` in html is strongly discouraged because it mixes html with inline javascript. It makes it harded to reason and troubleshoot. Should be added to js file instead
- DOM events propagates, it is called event propagation. 
- DOM events has two phases: capturing and bubbling phases. in Capturing phase, DOM events captures actions into the HTML e.g. from `<section>` to `<div>` to `<button>` to `click` then it executes from inside to outside by bubbling back up from `click` to `<button>` to `<div>` to `<section>`.
- use DOM traversing to implement event delegation
- gotchas with `this` and event handlers. `this` in `event => {}` points at windows. `this` in `function(event) {}` points at the current element target
- [Click here to see events js code examples](/11_events-project/assets/scripts/events.js) and [here for events html code example](/11_events-project/events.html)

**Drag and Drops**
- theory for drag and drop events: 
1. Mark elements as `draggable` 
2. Listen to `dragstart` Event (describe operation & append data). [Click here for setData drag types](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) and [click here for effectAllowed drag and drop operations](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed)
3. Accept Drop via `dragenter` and `dragover` `events => preventDefault()` 
4. Optional: Listen to `dragleave` Event (e.g. update styles) 
5. Listen to `drop` Event & Update Data/UI 
6. Optional: Listen to `dragend` Event & Update Data/UI
- [Click here to see app js example code implementation](/11_events-project/assets/scripts/app.js) and [here for index html](/11_events-project/index.html)
- [Click here for drag and drop adjustments for firefox](/documentation/12_drag-and-drop-for-firefox.md)

## Asynchronous Code
- All codes executes in sequence
![code-in-sequence](/public/code-in-sequence.png)
- Async code executions allows for code execution asynchronously
![async-code-with-callback](/public/async-code-with-callback.png)
- [Click here for more async code examples](/14_async-project/app.js)
- Callback hell happens when you need to get your code running in order, you nest your code. It is better to uses promises and chain the code execution. Example implementation below:
```
// Callback Hell
getCurrentPosition(() => {
  setTimeout(() => {
    doMoreAsyncStuff(() => {
      ...
    });
  }, 1000);
}, ...);

//promises
someAsyncTask()
  .then(() => {
    return another Task();
  })
  .then(() => {
    return yetAnotherTask();
  })
  .then(...);
```
- when using `.catch` with `.then`, anytime within the `.then` code there's an error. all `.then` code will be skipped until it reaches `.catch`. any `then` thereafter `.catch` will execute as normal.
- `async` must pair with `wait`. 
- Max prefers `.then` and `.catch`. read code example for more information.
- `Promise.race([])` takes an array of promises and runs whichever is faster.
- `Promise.all([])` return all data from array of promises only after all is resolved or at returns error if at least one is rejected.
- `Promise.allSettled([])` return all data from array of promises only after all is resolved.
- [Click here for promises summary and finally in promises](/documentation/13_promises-states-finally.md)

## HTTP
- For free fake http, use [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- `JSON.stringify` helps convert javascript to JSON, while `JSON.parse` converts JSON to javascript
- `new XMLHttpRequest` is old method. New method is `fetch`
- [Click here on JSON data deep dive](/documentation/14_json-data-deep-dive.md) 
- [Click here for great example implementation of http with UI](/15_http-requests/assets/scripts/app.js)

## Modular Javascript
- to run your project in localhost web server, and not through html, installd NodeJS, then install serve with `npm install -g serve`. `-g` means globally.
- serve tool allows you to use `export` and `import`
- using `export` to a function indicates that it is ready for external file to import. then use `import` in the external file to import the function.
- it resolves CORS policy issue. it basically means cross domains downloads are not allowed, you are only allowed to download scripts from the same domain your page is running from.
- alternative naming syntax for modules. `import { ProjectItem as PrjItem } from "./ProjectItem.js"`. `PrjItem` can be used to as alias for `ProjectItem`
- `export default class {}` means that this function in the file is default exported function. just need to `import <Any Name> from "./Component.js`. Then you can add `import <Any Name>, { ...list of other not default named exported functions... } from "./Component.js`
- importing specific functions only when you need the code. this improves performance because you don't have to download all the scripts beforehand. Might not be good to do this. Better to create more sub-modules/components
```
import("./Tooltip.js").then(module => {
  const tooltip = new module.Tooltip(
    ... do something ...
  )
});
```
- can use `window.DEFAULT_VALUE = "Max";` or `globalThis.DEFAULT_VALUE = "Max";` which is outside a function in file A, to share something globally. Then it can be called on in file B that in a function `console.log(window.DEFAULT_VALUE);` or `console.log(globalThis.DEFAULT_VALUE);`. Only use this as last resort. it is like a hack

## Javascript Workflow and Tooling
- Limitations of basic projects. micromanaging lots of imports and unnecessary http requests, unoptimized code, potentially sub-optimal browser support, need to reload page manually, code quality is not checked.
- List of web development tools normally used in Javascript:
1. `webpack-dev-server` or `serve` provide development server for more realistic development environment and provides auto-reload
2. `webpack` bundling tool allows for combining multiple files into bundled code so that there are less files.
3. `webpack optimizer` plugins. optimizes code (shorten function names, remove whitespaces etc)
4. `babel` is a code compilation tool that allows you to write modern code yet get "older" code as output
5. `eslint` is used to check for code quality, check for conventions and patterns.
- An overview of Javascript workflow
![javascript-workflow](/public/javascript-workflow.png)
- with NodeJS installed, go to a directory then type `npm init`. It will create a `package.json`
- `npm install --save-dev eslint` installing eslint in the development side of `package.json`. ReactJS normally already has it.
- Using eslint. `Cmd + Shift + P` type `eslint` then choose `eslint` configuration, then go through the prompt to selection the options
- For more information on configuring eslint, [click here](/documentation/15_configuring-eslint.md)
- To install webpack, `npm install --save-dev webpack webpack-cli`
- create a new file called `webpack.config.js` to give instructions to `webpack`. Please note NodeJS uses
```
// /webpack.config.js
const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: { // it denotes which folder should the js output be in.
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts")
    // __dirname is node js global constant that gives us access to this current absolute path
  }
};
```
- becauase `webpack` tries to bundle our files, the config is to let it know where to begin and how to bundle.
- can remove `.js` in `import {} from "./somefile.js"` with `webpack`
- To read more about webpack, [click here](/documentation/16_multiple-entry-webpack.md)
- config webpack bundling for development node, because without it, it will assume the code is in production mode. but also need let webpack know the publicPath in development.
```
// /webpack.config.js
const path = require("path");
module.exports = {
  node: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/"
  }
};
```
- using `npm install --save-dev webpack-dev-server`to auto reload in development server. Then add `"build:dev": "webpack-dev-server"` to scripts in package.json file 
- for good in browser debugging experience with sourcemaps, like adding thumbnails to stop the code, add `devtool: "cheap-module-eval-source-map"` to webpack.config.js. There are many `devtool` options in webpack documentation.
- `webpack.config.prod.js` is used for production. the `node:` should change to production. and in package.json add `"build:prod": "webpack --config webpack.config.prod.js"`, then when run `npm run build:prod`
- optimization by getting rid of old files. firstly install `npm install --save-dev clean-webpack-plugin`, then add the following config file to dev and prod webpack config js file below:
```
// /webpack.config.js & /webpack.config.prod.js
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
module.exports = {
  node: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/"
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new CleanPLugin.CleanWebpackPlugin()
  ]
};
```
- browsers will typically cache the files, so when deploying these files to the production server without changing the file names, the browsers will serve the old files. To solve this issue, we will need to change the file name everytime a new change is deployed to production. To do that we make this dyanmic element change `filename: [contenthash].js` in the webpack.config.prod.js file.
- adding third party packages with npm command, this will create a `dependencies` in package.json. for example you installed `npm install --save lodash`, to use it in your file use `import * as _ from "lodash";` `* as _` is all functions in lodash. you can call specific features with `{ ... some function ...}` or `"lodash/"array`; in the import line.
- For code example of the above, [click here](/18_javascript-tooling-and-workflow-project/)

## Using Browser Storage
- what is browser storage
![browser-storage](/public/what-is-browser-storage.png)
- localstorage vs cookies vs indexedDB
![localstorage-vs-cookies-vs-indexeddb](/public/localstorage-vs-cookies-vs-indexeddb.png)
- never take any browser-storage data as single source of truth because it can be manipulated by anyone.
- access browser storage, inspect your browser, click on "Application" then you can see "Storage" on the side nav.

**SessionStorage**
- all objects have to convert to JSON strings, else it will be stored as `[object Object]`. this means methods cannot be stored as it will be lost once converted to JSON.
- session storage is used to store cookies. `sessionStorage` method is used. 
- session storage lives as long as the page is open in the browser. Once it is closed. It will be cleared. local storage is kept in the browser as long as the user doesn't remove it.

**localStorage**
- use `window.localStorage` or `localStorage` to access it in the browser. then there are methods like `.setItem()` and `.setItem()`
- For code examples on localstorage, [click here](/19_browser-storage-project/localstorage.js)

**Cookies**
- example code on how to set cookies `document.cookie = "uid=u123"`. Cookies are only available if it is getting served with real available server. `npm serve` pkg can simulate real server in local development. some cookie with "HttpOnly" flags are only accessible by the server, not browser side.
- cookies also can set a timer `document.cookie = "uid=u123"; max-age=360` or takes `expires=`, you can put objects as JSON strings, you can send to server with requests.
- retrieving cookie data in index is not a good idea, better to search for the key name
- For code examples on cookies, [click here](/19_browser-storage-project/cookies.js)
- For more info on cookies [click here](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

**IndexedDB**
- use `indexedDB.open();` to call it. then use methods/functions like `.createObjectStore();`
- For code examples on indexedDB, [click here](/19_browser-storage-project/indexeddb.js)
- for more info on IndexedDB [click here](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [idb third party library](https://github.com/jakearchibald/idb)) to make working with indexedDB much easier 

## Grab Bag
- To learn about MongoDB [click here](https://www.notion.so/MongoDB-Node-Driver-Node-js-Cheat-Sheet-30af79111465430980b7e7828c8e8f65). It contains how to create, read, filter, update, delete, CRUD, index, aggregate, geolocation, geospatial etc
- MongoDB above also shows how to do pagination