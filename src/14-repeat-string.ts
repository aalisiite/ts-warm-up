import { count } from "console";

export { };

const repeatString = (word: string, num: number) => {
    return word.repeat(num);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
