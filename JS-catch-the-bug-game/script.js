const playButton = document.querySelector("#playGame");
const bugSelectList = document.querySelector(".bug-list");
const screens = document.querySelectorAll(".main");
const theGameContainer = document.querySelector(".theGame");
const gameTimeDiv = document.querySelector(".gameTime");
const gameScore = document.querySelector(".gameScore");
var score = 0;
var TheGame = false;
const bugs = {
  "Fly" : "http://pngimg.com/uploads/fly/fly_PNG3955.png", 
  "Mosquito" : "http://pngimg.com/uploads/mosquito/mosquito_PNG18171.png",       
  "Spider" : "http://pngimg.com/uploads/spider/spider_PNG44.png", 
  "Roach" :  "http://pngimg.com/uploads/roach/roach_PNG12163.png"
}
var selectedBug = "";
var bugListInTheGame = [];

class GameData
{
  static getTimeAsDesiredFormat(time, min)
  {
    if(time == 59){
      time = 0;
      if(typeof(parseInt(min)) !== "number")
    {
        let temp = parseInt(min[1]);
        temp+=1;
        min = `0${temp}`;
    }
    else{
        let temp = parseInt(min);
        min = ++temp;
    }}
    console.log(parseInt(min[1]));
    if(min < 10) {min = `0${min[1]}`;}
    if(time < 10) {time = `0${time}`;}
    return [`${min}:${time}`, time , min];
  }

  static getScore(score)
  {
        score++;
        gameScore.innerHTML = `Score: ${score}`;
        return score;
  }
}

var gameTimes;
function GameTime(time, min){
  gameTimes = setInterval(() =>
      {
        let inner;
        [inner, time, min] = GameData.getTimeAsDesiredFormat(time, min)
        gameTimeDiv.innerHTML = `Time: ${inner}`;
        time++;
    
      }, 1000);
};

function theGame(e){
  selectedBug = e.target.getAttribute("src");
  screens[1].classList.add("mainUp");
  console.log(e.target.getAttribute("src"));
  const bug = document.createElement("img");
  bug.classList.add("newBug");
  bug.setAttribute("src", selectedBug);
  bug.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
  bug.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
  bugListInTheGame.push(bug);
  theGameContainer.appendChild(bug);
  console.log(bug.className);
  var time = 0;
  var min = `0${0}`;
  GameTime(time, min);
  gameBegin();
}

Object.keys(bugs).forEach(bug => {
  let bugDiv = document.createElement("div");
  bugDiv.className = "bug-in-list";
  bugDiv.innerHTML = `<img src="${bugs[bug]}"/>`;
  bugSelectList.appendChild(bugDiv);
  bugDiv.addEventListener("click", theGame);
});
playButton.addEventListener("click", () =>{
  screens[0].classList.add("mainUp");
});
function gameBegin(){
  window.addEventListener("click", (e) => {
    if(e.target.classList.contains("newBug")){
      e.target.remove();
      for(let i = 0; i < 2; i++){
        let bug = document.createElement("img");
        bug.setAttribute("src", selectedBug);
        bug.classList.add("newBug");
        bug.style.top = `${Math.floor(Math.random() * (window.innerHeight - 200))}px`;
        bug.style.left = `${Math.floor(Math.random() * (window.innerWidth - 200))}px`;
        theGameContainer.appendChild(bug);
      }
    score = GameData.getScore(score);
    if(score >= 10)
    {
        document.querySelector(".alert").style.display = "block";
    }
    }
    else {return;}
    
  });
};
