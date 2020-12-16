const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calender = document.querySelector(".calender");
var calenderInner = "";
monthNames.forEach(name => {
  calenderInner += `<div class="month"><h1>${name}</h1></div>`;
  calender.innerHTML = calenderInner;
});

const monthDivs = document.querySelectorAll(".month");
monthDivs.forEach((month, index) => {
  var daysHTML = "<div class='days'>";
  days.forEach(day =>{
  daysHTML+= `<div class="day">${day}</div>`;
}); 
  month.innerHTML += daysHTML + "</div>" + `<div class="daysOfMonth" data-month="${monthNames[index].substring(0, 3)}"></div>`;
});
monthDivs.forEach((month, index) => {
  var time = new Date();
  time.setFullYear(2021);
  time.setMonth(index + 1);
  time.setDate(0);
  var endDayOfMonth = time.getDate();
  var time = new Date();
  time.setFullYear(2021);
  time.setMonth(index);
  time.setDate(1);
  var firstDayOfMonth = time.getDay();
  const currentDay = document.querySelector(`[data-month=${time.toDateString().split(" ")[1]}]`);
  for(let i = 0; i < firstDayOfMonth; i++)
    {
      let dayCircle = document.createElement("div");
      dayCircle.className = "dayCircles";
      currentDay.appendChild(dayCircle);
    }
  for(let i = 1; i <= endDayOfMonth; i++)
    {
      time.setDate(i);
      time.setMonth(index + 1);
      let dayCircle = document.createElement("div");
      dayCircle.className = "dayCircles";
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
const moods = document.querySelectorAll(".mood");
var selectedMood = "";
moods.forEach(mood => {
  mood.addEventListener("click", (e) => {
    console.log(e.target.parentElement.childNodes);
    let temp = e.target.style.backgroundColor;
    e.target.style.backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${e.target.classList[1]}`);
    document.documentElement.style.setProperty(`--${e.target.classList[1]}`, temp);
    selectedMood = e.target.style.backgroundColor;
  });
});
const dayCircles = document.querySelectorAll(".dayCirclesInner");
dayCircles.forEach(day => day.addEventListener("click", (e) => {
    console.log(selectedMood);
  if(selectedMood == "white") selectedMood = "rgba(170,170,170, 0.6)";
    e.target.style.backgroundColor = selectedMood;
}));
