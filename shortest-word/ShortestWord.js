function findShort(s) {
    const arrayOfWords = s.split(" ");
    let shortestWordLength = null;
    arrayOfWords.forEach(word => {
        if (!shortestWordLength) {
            shortestWordLength = word.length;
        }
        if (arrayOfWords && word.length < shortestWordLength) {
            shortestWordLength = word.length
        }
    });
    return shortestWordLength;
}

console.log(findShort("it is david"))