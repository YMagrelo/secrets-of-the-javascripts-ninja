function skulk(name) {}
function Ninja(name) {}

// like call of function
skulk('Hattori');
(function (who) {return who}) ('Hattori');

let ninja = {
    skulk: function () {}
}

// like call method of object
ninja.skulk('Hattori');

ninja = new Ninja('Hattori'); // constructor call

skulk.call(ninja, 'Hattori'); // through call method

skulk.apply(ninja, ['Hattori'])
