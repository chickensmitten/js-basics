Different Arrow Function Syntaxes
For arrow functions, you got a couple of different syntaxes which you can use - here's a summary.

Important: Don't miss the "function only returns an object" special case at the end of this article!

1) Default syntax:

const add = (a, b) => {
    const result = a + b;
    return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
};
Noteworthy: Semi-colon at end, no function keyword, parentheses around parameters/ arguments.

2) Shorter parameter syntax, if exactly one parameter is received:

const log = message => {
    console.log(message); // could also return something of course - this example just doesn't
};
Noteworthy: Parentheses around parameter list can be omitted (for exactly one argument).

3) Empty parameter parentheses if NO arguments are received:

const greet = () => {
    console.log('Hi there!');
};
Noteworthy: Parentheses have to be added (can't be omitted)

4) Shorter function body, if exactly one expression is used:

const add = (a, b) => a + b;
Noteworthy: Curly braces and return statement can be omitted, expression result is always returned automatically

5) Function returns an object (with shortened syntax as shown in 4)):

const loadPerson = pName => ({name: pName });
Noteworthy: Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters (and hence a syntax error would be thrown here).

That last case can be confusing: Normally, in JavaScript, curly braces always can have exactly one meaning.

const person = { name: 'Max' }; // Clearly creates an object
if (something) { ... } // Clearly used to mark the if statement block
But when using arrow functions, curly braces can have two meanings:

1) Mark the function body (in default form)

2) Create an object which you want to return (in shorter function body form)

To "tell" JavaScript what you want to do, wrap the expression (e.g. object creation) in parentheses like shown above.

