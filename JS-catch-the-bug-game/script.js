const playButton = document.querySelector("#playGame");
const bugSelectList = document.querySelector(".bug-list");
const screens = document.querySelectorAll(".main");
const theGameContainer = document.querySelector(".theGame");
const gameTimeDiv = document.querySelector(".gameTime");
const gameScore = document.querySelector(".gameScore");
const bugs = {
    "Fly" : "http://pngimg.com/uploads/fly/fly_PNG3955.png", 
    "Mosquito" : "http://pngimg.com/uploads/mosquito/mosquito_PNG18171.png",       
    "Spider" : "http://pngimg.com/uploads/spider/spider_PNG44.png", 
    "Roach" :  "http://pngimg.com/uploads/roach/roach_PNG12163.png"
}
var selectedBug = "";
var score = 0;

class Game
{
    static gameLoop()
    {
        window.addEventListener("click", (e) => {
            if(e.target.classList.contains("newBug"))
            {
                e.target.remove();
                for(let i = 0; i < 2; i++)
                {
                    this.createBug();
                }
                score = this.getScore(score);
                if(score >= 10)
                {
                    document.querySelector(".alert").style.display = "block";
                }
            }
            else{return;}
        });
    };

    static createBug()
    {
        let bug = document.createElement("img");
        bug.setAttribute("src", selectedBug);
        bug.classList.add("newBug");
        bug.style.top = `${Math.floor(Math.random() * (window.innerHeight - 200))}px`;
        bug.style.left = `${Math.floor(Math.random() * (window.innerWidth - 200))}px`;
        theGameContainer.appendChild(bug);
    }

    static getTimeAsDesiredFormat(time, min)
    {
        if(time == 59)
        {
            time = 0;
            min++;
        }
        let minTemp = min;
        let timeTemp = time;
        if(min < 10) {minTemp = `0${min}`;}
        if(time < 10) {timeTemp = `0${time}`;}
        return [`${minTemp}:${timeTemp}`, time , min];
    }

    static getScore(score)
    {
        score++;
        gameScore.innerHTML = `Score: ${score}`;
        return score;
    }
}

function GameTime(time, min){
    setInterval(() =>{
        let inner;
        [inner, time, min] = Game.getTimeAsDesiredFormat(time, min)
        gameTimeDiv.innerHTML = `Time: ${inner}`;
        time++;
    }, 1000);
};

function theGame(e){
    selectedBug = e.target.getAttribute("src");
    screens[1].classList.add("mainUp");
    Game.createBug();
    var time = 0;
    var min = 0;
    GameTime(time, min);
    Game.gameLoop();
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
