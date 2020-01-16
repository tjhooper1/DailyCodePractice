function getDivisorsCnt(n) {
    let numOfPossibleDivisors = 1
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            numOfPossibleDivisors++
        }
    }
    return numOfPossibleDivisors
}