/**
 * Returns true if the given variable is null and typeof returns 'object'.
 * 
 * @param {*} variable - The variable to be checked.
 * @returns {boolean} - True if the variable is null and typeof returns 'object'.
 */
function isNullObject(variable) {
    // Your code here
    return variable === null && typeof variable === 'object';
  }
  
  module.exports = isNullObject;
  