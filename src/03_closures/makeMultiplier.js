/**
 * Create a function makeMultiplier that takes a single parameter multiplier.
 * The function should return another function that takes a single parameter x,
 * and returns the result of x multiplied by multiplier.
 * 
 * @param {number} multiplier - The number to multiply by.
 * @returns {Function} - A function that multiplies its argument by multiplier.
 */
function makeMultiplier(multiplier) {
  // Your code here
  return function(x) {
    // Your code here
    return x * multiplier;
  }
}

module.exports = makeMultiplier;
