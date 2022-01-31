(function () {
    var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
    var shifts=3
    arr = [1, 2, 3, 4, 5, 6, 7]
    for(let i=0;i<shifts;i++){
        arr.unshift(arr.pop())
    }
    console.log(arr)
})();