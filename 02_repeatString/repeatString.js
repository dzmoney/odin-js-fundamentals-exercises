const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let result = "";
    for (s = 0; s < num; s++) {
      result += string;
    }
    return result;
  }
};

repeatString("", 5);

// Do not edit below this line
module.exports = repeatString;
