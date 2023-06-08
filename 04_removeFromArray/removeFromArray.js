const removeFromArray = function (array, ...args) {
  //make shallow copy of array so it remains intact when we perform removal operations
  const newArray = [];

  //iterate over each item in the array
  array.forEach((item) => {
    //check if any arg strickly equals the current item
    if (!args.some((arg) => arg === item)) {
      // if no arg matches the new item, push it to the newArray
      newArray.push(item);
    }
  });
  return newArray;
};

const numbers = [1, 2, 3];
removeFromArray(numbers, "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
