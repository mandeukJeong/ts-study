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

function destructuring({student, age}) {
  console.log(student, age);
}

destructuring(object);