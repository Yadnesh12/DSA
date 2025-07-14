//calculate the size of last char in an string \
// two loops method
{
let s = "  fly  me to the  moon  "
function lastWord(s){
   let last = s.length-1
   let count = 0
    while(last>=0){
        if(s[last] === " "){  // helps to remove the blamk spaces from the end 
            last = last-1
        }
        else{
            break // if there is any work it breakes and we geet the last number from where the letter stars
        }
    }
    while(last>=0){
        if(s[last] !== " " ){ // onces the blank spaces are removed it iterates over the word untill it finds a blank space
            count= count +1
            --last
        }
        else{
            break // if it encounters any blank space again the loop breaks and we have the answer 
        }
    }
    return count
}
console.log(lastWord(s))
}

//Shortcut method for above solution 
{
    let s = "  fly  me to the  moon  "
function lastWord(s){
  s = s.trim()  // trim the string from start and end 
  s = s.split(" ") // split the string by " " into an array
return s[s.length-1].length
}
console.log(lastWord(s))
}

// above solution with one loop 
{
let s = "  fly  me to the  moon  "
function lastWord(s){
  let n = s.length - 1 
  let count =0
  while(n>= 0){
      if(s[n] !== " "){
      count++
      }
      else if(count>0){ // if the count is greater than 0 the it will break from the loop as count will be increased only when it fount a word
          break
      }
      n--
  }
return count
}
console.log(lastWord(s))
}

// Find word containing Character 
{
let words = ["aaa","asd","asddsd","abba","sdxc"]
function findWord(words,x){
    let newArr = []
    for(let i = 0 ; i< words.length ; i++){
        if(words[i].includes(x)){ // include method tells whether that variable is present in that string or not 
            newArr.push(i) // if the variable is present in the string it pushes it to the new string 
        }
    }
 return newArr  
}
console.log(findWord(words,"s"))
}

//find number of jewels present in tthe stones
{
let jewel = "aA"
let stones = "aAAbbbbaBAB"
let num = 0
function jsort(j,s){
    for(let i=0 ; i< j.length;i++){
        for(let k = 0;k<s.length;k++){
            if(j[i] === s[k]){
                num++
            }
        }
    }
    return num
}
console.log(jsort(jewel,stones))
}

// same implementation of above using SET()
{
let jewel = "aA"
let stones = "aAAbbbbaBAB"
let jSet = new Set()  // creating the set 
function jSort(jewel,stones){ //iterates over all the jewels to store it inside set as all jewels are unique and duplicates can be ignored 
for(let i =0; i< jewel.length;i++){ //passing all the jewls to set in set all the duplicate values are ignored so every char will be present ones 
    jSet.add(jewel[i]) 
}
let count = 0
for(let j =0; j< stones.length;j++){ //iterates over all stones to find out number of jewels present in it
    if(jSet.has(stones[j])){  //checks if the jSet matches the values that of stones if it match then count is increased by one else it is a stone and can be ignored
        count++
    }
}
return count  //return the count of array in the stones 
}
console.log(jSort(jewel,stones))
}

//fine the max number of vowels repeated and consonant repeted and return back the count 
{
    let letter = "successes"
let countV = 0
let countC = 0 
let letMap = {}  // using the hashmap method to make it simple always use map while in similar condition when we need to find how many time a charactedr is repeating in the function 
function vowCon(letter){
    for(i=0;i<letter.length ; i++){
        if(!letMap[letter[i]]){  // if the char is present in the Hashmap increase the count of that char by 1 
            letMap[letter[i]] = 1
        }
        else{ 
             ++letMap[letter[i]]  // if the char is not present in the hashmap add that char to the list and initialize it a count 1 
        }
    }
    const vowels = ["a","e","i","o","u"]  // creating a new array of vowels to compare vowels present in the string
    for(let i=0;i<letter.length ; i++){
        if(vowels.includes(letter[i])){  // here we are checking whether the vowels are present in the main string 
          countV =   Math.max(countV,letMap[letter[i]]) //if the vowels is present in the array than check the count of that char in the hash map and if the count is more than the countV then assign that value to countV else can be ignored 
        }
        else{
         countC =   Math.max(countC,letMap[letter[i]]) //if the vowels are not present in the array than check the count of that char in the hash map and if the count is more than the countC then assign that value to countC else can be ignored 
        }
    }
return countV+countC // return the count of vowels and consonant
}
console.log(vowCon(letter))
}

//Split a string in balanced strings 
{
let str = "RLRRLLRRLLRL"
function balStr(s){
    let rcount = 0
    let lcount = 0
    let strcount = 0
    for(let i = 0; i < s.length ; i++){
        // if(s[i] === "R"){
        //     ++rcount
        // }else if(s[i] === "L"){
        //     ++lcount
        // }
        s[i] === 'R'? ++rcount : ++lcount // if the value is equal to r increment rcount else lcount
        
        if(rcount === lcount && rcount > 0){ //if both values are equal then increase str count whihc shows there are same number of L and R 
            ++strcount
            rcount = 0
            lcount = 0
        }
        
    }
return strcount 
}
console.log(balStr(str))
}