// Anonymous function
let median = function (){
    const arr1=[24, 45, 54, 3, 65]
    const arr2=[65, 66, 78, 12, 98]
    sortArr=arr1.concat(arr2).sort((a, b) => a - b)
    console.log(`sorted array is ${sortArr}`)
    let len = Math.floor(sortArr.length/2)
    if((sortArr.length)%2!==0){
    (console.log(`median of sorted array is ${sortArr[len]}`))}
    else{
    (console.log(`median of sorted array is ${(sortArr[len-1]+sortArr[len])/2}`))
    }
}
median()

// IIFE
(function (){
    const arr1=[24, 45, 54, 3, 65]
    const arr2=[65, 66, 78, 12, 98]
    sortArr=arr1.concat(arr2).sort((a, b) => a - b)
    console.log(`sorted array is ${sortArr}`)
    let len = Math.floor(sortArr.length/2)
    if((sortArr.length)%2!==0){
    (console.log(`median of sorted array is ${sortArr[len]}`))}
    else{
    (console.log(`median of sorted array is ${(sortArr[len-1]+sortArr[len])/2}`))
    }
})()