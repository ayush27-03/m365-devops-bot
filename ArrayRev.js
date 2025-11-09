// ? Reverse an array without using the built-in reverse method
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }  
  return reversedArr;
}