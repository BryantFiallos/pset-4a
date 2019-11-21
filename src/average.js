const readlineSync = require("readline-sync");

let sum = 0;
let value = 0;
let divisor = 0;


do {
  value = Number(readlineSync.question("Non-negative integer: "));
  divisor = divisor + 1;
  if (value >= 0) {
    sum = sum + value;
  }
}
while (value >= 0)

let mean = sum / (divisor - 1)

let average = mean.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 3});
console.log(average);
