function 기계(q, w) {
  this.q = q;
  this.w = w;
}

var nunu = new 기계('consume', 'snowball');
var garen = new 기계('strike', 'courage');

console.log(nunu, garen);

class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}

// var nunu = {
//   q: 'consume',
//   w: 'snowball',
// };

// var garen = {
//   q: 'strike',
//   w: 'courage',
// };
