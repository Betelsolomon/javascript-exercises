function removeFromArray(array, ...itemsToRemove) {
    return array.filter(item => !itemsToRemove.includes(item));
  }
  
  const originalArray = [1, 2, 3, 4];
  const newArray = removeFromArray(originalArray, 3);
  
  console.log(newArray);
// Do not edit below this line
module.exports = removeFromArray;
