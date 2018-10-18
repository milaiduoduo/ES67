let myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
    console.log('result: ', arguments.length > 0 ? this[sProperty] : this);
};

// myArray.myMethod(); // prints "zero,one,two"
// myArray.myMethod(1); // prints "one"

// problem--------------------------
// console.log("problem-----------------------------");
// setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
// setTimeout(myArray.myMethod, 1500, '1'); // prints "undefined" after 1.5 seconds

// solution----------------------------
// console.log("solution------------------------------------");
// 1. call,apply,bind------------------------------
// console.log("1. call-----------------")
// setTimeout(myArray.myMethod.call(myArray), 2000); 
// setTimeout(myArray.myMethod.call(myArray), 2500, '1');

// 2.wrapper function------------------
// console.log("2.wrapper function------------------")
// setTimeout(function () {
//     myArray.myMethod()
// }, 3000); // prints "zero,one,two" after 2 seconds
// setTimeout(function () {
//     myArray.myMethod('1')
// }, 3500); // prints "one" after 2.5 seconds

// 3.arrow function---------------------------
setTimeout(() => {
    myArray.myMethod()
});
setTimeout(() => {
    myArray.myMethod(1);
})