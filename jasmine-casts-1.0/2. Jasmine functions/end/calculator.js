// This file contains the calculator constructor and functionality.

/**
 * Calculator function constructor.
 * @constructor
 */
// Set up a Calculator to perform the operations.
// Default total is 0 as this is the starting value.
// Calculator() is a function constructor, which means it is a function that is used to construct objects.
function Calculator() {
  this.total = 0;
}

/**
 * Adds value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
// Add methods to the Calculator prototype.
// The prototype is an object that exists on every function in JavaScript.
// Prototype must be used because the Calculator function constructor is not a class.
Calculator.prototype.add = function (number) {
  return this.total += number;
};

/**
 * Subtracts number from current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.subtract = function (number) {
  return this.total -= number;
};

/**
 * Multiplies value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.multiply = function (number) {
  return this.total *= number;
};

/**
 * Divides value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new Error('Cannot divide by zero');
  }

  return this.total /= number;
};
