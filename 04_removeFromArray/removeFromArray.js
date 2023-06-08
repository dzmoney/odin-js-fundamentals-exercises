const removeFromArray = function (array, ...nums) {
  //make shallow copy of array so it remains intact when we perform removal operations
  const newArray = [...array];

  nums.forEach((num) => {
    //find the index position of number you want to remove
    const index = newArray.indexOf(num);
    //if number exists in array (aka the above line does not return -1)
    if (index !== -1) {
      //remove 1 element from specified index of array
      newArray.splice(index, 1);
    }
  });
  return newArray;
};

const numbers = [1, 2, 3];
removeFromArray(numbers, "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
