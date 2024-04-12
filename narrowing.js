function narrowing(a) {
    if (a && typeof a === 'string') {
        // null & undefined 타입 체크
    }
}
function animalFunction(animal) {
    if ('swim' in animal) {
        console.log(animal.swim);
    }
}
var date = new Date();
if (date instanceof Date) {
    // instanceof로 object narrowing
}
function ride(x) {
    if (x.wheel === '4개') {
        console.log('x는 CarType입니다.');
    }
}
