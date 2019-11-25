const readlineSync = require("readline-sync");
let height
let pyramid
console.log()

do {
    height = Number(readlineSync.question("Height: "))
} while (Number.isNaN(height) || height % 1 !== 0 || height < 1 || height > 24)

console.log()

let level = height
while (level > 0) {
    pyramid = ""
    for (x = 0; x <= height; x++) {
        pyramid = pyramid + "#"
    }
    for (x = 0; x < level - 1; x++) {
        pyramid = pyramid.replace(pyramid.charAt(x), " ")
    }
    console.log(pyramid)
    level = level - 1
}

console.log("\n")
