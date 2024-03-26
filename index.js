function 함수(x) {
    return x * 2;
}
function 함수1(x) {
    1 + 1;
}
function hello(name) {
    if (name) {
        return "안녕하세요" + name;
    }
    else {
        return "이름이 없습니다";
    }
}
console.log(hello("홍길동"));
console.log(hello());
function count(some) {
    if (typeof (some) === "string") {
        return some.length;
    }
    else {
        var num = some.toString();
        return num.length;
    }
}
console.log(count(234));
console.log(count('dfsdf'));
function canMarry(money, isHome, score) {
    var count = 0;
    count += (money / 10000);
    count = isHome ? count += 500 : count;
    count = score === "상" ? count += 100 : count;
    return count >= 600 ? "결혼가능" : null;
}
