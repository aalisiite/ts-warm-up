export { };

const count = (text: string, word: string) => {
    const splitted = text.split(" ")
    let count = 0;
    for (let i = 0; i < splitted.length; i++) {
        splitted[i] = splitted[i].toLowerCase();
        if (splitted[i].includes(word)) {
            count++;
        }
    }
    return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
