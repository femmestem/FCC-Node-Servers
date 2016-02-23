// Exercise 2: BABY STEPS
/* Write a program that accepts one or more numbers as command-line arguments
 * and prints the sum of those numbers to the console (stdout).
 */

var sum, args;

args = process.argv.slice(2);
sum = args.reduce(add, 0);

function add(a, b) {
    return Number(a) + Number(b);
}


console.log(sum);
