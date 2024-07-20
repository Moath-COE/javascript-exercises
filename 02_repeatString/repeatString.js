const repeatString = function (txt, num) {
  if (num < 0) {
    return "ERROR";
  }
  let finalText = "";
  for (let i = 0; i < num; i++) {
    finalText = finalText.concat(txt);
  }
  return finalText;
};

// Do not edit below this line
module.exports = repeatString;
