var time = new Date().toDateString();
console.log(time);
var time2 = new Date();
console.log(time2.toDateString());
console.log(time2.toDateString().split(" ")[1]);
console.log(time2);
console.log(String(time2).split(" ")[1].substring(0,3));

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calender = document.querySelector(".calender");
var calenderInner = "";
monthNames.forEach(name => {
    calenderInner += `<div class="month" data-month="${name.substring(0,3)}"><h1>${name}</h1></div>`;
    calender.innerHTML = calenderInner;
});

const monthDivs = document.querySelectorAll(".month");
monthDivs.forEach(month => {
    var daysHTML = "<div class='days'>";
    days.forEach(day =>{
    daysHTML+= `
        <div class="dayNames">
            ${day}
        </div>`;
}); 
    month.innerHTML += daysHTML + "</div>" + `<div class="daysOfMonth" data-month-inner="${month.dataset.month}"></div>`;
});
monthDivs.forEach((month, index) => {
    var time = new Date();
    time.setMonth(index + 1);
    time.setDate(0);
    var endDayOfMonth = time.getDate();
    time = new Date();
    time.setMonth(index);
    const currentDay = document.querySelector(`div[data-month-inner=${time.toDateString().split(" ")[1]}]`);
    let firstDayOfMonth = time.getDay();
    for(let i = 0; i < firstDayOfMonth; i++)
    {
        const dayCircle = document.createElement("div");
        dayCircle.className = "dayCircles";
        currentDay.appendChild(dayCircle);
    }
    console.log(currentDay);
    for(let i = 1; i <= endDayOfMonth; i++)
    {   
        console.log()
        const dayCircle = document.createElement("div");
        dayCircle.className = "dayCircles";
        time.setDate(i);
        time.setMonth(index + 1);
        dayCircle.innerHTML = `<div class="dayCirclesInner">${i}</div>`
        currentDay.appendChild(dayCircle);
        if(index == 11 && i == endDayOfMonth)
        {
            const dayCircle = document.createElement("div");
        dayCircle.className = "dayCircles";
        dayCircle.innerHTML = `<div class="dayCirclesInner" style="background-color:green">1</div>`;
        currentDay.appendChild(dayCircle);
        }
    }
});
