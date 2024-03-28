type 함수타입 = (a :string) => number;
type Member = {
    name : string,
    plusOne: (a : number) => number;
}

let test :함수타입 = function (a) {
    return 10;
};

let 회원정보 : Member = {
    name: 'kim',
    plusOne(a) {
        return a + 1;
    }
};