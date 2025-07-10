//Linear sort
{
    function linSort(arr,num){
    for(let i = 0;i < arr.length;i++){
        if(num === arr[i]){
            return i
        }
    }
}
let arr = [2,4,3,1,5,0]
console.log(linSort(arr,1))
}

