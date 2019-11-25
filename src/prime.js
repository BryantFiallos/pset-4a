const readlineSync = require("readline-sync");

let integer = 0;
let prime = "";
console.log()

do {
  integer = Number(readlineSync.question("Non-negative integer: "))
}
while (integer <= 0 || Number.isNaN(integer) || integer > Number.MAX_SAFE_INTEGER|| !Number.isInteger(integer))

for (var x = 2; x < integer; x++) {
  if (integer % x == 0) {
    prime = "no";
    break;
  }
}
if (prime == "no") {
    console.log("\nNot prime.\n")
}
else {
  console.log("\nPrime.\n")
}
