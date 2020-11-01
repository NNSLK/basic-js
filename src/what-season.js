const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  let a = date.getMonth();

  if (isNaN(date)) {
    return Error;
  }

  if (a == 2 || a == 3 || a == 4) {
    return "spring";
  }

  if (a == 5 || a == 6 || a == 7) {
    return "summer";
  }

  if (a == 8 || a == 9 || a == 10) {
    return "fall";
  }

  if (a == 11 || a == 0 || a == 1) {
    return "winter";
  }
};
