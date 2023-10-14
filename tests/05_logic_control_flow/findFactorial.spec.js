const findFactorial = require("../../src/05_logic_control_flow/03_findFactorial");

test("Find factorial using while loop", () => {
    expect(findFactorial(5)).toBe(120);
    expect(findFactorial(4)).toBe(24);
    expect(findFactorial(3)).toBe(6);
    expect(findFactorial(2)).toBe(2);
    expect(findFactorial(1)).toBe(1);
    expect(findFactorial(0)).toBe(1);
});
  