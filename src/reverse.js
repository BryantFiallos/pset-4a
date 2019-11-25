const readlineSync = require("readline-sync")

let reversed = "";
let digit = 0;
let number = Number(readlineSync.question("\nPositive integer: "));

while (number < 1 || number > Number.MAX_SAFE_INTEGER || Number.isNaN(number) || !Number.isInteger(number)) {
  number = Number(readlineSync.question("Positive integer: "))
}

 while (number > 10) {
   digit = number % 10;
   reversed = reversed + digit + ", ";
   number -= digit
   number -= number % 10;
   number /= 10;
 }

reversed = reversed + number + "."

console.log("\n" + reversed + "\n");
