function DNAStrand(dna) {
    return dna
        .split("")
        .map(letter => {
            switch (letter) {
                case "A":
                    return (letter = "T");
                case "T":
                    return (letter = "A");
                case "C":
                    return (letter = "G");
                case "G":
                    return (letter = "C");
                default:
                    break;
            }
        })
        .join("");
}

console.log(DNAStrand("AAAA")); // "TTTT"
console.log(DNAStrand("ATTGC")); // "TAACG"
console.log(DNAStrand("GTAT")); // "CATA"
