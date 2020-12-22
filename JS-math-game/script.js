const app = document.querySelector(".main");
app.innerHTML = 
    `
        <p>Math Game</p>
        <p>Welcome to the Math Game. Let's test your math skills!😃</p>
        <p>You'll be given random math questions that you'll have to answer.Level changes when you reach the score of: 25, 50, 75...</p>
        <p>Please enter your username to start:</p>
        <div class="enter">
            <input type="text" placeholder="Enter username"/>
            <input type="submit" value="Submit"/>
            <div class="alert" style="color:red;"></div>
        </div>
    `
var score = 0;
const enterGame = document.querySelector("input[type=submit]");
enterGame.onclick = () => {
    let userName = document.querySelector("input[type=text]").value;
    if(userName)
    {
        appBegin(userName);
    }
    else
    {
        document.querySelector(".alert").innerHTML = "Enter Username";
    }
};

const questionGenerator = (score) => {
    let num1 = Math.floor(Math.random() * (Math.floor(score/25 + 1) * 10)) + 1
    let num2 = Math.floor(Math.random() * (Math.floor(score/25 + 1) * 10)) + 1
    let symbol = ["+", "-", "*", "/"];
    return [num1, num2, symbol[Math.floor(Math.random() * 4)]];
};

const appBegin = (name) => {
    let [n1, n2, sign] = questionGenerator(score);
    let theResult = Math.floor(eval(`${n1} ${sign} ${n2}`));
    app.innerHTML = 
        `   
            ${n1} ${sign} ${n2}
            <div>
                <input type="number"/><input class="answer" type="submit" value="Submit"/>
            </div>
            <div class="name">Name:${name}</div>
            <div class="score">Score:${score}${"*".repeat(score/25 + 1)}</div>
            <div class="info">
                <ul>
                    <li>Score < 25 Random 1 digit numbers</li>
                    <li>Score >= 25 Random 2 digit numbers</li>
                    <li>Score >= 50 Random 3 digit numbers</li>
                    <li>Score >= 75 Random 4 digit numbers</li>
                    <li>...</li>
                </ul>
            </div>
        `;
    const inputNum = document.querySelector("input[type=number]");
    const sendAnswer = document.querySelector(".answer");
    sendAnswer.onclick = () => {
        if(inputNum.value == theResult)
        {
            score += 5;
            appBegin(name);
        }
        else
        {
            inputNum.style.borderBottom = "1px solid red";
        }
    }
}
