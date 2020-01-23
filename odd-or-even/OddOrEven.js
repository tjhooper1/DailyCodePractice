function oddOrEven(array) {
    if (!array.length) {
        return "even";
    }
    return array.reduce((acc, cur) => acc + cur) % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([2, 4, 6])); // 'even'
console.log(oddOrEven([2, 4, 7])); // 'odd'
console.log(oddOrEven([])); // 'even'
