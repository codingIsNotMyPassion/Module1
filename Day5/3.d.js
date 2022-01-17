const arr=[1, 2, 3, 4, 5, 6, 7]
console.log(`Given array is ${arr}`)
for (let i=0; i<arr.length; i++){
    let primeNum  = (number) => {
    if (number === 1)
    {
     return console.log("1 is neither prime nor composite")
    }
    else if(number === 2)
    {
      return console.log( "2 is prime number")
    }else{
      for (let j = 2; j < number; j++)
      {
        if(number % j === 0)
        {
         return console.log(`${number} is not prime number`);
        }
      }
      return console.log(`${number} is prime number`);
    }
}
primeNum(arr[i]);
}