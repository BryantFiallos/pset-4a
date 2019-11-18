const readlineSync = require("readline-sync")

let reversed = 0;
let number = Number(readlineSync.question("\nPositive integer: "));

while (number < 1 || number > Number.MAX_SAFE_INTEGER || Number.isNaN(number) || !Number.isInteger(number)) {
  number = Number(readlineSync.question("Positive integer: "))
}

 while (number != 0) {
  reversed *= 10;
  reversed += number % 10;
  number -= number % 10;
  number /= 10;
 }


 console.log(reversed);
