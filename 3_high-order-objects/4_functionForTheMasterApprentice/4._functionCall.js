// function skulk(name) {}
// function Ninja(name) {}
//
// // like call of function
// skulk('Hattori');
// (function (who) {return who}) ('Hattori');
//
// let ninja = {
//     skulk: function () {}
// }
//
// // like call method of object
// ninja.skulk('Hattori');
//
// ninja = new Ninja('Hattori'); // constructor call
//
// skulk.call(ninja, 'Hattori'); // through call method
//
// skulk.apply(ninja, ['Hattori'])


// function ninja() {
//   return console.log(this);
// }
//
// function samurai() {
//   "use strict";
//     return console.log('use strict', this)
// }
//
// ninja();
// samurai();

function whatsMyContext() {
    return this;
}

let getMyThis = whatsMyContext;

let ninja1 = {
    getMyThis: getMyThis
}

console.log(ninja1.getMyThis());
