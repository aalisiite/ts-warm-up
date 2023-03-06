export { };

function greatest(...nums: number[]) {
    return Math.max(...nums);
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
