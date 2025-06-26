//eLIGLE TO VOTE
{
  function eligibleToVote(num) {
    if (num > 18) {
      return "Eligible to vote";
    } else {
      return "Not Eligible to vote";
    }
  }
  let votting = eligibleToVote(15);
  console.log(votting);
}

//cHECK A NUM IS EVEN OR ODD
{
  function evenOrOdd(num) {
    if (num % 2 === 0) {
      console.log("Even Number");
    } else if (num % 2 !== 0) {
      console.log("Odd Number");
    } else {
      console.log("invAALID Number");
    }
  }
  evenOrOdd(22);
}

// return -1 if the array contains 10 number
{
  function calcNew(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 10) return -1;
    }
    return 0;
  }
  let newArr = [2, 3, 4, 5, 1, 6, 10];
  let result = calcNew(newArr);
  console.log(result);
}

//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
{
  let arr = [1, 2, 3, 4, 5, 6, 5];
  function remDup(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }

  let duporNot = remDup(arr);
  console.log(duporNot);
}

//You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.
{
  let nums = [0, 1, 2, 2, 3, 0, 4, 2];
  let val = 2;
  let newArr = [];

  function remDuplicate(nums, val) {
    for (let i = 0; i < nums.length; i++) {
      if (val !== nums[i]) {
        newArr.push(nums[i]);
      }
    }
    return newArr;
  }

  console.log(remDuplicate(nums, val)); //-->>>>[ 0, 1, 3, 0, 4 ]
}

//Write a function that returns the number of negative numbers in an array.
{
  let arr = [2, -6, 4, 8, 1, -9, -9];
  let count = 0;
  function negNum(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    return count;
  }
  console.log(negNum(arr));
}

//Write a function that returns the smallest number in an array.
{
  let arr1 = [2, -6, 4, 8, 1, -9];
  let num = arr1[0];
  function smallNum(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < num) {
        num = arr[i];
      }
    }
    return num;
  }
  console.log(smallNum(arr1));
}

//Find the Second Largest Number in an Array
{
  let arr2 = [0, 3, 5, 2, 7, 9, 88, 29];
  let largest = -Infinity;
  let secLarge = -Infinity;

  function secLargest(arr) {
    if (arr.length < 2) {
      return "array contains only one number";
    }
    for (let i = 2; i < arr.length; i++) {
      if (largest < arr[i]) {
        secLarge = largest;
        largest = arr[i];
      } else if (largest > arr[i] && secLarge < arr[i]) {
        secLarge = arr[i];
      }
    }
    return secLarge;
  }
  console.log(secLargest(arr2));
}

//inverted Right traingle pattern
{
  for (let i = 5; i > 0; i--) {
    // ****
    let row = ""; // ***
    for (let j = 0; j < i; j++) {
      // **
      row = row + "*"; // *
    }
    console.log(row);
  }
}

///right angle traingle
{
  for (let i = 0; i < 4; i++) {
    // *
    let row = ""; // **
    for (let j = 0; j <= i; j++) {
      // ***
      row = row + "*"; // ****
    }
    console.log(row);
  }
}

// complex right traingle star with empty spaces and starts
{
  //   *
  //   **
  //  ***
  // ****
  // *****
  //******
}
{
  for (let i = 0; i < 6; i++) {
    let row = "";
    for (let k = 0; k <= 6 - (i + 1); k++) {
      row = row + " ";
    }
    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

//1010 right angle traingle pattern
{
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    let switchON = 1;
    for (let j = 0; j <= i; j++) {
      row += switchON;
      if (switchON === 1) {
        switchON = 0;
      } else {
        switchON = 1;
      }
    }
    console.log(row);
  }
}

//Count the Number of Digits in an Integer
{
  let num = 1098;
  let count = 0;
  function countNum(nums) {
    nums = Math.abs(nums); // handling negative number will turn them into positive nums
    if (nums === 0) {
      count++;
    }
    while (nums > 0) {
      count++;
      nums = Math.floor(nums / 10);
    }
    return count;
  }
  console.log(countNum(num));
}

// check if the number is palindrome 
{
  function checkPali(num) {
    if (num < 0) return false;
    let mnum = num; // created a new variable nmum and storing the orignal number init because we are changing orignal number by dividing 
    let rev = 0;
    while (num > 0) {
      let rem = num % 10;  // it is used to get the last digit of the number eg in this place 9
      rev = 10 * rev + rem; // add a num at the end like if we want to join 4 and 3 to get 43
      num = Math.floor(num / 10);
    }
    return rev === mnum;
  }
  console.log(checkPali(9009));
}

// reverse a integer 
{
  function checkPali(num) {
    let mnum = num;
    num = Math.abs(num);      // for converting negative number to positive number
    let rev = 0;
    while (num > 0) {
      let rem = num % 10;
      rev = 10 * rev + rem;
      num = Math.floor(num / 10);
    }
    return mnum < 0 ? -rev : rev;  // if the input is negative give the response as negative if positive then positive
  }
  console.log(checkPali(-90988));
}

// count the sum of each digit in a number 
{
  function count(num) {
    if (num === 0) return 0;
    let sum = 0;
    while (num > 0) {
      let add = num % 10;
      sum = sum + add;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  console.log(count(7));
}

// count the sum of each digit in a number from a array of multiple numbers
{
  let arr = [234, 0, 45, 67];
  function count(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      while (arr[i] > 0) {
        let add = arr[i] % 10;
        sum = sum + add;
        arr[i] = Math.floor(arr[i] / 10);
      }
      newArr.push(sum);
    }

    return newArr;
  }
  console.log(count(arr));
}          