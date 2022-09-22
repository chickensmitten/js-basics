Parameters vs Arguments
Throughout this course, you'll hear me use the words "parameters" and "arguments" interchangeably.

Technically, there is a difference though:

Parameters are these variables which you specify between parentheses when defining a function.

function sayHi(name) { ... } 
In this example, name is a parameter.

Arguments then are the concrete values you pass to a function when calling that function:

sayHi('Max');
'Max' is an argument of the function therefore - for the name parameter to be precise.

Since both concepts obviously are extremely close connected, I will often say "let's define which arguments a function receives" or something comparable, since defining the arguments of a function in the end means that you set up its parameters (and vice-versa).