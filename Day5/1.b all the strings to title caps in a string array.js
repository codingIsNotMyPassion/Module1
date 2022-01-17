// Anonymous function
const arr = ["ram", "shyam", "latha"]
var newArr = function(){
     for (let string of arr){
    console.log(string.toUpperCase())}       
}
newArr()

// IIFE
(function(){
   const arr = ["ram", "shyam", "latha"]
   for (let item of arr) { 
     console.log(item.toUpperCase())
   }  
 })();