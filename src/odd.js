const readlineSync = require("readline-sync");

let sum = 0;
let digit = 0;

console.log()

do {
  integer = Number(readlineSync.question("Positive integer: "))
}
while (integer < 1 || integer > Number.MAX_SAFE_INTEGER || Number.isNaN(integer) || !Number.isInteger(integer))

do {
  digit = integer % 10;
  if (digit % 2 != 0) {
    sum = sum + digit;
  }
  integer = integer - digit;
  integer = integer / 10;
}
while (integer >= 10)

sum = sum + integer;

console.log("\n" + sum + "." + "\n");
