const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  let prevNum = 0;
  let nextNum = 1;
  let tmp;
  for (let i = 0; i < num; i++) {
    tmp = nextNum;
    nextNum = nextNum + prevNum;
    prevNum = tmp;
  }
  return prevNum;
};

// Do not edit below this line
module.exports = fibonacci;
