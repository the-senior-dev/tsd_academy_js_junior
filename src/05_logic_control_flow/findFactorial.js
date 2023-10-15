function findFactorial(n) {
    // Your code here
    if (n === 0) {
        return 1;
    }
    let factorial = 1;
    while (n > 0) {
        factorial *= n;
        n--;
    }
    return factorial;
}

module.exports = findFactorial;