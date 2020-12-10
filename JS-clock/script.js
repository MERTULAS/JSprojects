var seconds = document.querySelector(".second");
var minutes = document.querySelector(".minute");
var hours = document.querySelector(".hour");

class Clock{
    static secondHand(time)
    {
        const second = time.getSeconds();
        const secondDegrees = ((second/60)*360) + 90;
        seconds.style.transform = `rotate(${secondDegrees}deg)`;
    }
    static minuteHand(time)
    {
        const minute = time.getMinutes();
        const minuteDegrees = ((minute/60)*360) + 90;
        minutes.style.transform = `rotate(${minuteDegrees}deg)`;
    }
    static hourHand(time)
    {
        const hour = time.getHours();
        const hourDegrees = ((hour/12)*360) + 90;
        hours.style.transform = `rotate(${hourDegrees}deg)`;
    }
}

var date = () => {
    const time = new Date();
    Clock.secondHand(time);
    Clock.minuteHand(time);
    Clock.hourHand(time);
};

setInterval(date, 1000);
