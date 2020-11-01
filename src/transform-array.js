const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == "-") {
      if (arr[i] === "--discard-prev" && i > 0) {
        result.pop();
      }
      if (arr[i] === "--double-prev" && i > 0) {
        result.push(arr[i - 1]);
      }
      if (arr[i] === "--double-next" && i < arr.length - 1) {
        result.push(arr[i + 1]);
      }
      if (arr[i] == "--discard-next" && i < arr.length - 1) {
        arr[i + 2] == "--double-prev" || arr[i + 2] == "--discard-prev"
          ? (i += 2)
          : i++;
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
