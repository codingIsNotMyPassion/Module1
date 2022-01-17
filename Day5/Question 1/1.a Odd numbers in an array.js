// with Anonymous function
const arr=[1, 2, 3, 4, 5,6,7,8,9,10]

var oddNum = function() {
    let odd=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd.push(arr[i])
        }
    }
    return console.log(odd)
}

// with IIFE
(function oddNum() {
    const arr = [1, 2, 3, 4, 5,6,7,8,9,10]
    let odd=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd.push(arr[i])
        }
    }
    return console.log(odd)
})()