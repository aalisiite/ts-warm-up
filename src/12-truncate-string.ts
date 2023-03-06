export {};

function truncateString(word: string, count:number){
    return word.substring(0, count);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
