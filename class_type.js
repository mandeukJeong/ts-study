var Person1 = /** @class */ (function () {
    function Person1(a) {
        this.name = a;
    }
    Person1.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person1;
}());
var 사람1 = new Person1('kim');
var 사람2 = new Person1('park');
사람1.함수('안녕');
console.log(사람1, 사람2);
