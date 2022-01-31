let n = 123;
console.log(add(n));
function add(n){
var sum = 0;
n = n.toString().split('');
var digits = n.map(Number)
for(var i=0;i<digits.length;i++){
 sum+=digits[i]
 }
 return sum;
}