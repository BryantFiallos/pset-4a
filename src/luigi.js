const readlineSync = require("readline-sync");

let height;
let leftPyramid;
let rightPyramid;
console.log();

do {
    height = Number(readlineSync.question("Height: "));
} while (Number.isNaN(height) || height % 1 !== 0 || height < 1 || height > 24);

console.log();

let level = height;

while (level > 0) {
    leftPyramid = "";
    rightPyramid = "";

    for (x = 0; x <= height; x++) {
        leftPyramid = leftPyramid + "#";
    }
    for (x = 0; x < level - 1; x++) {
        leftPyramid = leftPyramid.replace(leftPyramid.charAt(x), " ");
    }
    for (x = level - 2; x < height; x++) {
        rightPyramid = rightPyramid + "#";
    }

    console.log(leftPyramid + " " + rightPyramid);
    level = level - 1
}
console.log("\n")
