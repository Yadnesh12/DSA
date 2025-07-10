//calculate the size of last char in an string \
// two loops method
{let s = "  fly  me to the  moon  "
function lastWord(s){
   let last = s.length-1
   let count = 0
    while(last>=0){
        if(s[last] === " "){
            last = last-1
        }
        else{
            break
        }
    }
    while(last>=0){
        if(s[last] !== " " ){
            count= count +1
            --last
        }
        else{
            break
        }
    }
    return count
}
console.log(lastWord(s))}

//Shortcut method for above solution 
{
    let s = "  fly  me to the  moon  "
function lastWord(s){
  s = s.trim()
  s = s.split(" ")
return s[s.length-1].length
}
console.log(lastWord(s))
}