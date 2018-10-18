function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log('runing..., this.seconds:', this.seconds, 'this:', this);
    }, 1000);

}

// 上面打印结果为:
// runing..., this.seconds: 2 this: Timer {seconds: 2}


let timer = new Timer();
console.log("arrow=> way------------------------------");
setTimeout(() => {
    console.log("timer.seconds:", timer.seconds);
}, 3100);

//上面打印结果为：
//timer.seconds:3