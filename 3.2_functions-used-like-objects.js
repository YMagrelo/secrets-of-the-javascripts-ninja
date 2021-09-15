import { assert } from "./helpers.js";

// let ninja = {};
// ninja.name = 'hitsuke';
//
// let wieldSword = function () {}
//
// wieldSword.swordType = 'katana';



// 3.2.1 saving unique functions in collections

// let store = {
//     nextId: 1,
//     cache: {},
//     add: function (fn) {
//         if (!fn.id) {
//            fn.id = this.nextId++;
//            this.cache[fn.id] = fn;
//            return true;
//         }
//     }
// };
//
// function ninja() {}
//
// assert(store.add(ninja), 'function was safely added');
// assert(!store.add(ninja), 'but it was only added once');


// 3.2.2  memoization of functions

// computing of prime numbers algorithm with saving them to cache of function

function isPrime(value) {
  if (!isPrime.answers) {
      isPrime.answers = {}     //created cache
  }

  if (isPrime.answers[value] !== undefined) {
      return isPrime.answers[value];
  }

  let prime = value !== 0 && value !== 1; // 0 and 1 is not prime numbers

    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            break
        }
    }

    return isPrime.answers[value] = prime; // saving of computed value
}

assert(isPrime(5), '5 is prime');
assert(isPrime.answers[5], 'The answer was cached!');




