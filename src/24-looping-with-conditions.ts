export { };

function onlyTheAces(arr: string[]) {
    return arr.filter(x => x.charAt(0) === "A");
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
