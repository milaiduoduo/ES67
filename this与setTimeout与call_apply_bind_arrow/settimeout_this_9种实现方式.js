function LateBloomer() {
    this.petalCount = 60;
}

//有问题，此时的this是window
// 1.
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout(function () {
//         this.declare();
//         console.log("this is: ", this);
//     }, 1000);
// };

// 2.
LateBloomer.prototype.bloom = function () {
    window.setTimeout(this.declare, 1000);
};

//----以下6种方法this正确指向---------------------------------------

// 1. 用that变量暂存this
// LateBloomer.prototype.bloom = function () {
//     let that = this;
//     window.setTimeout(function () {
//         console.log("this is: ", that);
//         that.declare();
//     }, 1000);
// };

//2. call
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout(this.declare.call(this), 1000);
// };
// 更好理解
// LateBloomer.prototype.bloom = function () {
//     let that = this;
//     window.setTimeout(this.declare.call(that), 1000);
// };

// 3. apply
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout(this.declare.apply(this), 1000);
// };

// 4. bind
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout(this.declare.bind(this), 1000);
// };

// 5. 用function包裹，在用bind
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout((function () {
//         console.log("this is: ", this);
//         this.declare();
//     }).bind(this), 1000);
// };

// 6. 用function包裹，在用call
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout((function () {
//         console.log("this is: ", this);
//         this.declare();
//     }).call(this), 1000);
// };

// 7. 用function包裹，在用apply
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout((function () {
//         console.log("this is: ", this);
//         this.declare();
//     }).apply(this), 1000);
// };

// 8. 箭头函数
// LateBloomer.prototype.bloom = function () {
//     window.setTimeout(() => {
//         console.log("this is: ", this);
//         this.declare();
//     }, 1000);
// };

//9. 利用setTimout()的第三个参数传this，但LateBloomer.prototype.declare = function (){}，需要增加参数function (that)


LateBloomer.prototype.declare = function () {
    console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();