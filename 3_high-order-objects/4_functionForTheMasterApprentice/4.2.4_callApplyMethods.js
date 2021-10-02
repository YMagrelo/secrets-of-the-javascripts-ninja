import {assert} from "../../helpers.js";

function forEach(list, callback) {
  for(let i = 0; i < list.length; i++) {
      callback.call(list[i], i);
  }
}

var weapons = [
    {type: 'shuriken'},
    {type: 'katana'},
    {type: 'nunchucks'}
]

forEach(weapons, function (index) {
  assert(this === weapons[index], `Got the expected value of ${weapons[index].type}`)
})

function sum(...remainingNumbers) {
  var sum = 0;
  for (var i = 0; i < remainingNumbers.length; i++) {
      sum += remainingNumbers[i];
  }

  return sum;
}

assert(sum(1, 2, 3) === 6, 'sum of first three numbers is 6');


function getSamurai(samuray) {
    arguments[0] = "Ishida";
    return samuray;
}

function getNinja(ninja) {
    arguments[0] = 'Fuma';

    return ninja
}

console.log(getNinja('ninja sumono'));
