function count(string) {
    let letterArray = string.split("");
    let countObject = {};
    if (!letterArray.length > 0) {
        return countObject;
    }
    letterArray.forEach(letter => {
        if (!countObject[letter]) {
            countObject[letter] = 1;
        } else {
            countObject[letter] += 1;
        }
    });
    return countObject;
}

console.log(count("")); // {}
console.log(count("aba")); // { a: 2, b:1 }
console.log(count("abcbaaaa")); // { a: 5, b:2, c:1 }
