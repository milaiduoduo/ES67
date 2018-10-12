class Animal {
    constructor(name) {
        this.name = name;
    }
    say(msg) {
        console.log(`${this.name},say:${msg}...`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name;
    }
    eat() {
        console.log(`${this.name} dog is eat.....`);
    }
    wavingTail() {
        console.log(`${this.name} dog is waving tail...`);
    }
}

let dog1 = new Dog('es6_dog');
console.log(dog1.name);
console.log(dog1.wavingTail());
console.log(dog1.say('wang wang....'));
//eat()是失效的
console.log(dog1.eat());