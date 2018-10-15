//Animal就是一个构造函数
function Animal() {
    this.name = name;
}

//原型上的方法
Animal.prototype.say = function () {
    console.log(`${this.name},say:${msg}...`);
}

//原型属性constructor指向函数本身
console.log(Animal.prototype.constructor == Animal) //true