const body = document.querySelector("body");
const main = document.createElement("div");
main.className = "main";
main.innerHTML = 
    `
        <div class="generatedPassDiv">
            <div class="generatedPassResult"></div>
            <button class="copy">Copy</button>
        </div>
        <div class="settings">
            <div>Password Length</div>
            <input class="passLength" type="number" value="20"/>
        </div>
        <div class="settings">
            <div>Include uppercase letters</div>
            <input class="uppercase" data-func="uppers" type="checkbox"/>
        </div>
        <div class="settings">
            <div>Include lowercase letters</div>
            <input class="lowercase" data-func="lowers" type="checkbox"  checked/>
        </div>
        <div class="settings">
            <div>Include numbers</div>
            <input class="numbers" data-func="numbers" type="checkbox" checked/>
        </div>
        <div class="settings">
            <div>Include symbols</div>
            <input class="symbols" data-func="specials" type="checkbox"/>
        </div>
        <button class="generate">Generate Password!</button>
    `
body.append(main);

class getRandoms{
  
    static upperCases(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    
    static lowerCases(){
        return String.fromCharCode(Math.floor(Math.random() *  26) + 97);
    }
  
    static numbers(){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    static specialCharacters(){
        const symbols = '!@#$%^&*(){}[]=<>/,.'
	    return symbols[Math.floor(Math.random() * symbols.length)];
    }
}

const functions = {
    "uppers": getRandoms.upperCases,
    "lowers": getRandoms.lowerCases,
    "numbers": getRandoms.numbers,
    "specials": getRandoms.specialCharacters,
};

var currentFunctions = [];
const checks = document.querySelectorAll("input[type=checkbox]");
checks.forEach(check => {
    if(check.checked){
        currentFunctions.push(functions[check.dataset.func]);
    }
    check.addEventListener("change", (e)=> {
        if(check.checked){
            currentFunctions.push(functions[e.target.dataset.func]);
        }
        else{
            currentFunctions.splice(currentFunctions.indexOf(functions[e.target.dataset.func]), 1);
        }
    });
});

const generatorBtn = document.querySelector(".generate");
const password = document.querySelector(".generatedPassResult");
const passLength = document.querySelector(".passLength");
generatorBtn.onclick = () => {
    let html = "";
    while(html.length < passLength.value){
        html += currentFunctions[Math.floor(Math.random() * (currentFunctions.length))]();
    }
    password.innerHTML = html;
}

const copy = document.querySelector(".copy");
copy.onclick = () => {
    if(!password.innerHTML){
        return 0;
    }
    else{
        var range = document.createRange();
        range.selectNode(password);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        alert("Copied the text: " + password.innerHTML);
    }
}
