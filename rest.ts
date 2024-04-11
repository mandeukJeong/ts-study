// rest 
function rest(...a :number[]) {
  console.log(a);
}

rest(1, 5, 3, 5, 6, 6);

// spread
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// destructuring
let [a1, a2] = ['안녕', 100];
console.log(a1, a2);

let { student, age } = { student: true, age: 20};
let object = { student: true, age: 20};
console.log(student, age);

function destructuring({student, age} :{student: boolean, age: number}) {
  console.log(student, age);
}

destructuring(object);

function findMaxNumber(...num : number[]) {
    let max :number = 0;
    for (let i: number = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}

function parameter({ user, comment, admin } : {user : string, comment : number[], admin : boolean }) {
    console.log(user, comment, admin);
}

parameter({ user: 'kim', comment: [3, 5, 4], admin: false});

function parameter2([a, b, c] :(number | string | boolean)[]) {
    console.log(a, b, c);
}

parameter2([40, 'wine', false]);