Mixing Numbers & Strings
You saw the example with a number and a "text number" being added

3 + '3' => '33'

in JavaScript.

That happens because the + operator also supports strings (for string concatenation).

It's the only arithmetic operator that supports strings though. For example, this will not work:

'hi' - 'i' => NaN

NaN is covered a little later, the core takeaway is that you can't generate a string of 'h' with the above code. Only + supports both strings and numbers.

Thankfully, JavaScript is pretty smart and therefore is actually able to handle this code:

3 * '3' => 9

Please note: It yields the number (!) 9, NOT a string '9'!

Similarly, these operations also all work:

3 - '3' => 0

3 / '3' => 1

Just 3 + '3' yields '33' because here JavaScript uses the "I can combine text" mode of the + operator and generates a string instead of a number.