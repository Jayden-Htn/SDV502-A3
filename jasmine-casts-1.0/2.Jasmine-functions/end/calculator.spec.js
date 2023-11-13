// This file contains the Jasmine tests for calculator.js.
// Describe: groups related tests together.
// It: a single test. Stands for 
// Expect: a single assertion.
// ToBe: a matcher. Used to compare the actual value to the expected value.

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // 10 second timeout.

describe('calculator.js', function() {
  const delay = 1000; // Delay to avoid asynchronous issues.
  it('should add numbers to total', function(done) {
    const calculator = new Calculator();
    calculator.add(5);

    setTimeout(() => {
      expect(calculator.total).toBe(5);
      done();
    }, delay);
  });

  it('should subtract numbers from total', function(done) {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);

    setTimeout(() => {
      expect(calculator.total).toBe(25);
      done();
    }, delay);
  });

  it('should multiply total by number', function(done) {
    const calculator = new Calculator();
    calculator.total = 100;
    calculator.multiply(2);

    setTimeout(() => {
      expect(calculator.total).toBe(200);
      done();
    }, delay);
  });

  it('should divide total by number', function(done) {
    const calculator = new Calculator();
    calculator.total = 200;
    calculator.divide(2);

    setTimeout(() => {
      expect(calculator.total).toBe(100);
      done();
    }, delay);
  });
});
