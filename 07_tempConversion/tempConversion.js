const convertToCelsius = function(temp) {
  return parseFloat(((temp - 32) * 0.555555).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return parseFloat((temp * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
