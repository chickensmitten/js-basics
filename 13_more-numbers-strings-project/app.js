Number.MIN_SAFE_INTEGER // returns smallest possible integer.
Number.MAX_VALUE // returns the largest number/value as opposed to the largest integer above.
1/3 // 0.3333333333333...
(1).toString(2) // adding parenthesis to a number means you are accessing method to a number and not decimal point
// toString(2) tostring with parenthesis means you are accessing the base. with 2 it is the binary number
(5).toString(2) // returns 101
(1/5).toString(2) // returns 0.00110011001100110011...
0.2.toString(2) // returns 0.00110011001100110011...
0.2 + 0.4 // returns 0.60000000000000000001 or something equivalent
0.2 + 0.4 === 0.6 // returns false
(0.2 + 0.4).toFixed(2) // 0.60

//when using decimal points in javascript, must always have toFixed
20.2.toFixed(20)
// or use third party add ons

// BigInt
Number.MAX_SAFE_INTEGER // returns 9007199254740991
9007199254740991n // adding n is using BigInt
900719925474099112312312312312312n
-90071992547409911231234543654765856n
10n - BigInt(4)
parseInt(10n) - 4
10n/2n // returns 5
5n/2n // returns 2n

Math.random() // returns numbers between 0 to 1

function randomIntBetween(min, max) { // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // all this to get a range between 5 to 10, cause with + 1 and math floor, largest number is 9.999999999
}

// interesting way to get strings in dynamic segments O_O
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = "cheap";
  if (productPrice > 20) {
    priceCategory = "fair";
  }
  return `${strings[0]} ${prodName} ${strings[1]} is priced at $${productPrice}. Wow it is ${priceCategory}`
} // returns This product ( Javascript Course ) is  is priced at $29.99. Wow it is fair
const prodName = "Javascript Course";
const prodPrice = 29.99;
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`;
console.log(productOutput);

//regex
const userInput = "test@test.com";
userInput.includes("@")
userInput.includes(".")
const regex = new RegExp()
const regex1 = /^\S+@\S+\.\S+$/
regex1.test(userInput) // returns true

const regex2 = /.ello/
regex2.exec("Hi! jello") // returns a breakdown of the pattern if matches your regex
"Hi! jello".match(regex) // returns the same as above