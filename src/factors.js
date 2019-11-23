const input = require("readline-sync");

let number = Number(input.question("\nPositive integer: "));
let factors = [];
let pairedFactor = 0;

while (number > Number.MAX_SAFE_INTEGER || number < 1 || Number.isNaN(number) || number % 1 != 0 || !Number.isInteger(number)) {
 number = Number(input.question("Positive integer: "));
}
for (let x = 1; x <= Math.floor(Math.sqrt(number)) / 2; x++) {
 if (number % x == 0) {
   pairedFactor = number / x;
   factors.push(x);
   factors.push(pairedFactor);
 }
}

if (Math.sqrt(number) % 1 == 0) {
  factors.push(Math.sqrt(number));
}

factors = [...new Set(factors)];
console.log("\n" + factors.join (", ") + ".\n");
