const readlineSync = require("readline-sync");
let fibonacci1 = 0
let fibonacci2 = 1
let fibonacci3 = 0;
let integer = 0
console.log();
do{
  integer = Number(readlineSync.question("Positive integer: "));
} while (integer < 1 || integer > 78 || !Number.isInteger(integer) || Number.isNaN(integer))

for (i = 1; i <= integer; i++) {
  fibonacci3 = fibonacci1 + fibonacci2
  fibonacci2 = fibonacci1
  fibonacci1 = fibonacci3
}

fibonacci1 = fibonacci1.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
console.log("\n" + fibonacci1 + ".\n")
