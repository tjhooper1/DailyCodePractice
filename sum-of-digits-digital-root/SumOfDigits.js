function digital_root(n) {
    const reducedNumber = calculate(n)
    return reducedNumber;
}

function calculate(arr) {
    const splitNumbers = arr
        .toString()
        .split("")
        .map(number => parseInt(number));
    let reduced = splitNumbers.reduce((acc, number) => {
        return acc + number;
    });
    if (reduced > 9) {
        reduced = calculate(reduced)
    }
    return reduced
}
