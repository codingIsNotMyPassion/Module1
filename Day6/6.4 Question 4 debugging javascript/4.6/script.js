const num = [10, 20, 30, 40,50,60,70,80,90,100] 
var sum = (a, b) =>
 a + b
sum = num.reduce(sum,0)
console.log(sum);