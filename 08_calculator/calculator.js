const add = function(first, second) {
return first+second;
};

const subtract = function(first, second) {
  return first-second;
	
};

const sum = function(array) {
  let sum = 0;
      for (i=0; i<array.length; i++){
    sum+=array[i];
  }
  return sum;
};

const multiply = function(array2) {
  let multiple = 1;
    for (i=0; i<array2.length; i++){
      multiple *= array2[i];
    }
  return multiple;
};

const power = function(first, second) {
  return Math.pow(first,second);
};

const factorial = function(value) {
  let final = 1; 
  for (let i=1; i<=value; i++){
    final *= i; 
  }
  return final;
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
