const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter((num) => {
    if (num==1) {
        return false
    } else{
        for (let i = 2; i < num; i++) {
            if (num % i===0) {
                return false;
            }
        }
        return num
    }
    
});
console.log(myPrime);