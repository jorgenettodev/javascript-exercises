const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(array) {
  
  let result = array.reduce((total, element) => total + element, 0);
  return result;
	};

const multiply = function(array) {
  let result = array.reduce((total, element) => {
    return total * element;
  }, 1);
  return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
	if (n == 1) {
    return 1;
  }

  if (n == 0) {
    return 1;
  }
  return n * factorial(n -1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
