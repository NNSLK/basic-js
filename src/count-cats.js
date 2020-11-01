const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] == "^^") {
        result += 1;
      }
    }
  }
  if (result == 0) {
    return 0;
  } else {
    return result;
  }
};
