const convertToCelsius = function(temp) {
  let tempCelsius = ((temp - 32) * 0.5556)
  return Math.round(tempCelsius * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let tempFahrenheit = ((temp * 1.8) + 32)
  return Math.round(tempFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
