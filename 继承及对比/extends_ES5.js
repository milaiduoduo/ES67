//此叫寄生组合式继承，ES5中最常用的继承方式！

function Animal(name) {
    this.name = name;
}
Animal.prototype.say = function (msg) {
    console.log(`${this.name},say:${msg}...`);
}


function Dog(name) {
    //借用构造函数继承实例的属性
    Animal.call(this, name);
}

//不能在此处添加原型方法，应该放到原型链继承之后，不然是失效的。
Dog.prototype.eat = function () {
    console.log(`${this.name} dog is eat.....`);
}

// 原型链继承超类的原型中的方法和属性
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.wavingTail = function () {
    console.log(`${this.name} dog is waving tail...`);
}

//调用
let dog1 = new Dog('es5_dog');
console.log(dog1.name);
console.log(dog1.wavingTail());
console.log(dog1.say('wang wang....'));
//eat()是失效的
console.log(dog1.eat());
