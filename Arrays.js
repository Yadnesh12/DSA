//Remove duplicates from an array 

{
    let arr1 = [1,3,4,5,5,6,7,8,8]
function removeDupes(arr){
    for(let i =0 ; i<arr.length ; i++){
        if(arr[i]===arr[i+1]){
            arr.splice(i+1,1)
        }
    }
    return arr
}
console.log(removeDupes(arr1))
}

//