const body = document.querySelector("body");
const headerPage = document.createElement("h1");
headerPage.innerHTML = "Which one is your favorite?";
const chooseMain = document.createElement("div");
chooseMain.className = "chooseMain";
const chooseLeft = document.createElement("div");
chooseLeft.className = "chooseLeft";
const chooseRight = document.createElement("div");
chooseRight.className = "chooseRight";
const imageDivThis = document.createElement("div");
imageDivThis.className = "image-divs";
const imageDivThat = document.createElement("div");
imageDivThat.className = "image-divs";
const thisButton = document.createElement("button");
thisButton.innerHTML = "THIS!";
const thatButton = document.createElement("button");
thatButton.innerHTML = "THAT!";
const orDiv = document.createElement("div");
orDiv.className = "orDiv";
orDiv.innerHTML = "<p>OR</p>";
chooseLeft.append(imageDivThis, thisButton);
chooseRight.append(imageDivThat, thatButton);
chooseMain.append(chooseLeft, chooseRight, orDiv);
body.append(headerPage, chooseMain);
const images = document.querySelectorAll(".image-divs");
console.log(images);
const addressAPI = "https://dog.ceo/api/breeds/image/random";
const dogNames = ["Alex", "Bulut", "Nazlı", "Bobo", "Richie", "Mojo"];

class GetDog{
    constructor(url)
    {
        this.url = url;
    }
    getRandomDog()
    {
        let random = [];
        images.forEach(image => {
            fetch(this.url)
        .then(data => data.json())
        .then(result => {
            let rand = Math.floor(Math.random() * 6); 
            while(1){
                let length = random.length;
                rand = random.indexOf(rand) > 0 ? Math.floor(Math.random() * 6) : random.push(rand);
                if(random.length > length) break;
            }; 
            image.innerHTML = `<img src="${result.message}"/><p>${dogNames[random[random.length - 1]]}</p>`;
        });
        });
    }
}

var app = new GetDog(addressAPI);
app.getRandomDog();

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        app.getRandomDog()});
});
