const readlineSync = require("readline-sync");

let sum = 0;
let integer = 0;
let divisor = 0;

console.log()

do {
  integer = Number(readlineSync.question("Non-negative integer: "));

  if (integer >= 0 && integer < Number.MAX_SAFE_INTEGER && !Number.isNaN(integer) && integer % 1 == 0 && Number.isInteger(integer)) {
    sum = sum + integer;
    divisor = divisor + 1;
  }
}
while ((integer >= 0) || Number.isNaN(integer) || divisor == 0)

let mean = sum / divisor

let average = mean.toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3});
console.log("\n" + average + ".");
