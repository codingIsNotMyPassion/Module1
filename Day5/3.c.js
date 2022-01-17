const arr = [1, 2, 3, 4, 5]
var sumArr = (array) => {
    let sum=0
    for(i=0;i<array.length;i++){
        sum=sum+arr[i]
    }
    return console.log(`array sum is ${sum}`)
}
sumArr(arr)