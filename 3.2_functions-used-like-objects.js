// let ninja = {};
// ninja.name = 'hitsuke';
//
// let wieldSword = function () {}
//
// wieldSword.swordType = 'katana';

// saving unique functions in collections

const assert = (value, desc) => {
    const isTrully = value ? true : false;
    const result = `${isTrully}: ==> ${desc}`
    console.log(result)
    return result;
}

let store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
        if (!fn.id) {
           fn.id = this.nextId++;
           this.cache[fn.id] = fn;
           return true;
        }
    }
};

function ninja() {}

assert(store.add(ninja), 'function was safely added');
assert(!store.add(ninja), 'but it was only added once');





