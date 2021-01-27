const body = document.querySelector("body");
const textDiv = document.createElement("div");
textDiv.className = "textContainer";
const main = document.createElement("div");
main.className = "main";
const inputDiv = document.createElement("input");
inputDiv.type = "text";
const timer = document.createElement("div");
timer.className = "time";
timer.innerHTML = "Time: ";
const scoreBoard = document.createElement("div");
scoreBoard.className = "score";
body.append(main, timer, scoreBoard);
main.append(textDiv, inputDiv);

var score = 0;
scoreBoard.innerHTML = `Score:${score}`;

const addressAPI = "http://api.quotable.io/random";

class TypeSpeedGame{
    constructor(url){
        this.url = url;
    }

    async getRandomText(){
        await fetch(this.url)
        .then(data => data.json())
        .then(result => {
            console.log(result.content);
            textDiv.innerHTML = "";
            result.content.split("").forEach(element => {
                textDiv.innerHTML += `<span>${element}</span>`;
            });
        });
    }
    static getChecker(input){
        const spans = document.querySelectorAll("span");
        spans.forEach((span,index) =>{
            if(index > input.length - 1){
                span.classList.remove("match");
                span.classList.remove("unmatch");
                span.classList.remove("current");
                var completed = false;
            }
            else if(input[index] == span.innerText){
                span.classList.add("match");
                span.classList.remove("unmatch");
            }
            else if(input[index] != span.innerText){
                span.classList.add("unmatch");
                span.classList.remove("match");
                var completed = false;
            }
        });
        if(document.querySelectorAll(".match").length == spans.length){
            inputDiv.value = "";
            game.getRandomText();
            startTime = new Date();
            score++;
            this.scoreCounter();
        }
        
    }
    static timer(time){
        let currentTime = new Date();
        return Math.floor((currentTime - time) / 1000);
    }

    static scoreCounter(){
        scoreBoard.innerHTML = `Score:${score}`;
    }

}

var game = new TypeSpeedGame(addressAPI);
game.getRandomText();
var startTime;

inputDiv.addEventListener("input", ()=>{
    if(!startTime)   startTime = new Date();
    setInterval(()=>{
        timer.innerHTML = `Time:${TypeSpeedGame.timer(startTime)}`;
    }, 1000);
    TypeSpeedGame.getChecker(inputDiv.value);
});
