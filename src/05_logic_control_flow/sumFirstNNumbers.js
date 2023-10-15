function sumFirstNNumbers(n) {
    // Your code here
    let sum = 0;
    while (n > 0) {
        sum += n;
        n--;
    }
    return sum;
}


module.exports = sumFirstNNumbers;