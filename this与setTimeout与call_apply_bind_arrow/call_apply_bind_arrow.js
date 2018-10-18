//如何调用getName()，显示出XiaoMing

let obj1 = {
    name: 'XiaoMing'
};
let obj2 = {
    name: 'John',
    getName: function () {
        console.log(this.name)
    }
}

// // 1.
// obj2.getName.call(obj1);
// // 2.
// obj2.getName.apply(obj1);
// //3. 
// obj2.getName.bind(obj1)();
// //4. 修改obj2的代码为：
let obj3 = {
    name: 'John',
    getName: () => {
        console.log(this);
        console.log(this.name)
    }
};
// console.log(obj3.getName.call(obj1));


let obj4 = {
    name: 'obj4',
    getName: () => {
        return function () {
            console.log(this);
            console.log(this.name)
        }
    }
}
// obj4.getName()();

var obj = {
    birth: 1990,
    getAge: () => {
        var b = this.birth; // 1990
        //var fn = () => this.birth; // this指向obj对象
        console.log('this:', this);
        //return fn();
    }
};
obj.getAge(); //