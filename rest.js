var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest 
function rest() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
rest(1, 5, 3, 5, 6, 6);
// spread
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
// destructuring
var _a = ['안녕', 100], a1 = _a[0], a2 = _a[1];
console.log(a1, a2);
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
var object = { student: true, age: 20 };
console.log(student, age);
function destructuring(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
destructuring(object);
function findMaxNumber() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var max = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
function parameter(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
parameter({ user: 'kim', comment: [3, 5, 4], admin: false });
function parameter2(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
parameter2([40, 'wine', false]);
