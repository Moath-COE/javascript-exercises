const convertToCelsius = function (temp) {
  let cTemp = (temp - 32) * (5 / 9);
  return Math.round(cTemp * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  let fTemp = temp * (9 / 5) + 32;
  return Math.round(fTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
