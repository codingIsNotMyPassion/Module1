var as = [12, 34, 5, 6, 2, 56, 6, 2, 1, 5];
var s = as.reduce(function (a, c) {
    if (c%2!=0) {
        return a + c;
    }else if(a%2!=0){
        return a;
    }else{
        return 0;
    }
});
console.log(s)
