// Return all the palindromes in an array
// Anonymous function
const arr=["krishna", "wasaw", "cawrwac"]
let palindrome = function (){
    for(let i=0;i<arr.length;i++){
        let str = arr[i]
        let rev = str.split("").reverse().join("")
        if(str==rev){
            console.log(`${str} is a palindrome in array`)
        }
    }
}
palindrome()

// IIFE
(function(){
    const arr=["krishna", "wasaw", "cawrwac"]
    for(let i=0;i<arr.length;i++){
        let str = arr[i]
        let rev = str.split("").reverse().join("")
        if(str==rev){
            console.log(`${str} is a palindrome in array`)
        }
    }
})()