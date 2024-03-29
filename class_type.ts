class Person1 {
    name :string;
    constructor(a :string) {
        this.name = a;
    }

    함수(a) {
        console.log('안녕' + a);
    }
}

let 사람1 = new Person1('kim');
let 사람2 = new Person1('park');

사람1.함수('안녕');
console.log(사람1, 사람2);

class Car {
    model : string;
    price : number;
    constructor(model : string, price : number) {
        this.model = model;
        this.price = price;
    }
    tax() :number {
        return this.price / 10;
    }
}

let sonata = new Car('소나타', 3000);
console.log(sonata);
console.log(sonata.tax());

class Word {
    num : number[];
    str : string[];

    constructor(...param : (number | string)[]) {
        let 숫자들 : number[] = [];
        let 문자들 : string[] = [];

        param.forEach((i) => {
            if (typeof i === "string") {
                문자들.push(i);
            } else {
                숫자들.push(i);
            }
        });

        this.num = 숫자들;
        this.str = 문자들;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);