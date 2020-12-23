const theme = {
    "reddish": ["#FF0000", "#8B0000", "#800000", "#FF6347"],
    "greenish": ["#00FF00", "#228B22", "#008000", "#006400"],
    "grayscale": ["#696969", "#707070", "#787878", "#808080"],
    "orangish": ["#FFA500", "#FF8C00", "#FF7F50", "#FF6347"]
    }
    const rotates = [0,90, 180, 270]; 
    const body = document.querySelector("body");
    const main = document.createElement("div");
    main.className = "main";
    const settings = document.createElement("div");
    settings.className = "settings";
    let html = 
        `
            <div class="borders">
            <p>1</p><input type='checkbox' class='checks' data-border="topLeftRadius"/>
            <p>2</p><input type='checkbox' class='checks' data-border="topRightRadius"/>
            <p>3</p><input type='checkbox' class='checks' data-border="bottomLeftRadius"/>
            <p>4</p><input type='checkbox' class='checks' data-border="bottomRightRadius"/>
            </div>
        `;
    settings.innerHTML = html;
    settings.innerHTML += 
        `
            </div>
            <input class="howManyDivs" type="number" value="6"/>
            <select>
                <option>Grayscale</option>
                <option>Orangish</option>
                <option selected>Reddish</option>
                <option>Greenish</option>
            </select>
        `;
    body.appendChild(main);
    body.appendChild(settings);
    const checks = document.querySelectorAll("input[type=checkbox]");
    
    const howManyDivs = document.querySelector(".howManyDivs")
    let sayi = howManyDivs.value;
    const themeSelect = document.querySelector("select");
    let colors = theme[themeSelect.value.toLowerCase()];
    const backgroundGenerator = () => {
        document.documentElement.style.setProperty("--scalePerDiv", sayi);
        let html = "";
        for(let i = 0; i < sayi*sayi; i++)
        {
            html += `<div class="decors" style="background-color:${colors[Math.floor(Math.random() * 3)]}; transform:rotate(${rotates[Math.floor(Math.random() * 3)]}deg)"></div>`
        }
        main.innerHTML = html;
        body.appendChild(main);
    };
    backgroundGenerator();
    howManyDivs.addEventListener("change", (e) => {
        sayi = e.target.value;
        backgroundGenerator();
    });
    themeSelect.onchange = (e) => {
    colors = theme[e.target.value.toLowerCase()];
    backgroundGenerator();
    };
    checks.forEach((check) => {
        check.addEventListener("change", function(e){
        if(this.checked)
            document.documentElement.style.setProperty(`--${e.target.dataset.border}`, "50%");
        else
            document.documentElement.style.setProperty(`--${e.target.dataset.border}`, "0");
        });
    });
  