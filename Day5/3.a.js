const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var oddNum = (arr)=>{
    let odd=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd.push(arr[i])
        }
    }
    return console.log(odd)
}
oddNum(array)