//Remove duplicates from an array
{
  let arr1 = [1,1,2,2,2,3, 4, 5, 5, 6, 7, 8, 8];
  function removeDupes(arr) {
      let counter = 0
    for (let i = 0; i < arr.length-1; i++) {       
      if (arr[i] < arr[i + 1]) {
         counter++
      }
      arr[counter] = arr[i+1]
    }
    return arr;
  }
  console.log(removeDupes(arr1));
}

// Shift every element to left in an array
{
  let arr1 = [1, 3, 4, 5, 6, 7, 8, 4];
  let copy = arr1[0];
  function leftShift(arr) {
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = copy;
    return arr;
  }
  console.log(leftShift(arr1));
}

// Find the Missing Number in an Array
{
  let arr1 = [1, 2, 4, 5, 6, 7, 8];
  let missing;
  function leftShift(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
        missing = arr[i] + 1;
      }
    }
    return missing;
  }
  console.log(leftShift(arr1));
}

// remove the number pass as the param from the array 
{
    let arr1 = [1,2,3,2,3,4,3,8];
  function removeNum(arr,num) {
      let x = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== num){
            console.log(x,i)
            arr[x] = arr[i]
            x = x+1
        }
    }
    return {arr,x};
  }
  console.log(removeNum(arr1, 3));
}
