const arr=["krishna", "wasaw", "cawrwac"]
let palindrome = () => {
    for(let i=0;i<arr.length;i++){
        let string = arr[i]
        let rev = string.split("").reverse().join("")
        if(string==rev){
            console.log(`${string} is a palindrome in array`)
        }
    }
}
palindrome()