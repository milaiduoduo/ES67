function Animal(name) {
    this.name = name;
}
Animal.prototype.type = "All";
Animal.prototype.bark = function () {
    console.log('this: ', this, 'barking....');
}

let a1 = new Animal('dog');

//--no problem--
// a1.bark();

//--problem
// setTimeout(a1.bark, 1000);



//--solution--------------------------
// 1. function wrapper-----
setTimeout(function () {
    a1.bark();
}, 1000);

// 2.arrow function-------
setTimeout(() => {
    a1.bark();
}, 1000);

// 3. call, apply, bind-------