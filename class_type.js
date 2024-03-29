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
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var sonata = new Car('소나타', 3000);
console.log(sonata);
console.log(sonata.tax());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
