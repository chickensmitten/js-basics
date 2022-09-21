Using Booleans in Conditions & More on Text Comparisons
Understanding the "Condition"
Always keep in mind that condition in

if (condition) { ... }
simply has to be a boolean value.

Often, you'll generate such a boolean value with the help of ===, >, < etc. All these operators yield boolean values (without changing the variables/ values you're using them on).

Since if only wants a boolean, you of course don't have to use such an operator. If you already got a variable that holds a boolean, you can use it without any extra operator.

Example:

const isLoggedIn = true;
if (isLoggedIn) {
    // This code will execute because isLoggedIn is true => A valid condition
}
You could write

const isLoggedIn = true;
if (isLoggedIn === true) {
    ...
}
but that would be redundant. You'd generate another new boolean where you already got one.

You can use the ! operator to negate ("invert") the value:

const isLoggedIn = true;
if (!isLoggedIn) {
    // This code will NOT execute because isLoggedIn is true but ! inverts it (in this check)
} else {
    // This would execute because !isLoggedIn yields false => else block executes
}
Again, that would be similar to:

const isLoggedIn = true;
if (isLoggedIn !== true) {
    // This would NOT execute
} else {
    // This would execute because isLoggedIn is true and hence !== true yields false
}
But again, that would be redundant.

More on Text (String) Comparisons
Strings can also be compared with greater than (>) or lower/ smaller than (<) operators.

JavaScript compares strings based on standard lexicographical ordering, using Unicode values.

That means that b is greater than a for example.

JavaScript always looks at the first character and only considers other characters if the first character is similar. In addition, capital characters are considered to be smaller than lowercase characters.

See these examples:

'ab' > 'aa' // true
'a' > 'B' // true
'a' > 'b' // false