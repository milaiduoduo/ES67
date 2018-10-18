var test = "in the window";

function f() {
    var test = 'in the f!';

    //this 是 window，但其中的变量要看作用域。
    setTimeout(function () {
        console.log('this is :', this, ' inner ' + test); //inner in the f!
        console.log('this is :', this, ' inner ' + this.test); //inner in the window
    }, 0);

    setTimeout('alert("inner " + test)', 0);

}

f();