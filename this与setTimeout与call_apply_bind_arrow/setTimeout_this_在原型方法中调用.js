function Animal(name) {
    this.name = name;
}
Animal.prototype.type = "All";
Animal.prototype.bark = function () {
    console.log('in barking....this: ', this, );
}

//--no problem-----
// Animal.prototype.eat = function () {
//     console.log('in eating...this: ', this);
//     this.bark();
// }

//-- problem------this:window--------------------------------------------------------------------------
// Animal.prototype.eat = function () {
//     console.log('in eating...this: ', this);
//     setTimeout(this.bark, 1000);
// }
//-- problem function wrapper-----this:window,  this: Uncaught TypeError: this.bark is not a function
// Animal.prototype.eat = function () {
//     console.log('in eating...this: ', this);
//     setTimeout(function () {
//         console.log("this in setTimeout:", this);
//         this.bark()
//     }, 1000);
// }


//-- solution------------------------------
// 1. arrow function
// Animal.prototype.eat = function () {
//     console.log('in eating...this: ', this);
//     setTimeout(() => {
//         console.log("this in setTimeout:", this);
//         this.bark()
//     }, 1000);
// }
// 2. call,apply,bind 类似
// Animal.prototype.eat = function () {
//     console.log('in eating...this: ', this);
//     setTimeout((function () {
//         console.log("this in setTimeout:", this);
//         this.bark();
//     }).call(this), 1000);
// };
// Animal.prototype.eat = function () {
//     console.log('in eating...this: ', this);
//     setTimeout(this.bark.call(this), 1000);
// }

// 3. 用变量暂存 this.
Animal.prototype.eat = function () {
    console.log('in eating...this: ', this);
    let that = this;
    setTimeout(function () {
        that.bark();
    }, 1000);
}





let a1 = new Animal();
a1.eat();