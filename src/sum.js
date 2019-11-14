const readlineSync = require("readline-sync")

let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let sum = 0;

while (lowerBound < Number.MIN_SAFE_INTEGER || upperBound > Number.MAX_SAFE_INTEGER || lowerBound >= upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound)) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}
  if (lowerBound % 2 === 0) {
    for (x = lowerBound; x <= upperBound; x+=2) {
      sum = sum + x;
    }
  }
else if (lowerBound % 2 !== 0) {
  for (x = lowerBound + 1; x <= upperBound; x+=2) {
    sum = sum + x;
  }
}

sum = sum.toLocaleString("en");
console.log("\n" + sum + ".");
