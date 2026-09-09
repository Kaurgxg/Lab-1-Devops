// Simple test script (no external framework needed -> keeps Jenkins agent setup minimal)
const { add } = require('./index');

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`FAILED: ${message} (expected ${expected}, got ${actual})`);
    process.exit(1);
  } else {
    console.log(`PASSED: ${message}`);
  }
}

assertEqual(add(2, 3), 5, 'add(2,3) should equal 5');
assertEqual(add(-1, 1), 0, 'add(-1,1) should equal 0');
assertEqual(add(10, 15), 25, 'add(10,15) should equal 25');

console.log('All tests passed.');
