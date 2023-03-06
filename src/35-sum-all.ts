export { };

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function (num1: number, num2: number) {
    let sum = 0
    for (let i = num1; num1 <= num2; num1++) {
        sum += num1;
    }
    return sum;
};

console.log(sumAll(5, 10)); // Expected output: 10
