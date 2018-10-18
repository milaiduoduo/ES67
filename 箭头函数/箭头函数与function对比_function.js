function Timer() {
    this.seconds = 0;
    setInterval(function () {
        this.seconds++;
        console.log('runing..., this.seconds:', this.seconds, 'this:', this);
    }, 1000);
}
let timer_old = new Timer();

// 上面打印结果为:
// runing..., this.seconds: NaN this: Window


console.log("function way------------------------------");
setTimeout(() => console.log(timer_old.seconds), 3100);

//上面打印结果为：
//timer.seconds:0