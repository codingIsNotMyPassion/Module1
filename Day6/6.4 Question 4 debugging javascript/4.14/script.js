aa = (data) => {
    var a = data;
    var l = "";
    for (i = 0; i < a.length; i++) {
        var s = a[i + 1]
        var b = a[i]
        l += s
        l += b
        i = i + 1
    }
    if ((a.length % 2) === 0) {
        console.log(l);
    } else {
        l += a[a.length - 1] 
    }
}
aa("1234");