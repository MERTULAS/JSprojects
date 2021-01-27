const body = document.querySelector("body");
const canvas = document.createElement("canvas");
body.appendChild(canvas);
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticles = 1000;
const centerTitle = document.getElementById("title1");
let centerMeasurements = centerTitle.getBoundingClientRect();
console.log(centerMeasurements);
var particles = [];

class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 1;
        this.weight = Math.random() * 1 + 1;
        this.directionX = -1;
    }

    update(){
        if(this.y > canvas.height){
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width * 1.3;
            this.weight = Math.random() * 1 + 1;
        }
        if(this.x > canvas.width || this.x < 0) this.directionX *= -1;
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;

        if(this.x < centerMeasurements.x + centerMeasurements.width &&
            this.x + this.size > centerMeasurements.x &&
            this.y + this.size > centerMeasurements.y &&
            this.y < centerMeasurements.y + centerMeasurements.height)
            {
                this.y -= 3;
                this.weight *= -0.5;
            }
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx.fill();
    }
}
for(let i=0; i < numberOfParticles; i++){
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    var particle = new Particle(x, y);
    particles.push(particle);
}

function animate(){
    ctx.fillStyle = `rgba(255, 255, 255, 0.08)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    })
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerMeasurements = centerTitle.getBoundingClientRect();
});