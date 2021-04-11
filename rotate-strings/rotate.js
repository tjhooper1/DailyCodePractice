

function rotate (word){
    const letters = word.split("");
    const shiftedArray = []
    
    letters.forEach(() => {
        const letterToShift = letters.splice(0, 1)
        letters.push(letterToShift[0])
        
        shiftedArray.push(letters.join(""))
    });
    
    return shiftedArray
}

rotate("Hello")
// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]