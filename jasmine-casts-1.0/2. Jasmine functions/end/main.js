// This file handles the DOM manipulation and event handling.

/**
 * Calculates result for a simple mathematical expression.
 *
 * @param {string} inputValue
 */
function calculate(inputValue) {
  const expression = /\+|\-|\*|\//; // Regex for +, -, *, or /.
  // Slashes ('/') are used to indicate the beginning and end of a regular expression (delimiters).
  // The backslash ('\') is an escape character to identify special characters.
  // The pipe ('|') is an OR operator.

  const numbers = inputValue.split(expression); 
  // Split input into an array at the first instance of a match to the expression.
  // Will return an array of two strings, e.g. ['1', '2'] for '1+2'.

  // Convert two strings to numbers.
  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[1]);

  // Get the operation from the input value.
  const operation = inputValue.match(expression);

  // Make sure all values are valid.
  if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null) {
    updateResult('Expression not recognized'); // UpdateResult is a custom function to update DOM element.
    return;
  }

  // Create a new instance of the Calculator class from calculator.js.
  // This is accessed via the calculator.js script tag in the index.html file.
  // Keyword 'new' creates a new instance of the Calculator class.
  const calculator = new Calculator();
  calculator.add(numberA); // Set the starting number before performing the operation.

  let result;
  // Perform the operation depending on the operator.
  // Use class methods from calculator.js.
  switch(operation[0]) {
    case '+':
      // References the Calculator object created above.
      // THis references the constructor in calculator.js and the methods in the Calculator prototype.
      result = calculator.add(numberB);
      break;
    case '-':
      result = calculator.subtract(numberB);
      break;
    case '*':
      result = calculator.multiply(numberB);
      break;
    case '/':
      result = calculator.divide(numberB);
      break;
    default:
      result = 'Operation not recognized';
  }

  updateResult(result);
}

/**
 * Updates result in DOM element.
 * @param {string} result
 */
function updateResult(result) {
  const element = document.getElementById('result');

  if (element) {
    element.innerText = result;
  }
}
