const body = document.querySelector("body");
const clock = document.createElement("div");
clock.className = "clock";
const inClock = document.createElement("div");
inClock.className = "inClock";
const hour = document.createElement("div");
hour.className = "hour";
const minute = document.createElement("div");
minute.className = "minute";
const second = document.createElement("div");
second.className = "second";
const center = document.createElement("div");
center.className = "center";
inClock.append(hour, minute, second, center);
clock.appendChild(inClock);
body.appendChild(clock);
for(let i = 0; i < 60; i++){
    let nums = document.createElement("div");
    nums.className = "nums";
    if(i % 5 != 0) nums.classList.add("innerNums");
    nums.style.transform = `rotate(${i*6}deg)`;
    clock.appendChild(nums);
}
class Clock{
    constructor(sec, min, hr){
        this.sec = sec;
        this.min = min;
        this.hr = hr;
    }
    rotateSec(){
        let rotateSecDeg = (this.sec * 360)/60 + 90;
        console.log(this.sec, rotateSecDeg);
        second.style.transform = `rotate(${rotateSecDeg}deg)`;
    }
    rotateMin(){
        let rotateMinDeg = (this.min * 360)/60 + 90;
        console.log(this.min, rotateMinDeg);
        minute.style.transform = `rotate(${rotateMinDeg}deg)`;
    }
    rotateHr(){
        let rotateHrDeg = (this.hr * 360)/12 + 90;
        console.log(this.hr, rotateHrDeg);
        hour.style.transform = `rotate(${rotateHrDeg}deg)`;
    }
}

setInterval(() => {
    var time = new Date();
    let second = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
    var rotates = new Clock(second, minute, hour);
    rotates.rotateSec();
    rotates.rotateMin();
    rotates.rotateHr();
    console.log(hour, minute, second);
}, 1000);
