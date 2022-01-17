// Sum of all numbers in an array
const arr=[1, 2, 3, 4, 5]
let sum=0
let arrSum = function(){
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return console.log(sum)
}
arrSum()

// IIFE
(function(){
        let sum=0
        for(i=0;i<arr.length;i++){
            sum=sum+arr[i]
        }
        return console.log(sum)
    })(arr=[1, 2, 3, 4, 5])