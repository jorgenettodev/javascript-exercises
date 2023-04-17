const convertToCelsius = function(x) {
  let result = ((x - 32) * 0.5556); // fórmula F -> C
  return Math.round(result*10) / 10; // arredonda o resultado multiplicado por 10. e depois divide por 10.
  
};

const convertToFahrenheit = function(x) {
  let result = (x * 1.8) + 32; // aplica a fórmula C -> F 
  return result = Math.round((result) * 10) / 10; // x -> (x * 10) / 10 // Example: 10.555 * 10 = 105.55 / 10 => 10.5
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
