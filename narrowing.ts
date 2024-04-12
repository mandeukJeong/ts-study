function narrowing(a :string | undefined) {
    if (a && typeof a === 'string') {
        // null & undefined 타입 체크
    } 
}

type Fish = { swim :string };
type Bird = { fly :string };

function animalFunction(animal :Fish | Bird) {
    if ('swim' in animal) {
        console.log(animal.swim);
    }
}

let date = new Date();
if (date instanceof Date) {
    // instanceof로 object narrowing
}

type CarType = {
    wheel :'4개',
    color :string
};

type BikeType = {
    wheel :'2개',
    color :string
};

function ride(x :CarType | BikeType) {
    if (x.wheel === '4개') {
        console.log('x는 CarType입니다.');
    }
}


