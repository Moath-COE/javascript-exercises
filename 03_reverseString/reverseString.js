const reverseString = function (txt) {
  let output = "";
  for (let i = txt.length - 1; i >= 0; i--) {
    output = output.concat(txt[i]);
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
