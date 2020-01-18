function titleCase(title, minorWords) {
    if (!title) {
        return "";
    }
    if (!minorWords) {
        let titleArray = title.split(" ");
        let upperCasedWords = makeUpperCase(titleArray);
        return upperCasedWords.join(" ");
    } else {
        let titleArray = title.split(" ");
        let upperCasedWords = makeUpperCase(titleArray);

        const arrayOfDelimeter = minorWords.split(" ");
        const lowerCasedDelimeter = makeLowerCase(arrayOfDelimeter);

        lowerCasedDelimeter.map(del => {
            for (let i = 1; i < upperCasedWords.length; i++) {
                if (del === upperCasedWords[i].toLowerCase()) {
                    upperCasedWords[i] = del;
                }
            }
        });
        return upperCasedWords.join(" ");
    }
}

function makeLowerCase(arrayOfWords) {
    return arrayOfWords.map(word => word.toLowerCase());
}

function makeUpperCase(arrayOfWords) {
    let upperCasedWords = arrayOfWords.map(word => {
        word = word.toLowerCase();
        let letter = word.split("");
        letter[0] = letter[0].toUpperCase();
        let upperCasedWord = letter.join("");
        return upperCasedWord;
    });
    return upperCasedWords;
}
