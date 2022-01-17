// Rotate an array by k times
const arr = [1, 2, 3, 4, 5, 6, 7]
let rotatedArr = function(array, shifts){
    for(let i=0;i<shifts;i++){
        array.unshift(array.pop())
    console.log(`step ${i+1} is ${array}`)
    }
}
rotatedArr(arr, 3)

// IIFE
(function(){
    var shifts=3
    arr = [1, 2, 3, 4, 5, 6, 7]
    for(let i=0;i<shifts;i++){
        arr.unshift(arr.pop())
    console.log(`step ${i+1} is ${arr}`)
    }
})();