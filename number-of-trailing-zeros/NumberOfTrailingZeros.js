// Determines how many trailing zeros are in the inputted number factorialized
function zeros(n) {
    const total = factorial(n);
    const arr = numberToArray(total);
    let counter = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            counter += 1;
        } else {
            break;
        }
    }
    return counter;
}

// Determines the factorial of the inputted number. (Can take big numbers)
function factorial(userInt) {
    if (userInt === 0)
        return '1'
    if (!userInt)
        return ''
    var i, nextNumber, carret,

        result = userInt.toString().split('').reverse().map(Number)
    while (--userInt) {
        i = carret = 0

        while ((nextNumber = result[i++]) !== undefined || carret) {
            carret = (nextNumber || 0) * userInt + carret
            result[i - 1] = carret % 10
            carret = parseInt(carret / 10)
        }
    }
    return result.reverse().join('')
}

//Takes the inputted number and turns it into an array of individual digits
function numberToArray(n) {
    return n.toString().split("").map(number => parseInt(number));
}
