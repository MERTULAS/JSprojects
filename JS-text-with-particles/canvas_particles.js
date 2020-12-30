const body = document.querySelector("body");
const canvas = document.createElement("canvas");
body.appendChild(canvas);
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles;
const mouse = {
    x:null,
    y:null,
    radius:50,
}

window.addEventListener("mousemove", (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
});
ctx.fillStyle = "white";
ctx.font = "10px Verdana";
ctx.fillText("JavaScript", 25, 25);
const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);

class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;
    }

    draw(){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        let forceX = distance / dx;
        let forceY = distance / dy; 
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceX * force * this.density;
        let directionY = forceY * force * this.density;
        if(distance < mouse.radius){
            this.x -= directionX;
            this.y -= directionY;
        }
        else {
            if(this.x !== this.baseX){
                let dx = this.x - this.baseX;
                this.x -= dx/5;
            }
            if(this.y !== this.baseY){
                let dy = this.y - this.baseY;
                this.y -= dy/5;
            }
            
        }
    }
}

function init(){
    particles = [];
    for(let y = 0, y2 = textCoordinates.height; y < y2; y++){
        for(let x = 0, x2 = textCoordinates.width; x < x2; x++){
            if(textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128){
                let positionX = x;
                let positionY = y;
                particles.push(new Particle(positionX * 15, positionY * 15));
            }
        }
    }
}

init();

function animation(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.draw();
        particle.update();
    });
    connectLines();
    requestAnimationFrame(animation);
}
animation();

function connectLines(){
    let opacityValue = 0.7;
    for(let a = 0; a < particles.length; a++){
        for(let b = a; b < particles.length; b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < 100){
                opacityValue = 0.7 - (distance / 100);
                ctx.strokeStyle = "rgba(0, 0, 0," + opacityValue + ")";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}
