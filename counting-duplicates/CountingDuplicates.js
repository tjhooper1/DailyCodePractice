function duplicateCount(text) {
    let count = 0;
    let tempObj = {};
    text.toLowerCase()
        .split("")
        .forEach(char => {
            if (!tempObj[char]) {
                tempObj[char] = 0;
            }
            tempObj[char] += 1;
            if (tempObj[char] === 2) {
                count += 1;
            }
        });

    return count;
}

duplicateCount("aAbbccde"); // 2
duplicateCount("aabBcde"); // 2
duplicateCount("Indivisibility"); // 1
duplicateCount("Indivisibilities"); // 2
