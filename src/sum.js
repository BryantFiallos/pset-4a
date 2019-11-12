const readlineSync = require("readline-sync")

do{
lowerBound = readlineSync.question("Lower bound: ");
upperBound = readlineSync.question("Upper bound: ");
} while (lowerBound < Number.MIN_SAFE_INTEGER || upperBound > Number.MAX_SAFE_INTEGER || lowerBound >= upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound))

for (let x = lowerBound; x <= upperBound; x++) {
  if (x % 2 != 0) {
    sum = sum + x;
  }
}
let sumDisplay = sum.toString()
