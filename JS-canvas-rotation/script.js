let canvas = document.getElementById("canvas1");
let getBoundingRect = canvas.getBoundingClientRect();
canvas.width = getBoundingRect.width;
canvas.height = getBoundingRect.height;
let ctx = canvas.getContext("2d");
//ctx.globalCompositeOperation = "destination-over";

class Vertex{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.originPoint = [0, 0];
        this.rotateCheck = true;
    }

    rotate(deg){
        let R = [[Math.cos(deg * Math.PI / 180), -Math.sin(deg * Math.PI / 180)], 
                 [Math.sin(deg * Math.PI / 180), Math.cos(deg * Math.PI / 180)]];
        let rotatedVector = [];
        console.log("-----------");
        R.forEach((key) => {
            console.log(key);
            rotatedVector.push(key[0] * (this.x) + key[1] * (this.y));
        });
        console.log(this.x, this.y);
        [this.x, this.y] = [rotatedVector[0], rotatedVector[1]];
    }
}

let vertex = new Vertex(-100, -100);
let vertex2 = new Vertex(100, -100);
let vertex3 = new Vertex(100, 100);
let vertex4 = new Vertex(-100, 100);
let vertex5 = new Vertex(0, 150);
let vertex6 = new Vertex(0, 50);
let vertex7 = new Vertex(0, -150);
let vertex8 = new Vertex(0, -50);
let vertexArc = new Vertex(-200, -200);
let vertexArc2 = new Vertex(200, 200);

ctx.translate(getBoundingRect.width / 2, getBoundingRect.height / 2);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
setInterval(() => {
    ctx.beginPath();
    ctx.fillStyle = "rgb(43, 42, 41)";
    ctx.clearRect(-300, -300, 600, 600);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.moveTo(vertex.x, vertex.y);
    ctx.lineTo(vertex2.x, vertex2.y);
    ctx.lineTo(vertex3.x, vertex3.y);
    ctx.lineTo(vertex4.x, vertex4.y);
    ctx.lineTo(vertex.x, vertex.y);

    ctx.moveTo(vertex4.x, vertex4.y);
    ctx.lineTo(vertex6.x, vertex6.y);
    ctx.lineTo(vertex3.x, vertex3.y);
    ctx.lineTo(vertex5.x, vertex5.y);
    ctx.lineTo(vertex4.x, vertex4.y);

    ctx.moveTo(vertex.x, vertex.y);
    ctx.lineTo(vertex7.x, vertex7.y);
   
    ctx.lineTo(vertex2.x, vertex2.y);
    ctx.lineTo(vertex8.x, vertex8.y);
    ctx.lineTo(vertex.x, vertex.y);

    ctx.moveTo(vertex8.x, vertex8.y);
    ctx.lineTo(vertex5.x, vertex5.y);
    
    ctx.moveTo(vertex6.x, vertex6.y);
    ctx.lineTo(vertex7.x, vertex7.y);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(vertexArc.x, vertexArc.y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(vertexArc2.x, vertexArc2.y, 30, 0, Math.PI * 2);
    ctx.fill();

    vertex.rotate(1);
    vertex2.rotate(1);
    vertex3.rotate(1);
    vertex4.rotate(1);
    vertex5.rotate(1);
    vertex6.rotate(0);
    vertex7.rotate(1);
    vertex8.rotate(0);
    vertexArc.rotate(-2);
    vertexArc2.rotate(-1);
    ctx.stroke();
}, 10);
