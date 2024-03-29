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