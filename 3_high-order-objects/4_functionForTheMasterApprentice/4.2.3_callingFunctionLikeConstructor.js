import {assert} from "../../helpers.js";

// function Ninja() {
//     this.skulk = function () {
//       return this;
//     }
//
//   return 1;
// }

// assert(Ninja() === 1, 'Return value honored when not called as a constructor')

// let ninja = new Ninja();

// assert(typeof ninja === 'object');
// assert(typeof ninja.skulk() === 'object');
// console.log(ninja.skulk());


let puppet = {
    rules: false
}

function Emperor() {
  this.rules = true;
  return this
}

let emperor = new Emperor();

assert(emperor === puppet, 'the emperor the merely a puppet');
assert(emperor.rules === false, 'the puppet does not know how to rule')


function Ninja() {
    this.skulk = function () {
        return this;
    }
}

var whatever = Ninja();




