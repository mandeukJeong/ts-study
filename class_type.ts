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