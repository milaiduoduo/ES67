function Animal(name) {
    this.name = name;
}
Animal.prototype.type = "All";
Animal.prototype.bark = function () {
    console.log('in barking....this: ', this, );
}

// 依据：setTimeout调用环境下的this称之为第一个this，把延迟执行函数中的this称之为第二个this。第一个this的指向是需要根据上下文来确定的，默认为window；第二个this就是指向window。

//写出恰当的Animal.prototype.eat方法，让其能正常在1秒钟后，正常调用this.bark()输出;

//--no problem-----
// Animal.prototype.eat = function () {
//     console.log('in eating...this: ', this);
//     this.bark();
// }

//-- problem------
//--this:window---------------------------------------------------
// Animal.prototype.eat = function () {
//     setTimeout(this.bark, 1000);  //回调函数内部的this: window
// }
//-- problem function wrapper-----this:window,  this: Uncaught TypeError: this.bark is not a function
// Animal.prototype.eat = function () {
//     setTimeout(function () {
//         this.bark()   //这里的this: window
//     }, 1000);
// }


//-- solution------------------------------
// 1. arrow function
// Animal.prototype.eat = function () {
//     setTimeout(() => {
//         this.bark()  //这里的this: 实例对象
//     }, 1000);
// }

// 2. call,apply,bind 类似
// Animal.prototype.eat = function () {
//     setTimeout((function () {
//         this.bark(); //这里的this: 实例对象
//     }).call(this), 1000);
// };
// Animal.prototype.eat = function () {
//     setTimeout(this.bark.call(this), 1000); //这里的第一个this: 实例对象，第二个this，也是实例对象
// }

// 3. 用变量暂存 this.
// Animal.prototype.eat = function () {
//     let that = this;
//     setTimeout(function () {
//         that.bark();
//     }, 1000);
// }

let a1 = new Animal();
a1.eat();