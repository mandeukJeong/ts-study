type Animal1 = { name : string };
type Cat = { age : number } & Animal1;

interface Student {
    name : string,
};

interface Student {
    score : number
};

interface Teacher extends Student {
    age : number
};

let 학생 : Student = { name: 'kim', score: 20 };
let 선생 : Teacher = { name: 'kim', age: 20, score: 30 };

interface Product {
    brand :string,
    serialNumber :number,
    model :string[]
}

let 상품 :Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };

interface Shop {
    product :string,
    price :number
}

interface Cart extends Shop {
    card :boolean
}

let 장바구니 :Cart[] = [ { product : '청소기', price : 7000, card : false }, { product : '삼다수', price : 800, card : true} ];

interface Calculator {
    plus: (num1: number, num2: number) => number,
    minus: (num1: number, num2: number) => number
}

let calculator :Calculator = {
    plus(num1, num2) {
        return num1 + num2;
    },
    minus(num1, num2) {
        return num1 - num2;
    }
};