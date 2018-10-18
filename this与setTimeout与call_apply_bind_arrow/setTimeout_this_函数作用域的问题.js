var test = "in the window";

function f() {
    var test = 'in the f!';

    //this 是 window，但其中的变量要看【作用域】。
    setTimeout(function () {
        console.log('this is :', this, ' inner ' + test); //inner in the f!
        console.log('this is :', this, ' inner ' + this.test); //inner in the window
    }, 0);

    //执行代码(字符串形式的代码)默认在window【全局作用域】下，test也指向全局的test.
    setTimeout('console.log("inner " + test)', 0);

}

f();

//--既有全局变量，又有局部变量value1--------------------------------------------------
var value = 33;

function Foo() {
    var value = 42;
    setTimeout(function () {
        console.log(value); //局部作用域变量
        console.log(this.value) //全局变量
    }, 500); // 先后输出 42 然后输出33  这里的this是第二个this
}
var f = new Foo();

//--只有全局变量，没有局部变量value1-----------------------------------------------
var value1 = 33;

function Foo1() {
    function ff1() {
        console.log(value1); // 输出33
        console.log(this.value1); // 输出33  this指向window
    }
    setTimeout(ff1, 500); // 先后输出 33  33
}
Foo1();