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

## Operators and data types in JS
- just google them
- regarding single quotes or double quotes. Feel free to use it accordingly. But be consistent
- use backticks to add dynamic values like `${}`
- backticks also allow multiple lines
- using `white-space: pre;` backticks with white spaces will add line break spacing.
- using `\n` for normal double quotes will add line break spacing
- to have backslash or single quotes string, put backslash in front of it `\\` `\'`

## Functions
- functions are code on demand
- it is predefined first. It doesn't get executed. then you call the function with parameters if there's any
- parenthesis with arguments will execute the code when the page is loaded. e.g. `add(1,2)` is a parenthesis with argument. `add` is just a function. Assuming the function is defined earlier.
**[Click here for more details](/documentation/01_functions-explained.md)**

## Converting Data Types
- use `parseInt(<value>)` to convert a string to int. you can also put `+<value>` in front of the string.
- embed syntax like `${<value>}` auto converts everything within it into string.
**[Click here for more details](/documentation/02_mixing-numbers-and-strings.md)

## Commenting
- one line comment using `// <content>`
- multiple line comment using `/* <content> */` 

## Operators
- `++<value>` return value after the change
- `<value>--` return value before the change
- other operators: `+=`, `-=`, `*=`, `/=`, `**` exponentiation, `%` divide two numbers yielding remainder.

## Additional Data Types
- numbers, string, booleans, objects, arrays
- booleans `true` or `false`
- objects: `{ name: "Max", age: 31 }`
- arrays: `[1, "3", True]`

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
- for images and diagrams, 
[add js to page](/public/add-js-to-page.png)
[import script](/public/import-scripts.png)
[timeline summary](/public/timeline-summary.png)