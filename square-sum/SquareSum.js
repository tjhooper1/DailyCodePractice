function squareSum(numbers) {
    let squared = []
    numbers.forEach(number => squared.push(number * number))
    return squared = squared.reduce((acc, cur) => cur + acc, 0);
}