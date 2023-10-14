const mainFunction = require('../02_scope/scopeExerciseHard.spec');

test('Check if mainFunction returns 50', () => {
  expect(mainFunction()).toBe(50);
});
