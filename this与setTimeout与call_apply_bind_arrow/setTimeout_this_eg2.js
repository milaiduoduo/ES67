let obj = {
    a: 1,
    name: 'alice',
    init: function () {
        console.log('this in init: ', this);
    }
}
obj.getName = function () {
    console.log('this in getName: ', this);
}


console.log(obj.hasOwnProperty("name")); //true
console.log(obj.hasOwnProperty("getName")); //true



// no problem-------------------------
// obj.init();
// obj.getName();
//problem--------------------
// setTimeout(obj.init, 1000);
// setTimeout(obj.getName, 1000);

// solution-----------------------

// 1. function wrapper
// a.
// setTimeout(function () {
//     obj.init()
// }, 1500);
// b.
// let fn1 = function () {
//     obj.init();
// }
// setTimeout(fn1, 1000);

// setTimeout(function () {
//     obj.getName()
// }, 1500);



// 2. arrow function
// setTimeout(() => {
//     obj.init()
// }, 1000);

// setTimeout(() => {
//     obj.getName()
// }, 1000);

// 3. call,apply,bind
// setTimeout(obj.init.call(obj), 1000);
// setTimeout(obj.init.apply(obj), 1000);
// setTimeout(obj.init.bind(obj)(), 1000);

// setTimeout(obj.getName.call(obj), 1000);
// setTimeout(obj.getName.apply(obj), 1000);
setTimeout(obj.getName.bind(obj)(), 1000);