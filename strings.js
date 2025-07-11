//calculate the size of last char in an string \
// two loops method
{let s = "  fly  me to the  moon  "
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
console.log(lastWord(s))}

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