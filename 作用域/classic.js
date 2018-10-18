var mm = '1';

function fn1() {
    console.log(mm);
}

function fn2() {
    var mm = 10;
    console.log(mm);
    console.log(this.mm);
}

function fn3() {
    let mm = 100;
    console.log(mm);
}

fn1(); //1
fn2(); //10,1
fn3(); //100

// setTimeout第一个this指向是上下文，是setTimeout调用环境下的this;第二个this是回调函数中的this，指向window.
setTimeout(fn2, 1000); //10,1