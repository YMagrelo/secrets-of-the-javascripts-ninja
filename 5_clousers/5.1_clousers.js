// import {assert} from "../helpers.js";
//
// let outerValue = 'samurai';
// let later;
//
// function outerFunction() {
//   let innerValue = 'ninja';
//   function innerFunction() {
//     assert(outerValue === 'samurai', 'samurai, I can see the samurai');
//     assert(innerValue === 'ninja', 'ninja, I can see the ninja')
//   }
//
//   later = innerFunction;
// }
//
// outerFunction();
// later();


function matrix(array) {
  return console.log(array.map((innerArr) => console.log(innerArr)));
}

let arr = [
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
];


matrix(arr);
