const convertToCelsius = function(farenheit) {
let farenheitToCelsius = (farenheit-32)*5/9
let farenheitToCelsiusDecimal = Math.round(farenheitToCelsius*10)/10
return farenheitToCelsiusDecimal;
};

const convertToFahrenheit = function(celcius) {
  let celciusToFarenheit = celcius*9/5+32
  let celciusToFarenheitDecimal = Math.round(celciusToFarenheit*10)/10
  return celciusToFarenheitDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
