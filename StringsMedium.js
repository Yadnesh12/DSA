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

// longest common prefix ( complex one do rewise)
{
let strs = ["flower","flow","flaw"]
function bigPrefix(strs){
    let x= 0
    while(x<strs[0].length){ //- Loop continues until x reaches the end of the first string (strs[0]).
//This ensures that you don’t try to compare characters beyond the length of the first string
        let ch = strs[0][x]
        for(let i =1; i< strs.length; i++){ //- Iterates over the rest of the strings (starting from index 1), comparing the character at index x.

            if(ch !== strs[i][x] || i === strs[i].length){  //(- If the character ch is not equal to the character at index x of the i-th string.
// - ❌ i === strs[i].length – This condition is incorrect. It mistakenly compares index i with the length of strs[i], which doesn’t logically check for string bounds. You likely meant:
// )
                return strs[0].substring(0,x) // - If there's a mismatch at index x, returns the substring from index 0 to x in the first string
            }
        }
        ++x
    }   
    return strs[0]
}
console.log(bigPrefix(strs))
}

//valid anagram ( anagram is when both the 2 string s have same number of characters and same alphabet with same repertations)
{
let strs1 = "anagram"
let strs2 = "nagaram"
function bigPrefix(s1,s2){
   let map1 = {}   // using hash map appraoch
   let map2 = {}
   if(s1.length !== s2.length){  // if the length of both the given Strings is not same then return false directly 
       return false
   }
   for(let i = 0 ; i<s1.length; i++){   //iterate over both strings and store value in hashmaps 
     if(!map1[s1[i]]){
         map1[s1[i]] = 1 
     }else{
         map1[s1[i]]++
     }
   }
   for(let i = 0 ; i<s1.length; i++){
     if(!map2[s1[i]]){
         map2[s1[i]] = 1
     }else{
         map2[s1[i]]++
     }
   }
    return JSON.stringify(map1) === JSON.stringify(map2) //{ a: 3, n: 1, g: 1, r: 1, m: 1 } === { a: 3, n: 1, g: 1, r: 1, m: 1 }
}
console.log(bigPrefix(strs1,strs2))  //true
}

//valid anagram using only one hash map same question as above
{
let strs1 = "anagram"
let strs2 = "nagaram"

function bigPrefix(s1,s2){
   let map1 = {}
   if(s1.length !== s2.length){
       return false
   }
   for(let i = 0 ; i<s1.length; i++){
     if(!map1[s1[i]]){
         map1[s1[i]] = 1 
     }else{
         map1[s1[i]]++
     }
   }
   for(let i = 0 ; i<s1.length; i++){  // running the second loop and checking every char in string and decrementing it by one in hashmap 
     if(!map1[s1[i]] || map1[s1[i] < 0]){ // 2 corner cases are if the char from 2nd string is not present in the hashmap and if the value of char goin less that 0 means a char is present more time s in second string 
         return false
     }else{
         --map1[s1[i]] 
     }
   }
    return true
}
console.log(bigPrefix(strs1,strs2))
}

// Isomorphic strings 
{
let str1 = "egg"
let str2 = "add"
function isoStr(s1,s2){
    let obj = {} // to store every character and map different value to that by comparing with opther string 
    let revObj = {} //doing the same vice verse comparing second string with first string each char at a time 
    let newArr = ""
    if(s1.length !== s2.length){ //if string of both char is not same then return false 
        return false
    }
    for(let i = 0;i<s1.length;i++){
        if(!obj[s2[i]] && !revObj[s1[i]]){   // if the value is not present in both obj and revobj then store that value 
            obj[s2[i]] = s1[i]
            revObj[s1[i]] = s2[i]
            newArr += s1[i]
        }
        else if(obj[s2[i]]=== s1[i] && revObj[s1[i]]===s2[i]){ // corner cases 
            newArr += s1[i]
        }
    }
//    console.log(obj,revObj)  //{ a: 'e', d: 'g' } { e: 'a', g: 'd' }
    return str1 === newArr   
}

console.log(isoStr(str1,str2)) //true
}

// Group Anagrams
{
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
function groupAnagrams(strs){
      let map = {}; 
  
      for (let i = 0; i < strs.length; i++) {
          let sortedStr = strs[i].split("").sort().join(""); // sort every string alphabetacally like eat and tea becomes aet 
  
          if (!map[sortedStr]) {
              map[sortedStr] = [strs[i]];
          } else {
              map[sortedStr].push(strs[i]);
          }
      }
  //  console.log(map) //{ aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
      return Object.values(map);
  };
  console.log(groupAnagrams(strs))
}