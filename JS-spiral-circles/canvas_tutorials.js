const body = document.querySelector("body");
const canvas = document.createElement("canvas");
body.appendChild(canvas);
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";
var positionX = canvas.width / 2;
var positionY = canvas.height / 2;
let scale = 10;
let number = 0;
let hue = Math.floor(Math.random() * 361);
function drawFlowers(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    let angle = number * 1;
    let radius = scale * Math.sqrt(number);
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    positionX = radius * Math.sin(angle) + canvas.width / 2;
    positionY = radius * Math.cos(angle) + canvas.height / 2;

    number += 1;

    ctx.fillStyle = "hsl("+hue+",100%, 50%)";
    ctx.fill();
    ctx.stroke();
    hue++;
};

function draw(){
    drawFlowers();
    requestAnimationFrame(draw);
};
draw();


