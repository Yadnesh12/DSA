let arr = [0,2,4,6,7,9,10]
function binSearch(arr,num){
    let initial = 0
    let end = arr.length-1
    let m 
while( end >= initial){
    m = Math.floor(initial+end)/2
 if(arr[m] > num){
    end = m-1
 }
 else if(arr[m] < num){
    initial = m+1
 }
 else { return m }
}
return m
}
console.log(binSearch(arr,10))
