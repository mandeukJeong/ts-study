// type Animal = string | number | undefined;
// let 동물 :Animal = 123;

type Animal = { name : string, age : number };
let 동물 :Animal = { name: 'kim', age: 20 };

type Girlfriend = {
    readonly name? : string
};

const 여친 :Girlfriend = {
    name: '엠버'
};

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number };
type PositionY = { y : number };
type NewType = PositionX & PositionY;

let position :NewType = { x: 10, y: 20 };