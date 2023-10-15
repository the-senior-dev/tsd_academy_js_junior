const sumFirstNNumbers = require("../../src/05_logic_control_flow/sumFirstNNumbers");

test("Sum of first N numbers using for loop", () => {
    expect(sumFirstNNumbers(5)).toBe(15);
    expect(sumFirstNNumbers(10)).toBe(55);
    expect(sumFirstNNumbers(15)).toBe(120);
    expect(sumFirstNNumbers(20)).toBe(210);
});