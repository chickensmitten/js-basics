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