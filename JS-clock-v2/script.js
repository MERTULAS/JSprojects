const body = document.querySelector("body");
const clock = document.createElement("div");
const themeChanger = document.createElement("button");
themeChanger.innerHTML = "Dark Mode";
themeChanger.className = "themeChanger";
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
const digital = document.createElement("div");
digital.className = "digitalDiv";
const date = document.createElement("div");
date.className = "date";
body.append(themeChanger, clock, digital, date);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const themeColors = {
    "black":{
        "bodyBg":"black",
        "buttonBg":"white",
        "buttonText":"black",
        "clockPartsBg":"white",
        "commasTextsColor":"white",
        "allTextsColor":"white"
    },
    "white":{
        "bodyBg":"white",
        "buttonBg":"black",
        "buttonText":"white",
        "clockPartsBg":"black",
        "commasTextsColor":"black",
        "allTextsColor":"black"
    }
};
digital.innerHTML = 
    `
        <div class="hourDigital"></div>
        <p>:</p>
        <div class="minDigital"></div>
    `;

const digitalHour = document.querySelector(".hourDigital");
const digitalMin = document.querySelector(".minDigital");
for(let i = 0; i < 60; i++){
    let nums = document.createElement("div");
    nums.className = "nums";
    if(i % 5) nums.classList.add("innerNums");
    nums.style.transform = `rotate(${i*6}deg)`;
    clock.appendChild(nums);
}
class Clock{

    constructor(sec, min, hr, month, day, date){
        this.sec = sec;
        this.min = min;
        this.hr = hr;
        this.month = month;
        this.day = day;
        this.date = date;
    }

    rotateSec(){
        let rotateSecDeg = (this.sec * 360)/60 + 90;
        second.style.transform = `rotate(${rotateSecDeg}deg)`;
    }

    rotateMin(){
        let rotateMinDeg = (this.min * 360)/60 + 90 + (this.sec * 6)/60;
        minute.style.transform = `rotate(${rotateMinDeg}deg)`;
    }

    rotateHr(){
        let rotateHrDeg = (this.hr * 360)/12 + 90 + (this.min * 30)/60;
        hour.style.transform = `rotate(${rotateHrDeg}deg)`;
    }

    digital(){
        digitalHour.innerHTML = `${this.hr}`.padStart(2, "0");
        digitalMin.innerHTML = `${this.min}`.padStart(2, "0");
    }

    dateString(){
        date.innerHTML = 
            `
                <p id="day">${this.day},</p>
                <p id="month">${this.month}</p>
                <p id="date">${this.date}</p>
            `;
    }
}

setInterval(() => {
    var time = new Date();
    let second = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
    let month = months[time.getMonth()];
    let day = days[time.getDay()];
    let date = time.getDate();
    var rotates = new Clock(second, minute, hour, month, day, date);
    rotates.rotateSec();
    rotates.rotateMin();
    rotates.rotateHr();
    rotates.digital();
    rotates.dateString();
}, 1000);

themeChanger.onclick = function(){
    let desiredTheme = getComputedStyle(this).getPropertyValue("--buttonBg");
Object.keys(themeColors[desiredTheme]).forEach(attribute => {
        document.documentElement.style.setProperty(`--${attribute}`, themeColors[desiredTheme][attribute]);
    });
};
