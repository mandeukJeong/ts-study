var test = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    return x.replace(/^0+/, "");
};
function removeDash(x) {
    return parseFloat(x.replace(/-/g, ""));
}
function callback(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
;
callback('010-1111-2222', cutZero, removeDash);
