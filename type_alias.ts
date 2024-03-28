type 함수타입 = (a :string) => number;
type Member = {
    name : string,
    age : number,
    plusOne: (a : number) => number,
    changeName: () => void
}

let test :함수타입 = function (a) {
    return 10;
};

let 회원정보 : Member = {
    name: 'kim',
    age: 30,
    plusOne(a) {
        return a + 1;
    },
    changeName : () => {
        console.log('안녕');
    }
};

회원정보.plusOne(1);
회원정보.changeName();

type CutType = (x : string) => string;

let cutZero : CutType = function(x) {
    return x.replace(/^0+/, "");
};

function removeDash(x : string) :number {
    return parseFloat(x.replace(/-/g, ""));
}

type CutType2 = (x : string) => number

function callback (a : string, func1 : CutType, func2 : CutType2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
};

callback('010-1111-2222', cutZero, removeDash);