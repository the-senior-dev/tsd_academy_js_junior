// You can only change the scope of variables; no other changes are allowed.
function mainFunction() {
    let x = 10;
    let y = 5;

    function firstFunction() {
      if (true) {
        let z = 2;
        return y * z;
      }
    }
  
    function secondFunction() {
      return x + y;  // y is not defined here!
    }
  
    return firstFunction() + secondFunction();  // Should return 25
  }
  
  module.exports = mainFunction;
  