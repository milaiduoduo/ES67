let myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
    console.log('result: ', arguments.length > 0 ? this[sProperty] : this);
};

// myArray.myMethod(); // "zero,one,two"
// myArray.myMethod(1); //  "one"

// problem--------------------------
setTimeout(myArray.myMethod, 1000); // "[object Window]" 
setTimeout(myArray.myMethod, 1500, '1'); // "undefined" 

// solution----------------------------

// 1.wrapper function------------------
// setTimeout(function () {
//     myArray.myMethod()
// }, 3000); // prints "zero,one,two" after 2 seconds
// setTimeout(function () {
//     myArray.myMethod('1')
// }, 3500); // prints "one" after 2.5 seconds

// 2.arrow function---------------------------
// setTimeout(() => {
//     myArray.myMethod()
// });
// setTimeout(() => {
//     myArray.myMethod(1);
// })

// 3. call,apply,bind------------------------------
// setTimeout(myArray.myMethod.call(myArray), 2000); 
// setTimeout(myArray.myMethod.call(myArray), 2500, '1');