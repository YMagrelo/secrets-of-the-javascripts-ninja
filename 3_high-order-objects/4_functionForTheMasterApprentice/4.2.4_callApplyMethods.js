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
