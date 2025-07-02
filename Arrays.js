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

//Reverse String 
{
    let arr1 = ["h", "e", "l", "l", "o"];
  function revStr(arr) {
   let len = arr.length;
    let halfLen = Math.floor(len / 2)
    let x = len - 1; 
    for (let i = 0; i < halfLen; i++) {
      let tempval = arr[i]
      arr[i] = arr[x]
      arr[x] = tempval
      x = x-1
    }
    return arr;
  }
  console.log(revStr(arr1));
}

//Best time to buy and sell stock
{
    let arr1 = [7,5,3,9,1,8];
  function stock(arr) {
   let buy =arr[0]
   let sell = arr[arr.length-1]
    for(let i = 1;i<arr.length-1;i++){
        if(buy > arr[i]){
            buy = arr[i]
        }
        if( arr[i] - buy > sell){
            sell = arr[i]
        }
        console.log(buy,sell)
    }
    return {buy, sell};
  }
  console.log(stock(arr1));
}

//merge two sorted arrays 
{
    let arr1 = [3,5,6,7,8,9,9]
let arr2 = [1,3,6,7,10]
  function sortTwo(arr1,arr2) {
      let arr1Copy = []
      let length = arr1.length + arr2.length 
      let j =0 , k =0
      for(let i = 0; i < length ; i++){
        if( k >= arr2.length || (j <arr1.length && arr1[j] < arr2[k])){
            arr1Copy.push(arr1[j])
            j++
        }
        else {
            arr1Copy.push(arr2[k])
            k++
        }
      }
    return arr1Copy ;
  }
  console.log(sortTwo(arr1,arr2));
}

//move zeros to the end
{
    let arr1 = [0,1,0,3,12]
  function moveZeros(arr) {
    let k = arr.length-1;
    let temp
    for(let i = 0; i< arr.length ; i++){
        if(arr[i] === 0 && i<k ){  
        temp = arr[k]
        arr[k] = arr[i]
        arr[i] = temp
        k--
        }
    }
    return arr;
  }
  console.log(moveZeros(arr1));
}

//maximum number of consecutive 1s
{
    let arr1 = [1,1,0,1,1,1]
  function conOnes(arr) {
    let count = 0
    let maxcount = 0
    for(let i = 0; i< arr.length ; i++){
       if(arr[i] === 1){
           count++
           if(maxcount< count){
               maxcount = count
           }
       }
       else{
           count = 0
       }
    }
    return maxcount;
  }
  console.log(conOnes(arr1));
}

//maximum number of consecutive 1s
{
    let arr1 = [5,4,2,1,3,7,0]
  function misOnes(arr,n) {
    let sum = n*(n+1)/2
    for(let i = 0 ; i < arr.length; i++){
        sum = sum - arr[i]
    }
    return sum;
  }
  console.log(misOnes(arr1,7));
}

//find a number which is not present twice in a array 
{
    let arr1 = [4,1,4,3,2,1,2]
  function misOnes(arr) {
    let hash = {}
    for(let i = 0 ; i < arr.length; i++){
        if(!hash[arr[i]]){
        hash[arr[i]] = 1
    }
    else{
        hash[arr[i]]++
    }
    }
   for(let i = 0 ; i < arr.length; i++){
       if(hash[arr[i]] === 1){
           return arr[i]
       }
   }
  }
  console.log(misOnes(arr1));
}