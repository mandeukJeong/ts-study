function 기계(q, w) {
  this.q = q;
  this.w = w;
}

기계.prototype.name = 'kim';

var nunu = new 기계('consume', 'snowball');
var garen = new 기계('strike', 'courage');

console.log(nunu, garen);
console.log(nunu.name);

class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}

var array = [4, 2, 1];
var array1 = new Array(4, 2, 1);
array1.sort();
array.sort();
console.log(array, array1);

// var nunu = {
//   q: 'consume',
//   w: 'snowball',
// };

// var garen = {
//   q: 'strike',
//   w: 'courage',
// };
