const input = require("readline-sync");

let integer = Number(input.question("\nPositive integer: "));
let factors = [];
let pairedFactor = 0;

while (integer > Number.MAX_SAFE_INTEGER || integer < 1 || Number.isNaN(integer) || integer % 1 != 0 || !Number.isInteger(integer)) {
 integer = Number(input.question("Positive integer: "));
}
for (let x = 1; x <= Math.floor(Math.sqrt(integer)) / 2; x++) {
 if (integer % x == 0) {
   pairedFactor = integer / x;
   factors.push(x);
   factors.push(pairedFactor);
 }
}

if (Math.sqrt(integer) % 1 == 0) {
  factors.push(Math.sqrt(integer));
}

factors = [...new Set(factors)];
console.log("\n" + factors.join (", ") + ".\n");
