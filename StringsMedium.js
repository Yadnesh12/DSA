//Reverse String 2
{
let str = "abcdefgh"
function revTwo(s,k){
    let temp
    s = s.split("")
    for(let i=0; i< s.length;i = i+(2*k)){ //- This loop jumps in steps of 2k, meaning each iteration handles one block of size 2k.
      let mid = Math.floor(k/2)
      for(let j = 0; j<mid; j++){ // compute half the length of the part to reverse (k characters), since we’re doing symmetrical swaps.
          temp = s[i+j]
          s[i+j] = s[i+j+1]
          s[i+j+1] = temp
      }
    }
    return s.join("")
}
console.log(revTwo(str,2)) //bacdfegh 
// - Iteration 1 (i = 0): Reverse "ab" → "ba"
// - Iteration 2 (i = 4): Reverse "ef" → "fe"
}

//Palindrome 2
{
let str2 = "A man a plan a Canal: Panama"
function paliTwo(s){
    let rev =[]
    let filt =[]
    let regex = /^[a-z0-9]+$/i;  // regex expression for checking the char is alphanumeric or not
    let isChar = false
    s= s.split("")  // top change string into array
    for(let i = 0; i<s.length; i++){
        isChar = regex.test(s[i])   // checks every char is alpha numeric or not and sets true or false
        if(isChar){
             filt.push(s[i].toLowerCase());    // if the char  is alphanumeric it is passed to the array filt
        }
    }
    for (let i = filt.length - 1; i >= 0; i--) { // iterates over the filth array from backside and add the values to the rev array which stores the reverse of thr string 
    rev.push(filt[i]);
}
    return filt.join("") === rev.join("")   // joins the string and compares if both are similar or not 
} 
console.log(paliTwo(str2)) 
}

//Palindrome 2 same as above but simple appraoch with less time complexity and space complexity
{
    let str2 = "A man a plan a Canal: Panama"
function paliTwo(s){
    let rev = ""
    let filt = ""
    let regex = /^[a-z0-9]+$/i; 
    s = s.toLowerCase()
    for(let i = 0; i<s.length; i++){
        if(regex.test(s[i])){
            filt = filt + s[i] 
            rev = s[i] + rev  // creates a reverse of the string 
        }
    }
    return filt === rev
}
console.log(paliTwo(str2)) 
}

//Palindrome 2 using two pointer method
{
    let str2 = "A man a plan a Canal: Panama"
function paliTwo(s){
    let regex = /^[a-z0-9]+$/i; 
    s = s.toLowerCase()
    let i =0
    let j = s.length-1
    while(i<j){
        if(regex.test(s[i]) && regex.test(s[j]) && s[i] === s[j]){
            i++
            j--
        }
        else if(regex.test(s[i]) && regex.test(s[j]) && s[i] !== s[j]){
            return false
        }
        else if(!regex.test(s[i])){
            i++
        }
        else{
            j--
        }
    }
    return true
}
console.log(paliTwo(str2)) 
}