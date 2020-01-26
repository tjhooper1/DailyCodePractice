function maxProduct(numbers, size) {
    let sortedNumbers = numbers.sort((a, b) => b - a);
    sortedNumbers = sortedNumbers.splice(0, size);
    return sortedNumbers.reduce((num, acc) => num * acc);
}

maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5); // 247895375
maxProduct([4, 3, 5], 2); //20
maxProduct([-4, -27, -15, -6, -1], 2); //4
