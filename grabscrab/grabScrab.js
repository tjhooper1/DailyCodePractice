function grabScrab(letterString, dictionary) {
    letterString = letterString
        .split("")
        .sort()
        .join("");
    let newDictionary = [];
    dictionary.forEach((word, i) => {
        const sortedWord = word
            .split("")
            .sort()
            .join("");
        if (sortedWord === letterString) {
            newDictionary.push(dictionary[i]);
        }
    });
    return newDictionary;
}

console.log(grabScrab("ortsp", ["sport", "parrot", "ports", "matey"])); // ['sport', 'ports']
