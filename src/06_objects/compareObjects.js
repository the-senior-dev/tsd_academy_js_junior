function compareObjects(obj1, obj2) {
    // Your code here
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    }
    return false;
}
  
module.exports = compareObjects;
  