function Animal(name) {
    this.name = name;
}
Animal.prototype.type = "All";

let a1 = new Animal();
// a1.prototype.color = "yellow";

function Dog(name) {
    Animal.call(this, name);
    this.color = "yellow";
}


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.subType = "Dog";

let dog1 = new Dog('big Huang');
dog1.bark = function () {
    console.log('wang wang wang....');
}


console.log(dog1.name);


// super instance----------------------------
console.log('super instance------为true的表示是实例自己的属性或方法，或者实例继承的属性和方法---------------');
console.log(a1.hasOwnProperty('name')); //true --来至实例
console.log(a1.hasOwnProperty('type')); //false --来至原型
console.log(a1.hasOwnProperty('color')); //false --来至原型

// instance----------------------------
console.log('instance-----------为true的表示是实例自己的属性或方法，或者实例继承的属性和方法-----------------');
console.log(dog1.hasOwnProperty('name')); //true --来至实例（但来至于超类的实例）
console.log(dog1.hasOwnProperty('color')); //true --来至实例
console.log(dog1.hasOwnProperty('bark')); //true --来至实例

console.log(dog1.hasOwnProperty('type')); //false --来至原型
console.log(dog1.hasOwnProperty('subType')); //false --来至原型