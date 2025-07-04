//print 1 to n
{
  function fun(i) {
    if (i === num) {
      return;
    }
    console.log(i);
    i = i + 1;
    fun(i);
  }
  let i = 1;
  let num = 7;
  fun(i);
}

//Sum of first n mumbers
{
  function sumN(num) {
    if (num === 0) return 0;
    return num + sumN(num - 1);
  }
  console.log(sumN(5));
}

//Sum of Element in a array
{
  function sumA(len) {
    if (len === 0) return arr[len];
    return arr[len] + sumA(len - 1);
  }
  let arr = [5, 0, 3, 1, 2];
  console.log(sumA(arr.length - 1));
}

//Sum of odd Element in a array
{
  function sumA(len) {
    if (len < 0) return 0;
    if (arr[len] % 2 === 0) return sumA(len - 1);
    return arr[len] + sumA(len - 1);
  }
  let arr = [7, 5, 0, 3, 1, 2, 6];
  console.log(sumA(arr.length - 1));
}

//Find Factorial of the given number
{
  function fact(num) {
    if (num === 1) return 1;
    return num * fact(num - 1);
  }
  console.log(fact(5));
}

//find if a number is power of 2 
{
  function pow(num) {
    if (num === 1) return true;
    if (num % 2 !== 0 || num < 0) return false;
    return pow(num / 2);
  }
  console.log(pow(16));
}

//fibonachi series
{
    function fib(n){
    if(n === 0) return 0
    if(n === 1)  return 1
    return fib(n-2)+fib(n-1)
}
console.log(fib(7))
}  