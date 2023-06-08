const removeFromArray = function (array, number) {
  //find the index position of number you want to remove
  const index = array.indexOf(number);
  //if number exists in array (aka the above line does not return -1)
  if (index !== -1) {
    //remove 1 element from specified index of array
    array.splice(index, 1);
  }
  return array;
};

const numbers = [1, 2, 3, 4];
const splicedArray = removeFromArray(numbers, 3);
// Do not edit below this line
module.exports = removeFromArray;
