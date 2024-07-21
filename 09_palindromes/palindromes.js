const palindromes = function (txt) {
  let txtArray = txt
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .join("")
    .split("");
  let txtReverse = txt
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .join("")
    .split("")
    .reverse();
  let isTrue = true;
  for (let i in txtArray) {
    if (txtArray[i] != txtReverse[i]) {
      isTrue = false;
      break;
    }
  }
  return isTrue;
};

// Do not edit below this line
module.exports = palindromes;
