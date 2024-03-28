function 내함수(x :number|string) {
    let array :number[] = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    // array[0] = x as number;
}   

내함수(123);