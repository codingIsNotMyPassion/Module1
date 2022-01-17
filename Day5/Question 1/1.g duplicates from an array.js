// Anonymous function
const arr=[0, 1, 1, 2, 3, 4, 4, 4]
let removeDuplicates = function(){
    let pureArr=[]
    arr.forEach((element) =>{
        if(!pureArr.includes(element)){
            pureArr.push(element)
        }
    });
    console.log(pureArr)
}
removeDuplicates(arr)

// IIFE
(function(){
    const arr=[0, 1, 1, 2, 3, 4, 4, 4]
    let pureArr=[]
    arr.forEach((element) =>{
        if(!pureArr.includes(element)){
            pureArr.push(element)
        }
    });
    console.log(pureArr)
})()