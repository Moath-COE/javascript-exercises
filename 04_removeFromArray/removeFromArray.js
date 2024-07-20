const removeFromArray = function (arr, ...num) {
  let output = [];
  for (let x of arr) {
    if (!num.includes(x)) {
      output.push(x);
    }
  }
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
