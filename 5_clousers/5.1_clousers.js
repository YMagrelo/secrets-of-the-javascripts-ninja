import {assert} from "../helpers.js";

let outerValue = 'samurai';
let later;

function outerFunction() {
  let innerValue = 'ninja';
  function innerFunction() {
    assert(outerValue === 'samurai', 'samurai, I can see the samurai');
    assert(innerValue === 'ninja', 'ninja, I can see the ninja')
  }

  later = innerFunction;
}

outerFunction();
later();
