const findTheOldest = function (arr) {
  let res = arr.sort((p1, p2) => {
    let p1Death = p1.yearOfDeath;
    let p2Death = p2.yearOfDeath;
    if (!("yearOfDeath" in p1)) {
      p1Death = new Date().getFullYear();
    }
    if (!("yearOfDeath" in p2)) {
      p2Death = new Date().getFullYear();
    }
    let p1Age = p1Death - p1.yearOfBirth;
    let p2Age = p2Death - p2.yearOfBirth;
    return p1Age - p2Age;
  });
  return res[res.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
