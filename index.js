function cleaning(array) {
    return array.map(function (item) {
        if (typeof item === "string") {
            return Number(item);
        }
        else {
            return item;
        }
    });
}
console.log(cleaning(['1', 2, '3']));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function checkSubject(teacher) {
    if (typeof teacher.subject === 'string') {
        return teacher.subject;
    }
    else {
        return teacher.subject[teacher.subject.length - 1];
    }
}
console.log(checkSubject(철수쌤));
console.log(checkSubject(영희쌤));
console.log(checkSubject(민수쌤));
