let 회원 :(number | string) = 'kim';
let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{ a : (string | number) } = { a : 123 };

// let 이름 :any;
// 이름 = 123;
// 이름 = [];

let 이름 :unknown;
// 이름 - 1;
// 이름 = 123;
// 이름 = {};

// let 변수1 :string = 이름;

let 나이 :string | number;
// 나이 + 1;