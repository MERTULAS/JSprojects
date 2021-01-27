const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Matrix{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.number = Math.floor(Math.random() * 9) + 1;
    }

    wakeUpNeo(){
        this.numberRain();
        ctx.fillStyle = "green";
        ctx.font = "15px Arial";
        ctx.fillText(this.number, this.x, this.y);
    }

    numberRain(){
        this.y += 30; 
    }

}

const matrixNumbers = [];

const init = () => {
    for(let x = 0; x < canvas.width; x += 50){
        py = Math.floor(Math.random() * canvas.height);
        px = Math.floor(Math.random() * canvas.width);
        matrixNumbers.push(new Matrix(px, py));
    }
};

setInterval(function(){
    ctx.fillStyle = "rgba(0, 0, 0," + 0.2 + ")";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    init();
    matrixNumbers.forEach((numRow, index) => {
        numRow.wakeUpNeo();
        if(numRow.y > canvas.height) matrixNumbers.splice(index, 1);
    });

}, 50);