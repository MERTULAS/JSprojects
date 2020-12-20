const jamesBondFilms = {
    "Daniel Craig":{"films":["Spectre, 2015",
                    "Skyfall, 2012", 
                    "Quantum of Solace, 2008", 
                    "Casino Royale, 2006"],
                    "photo":"https://i.tmgrup.com.tr/gq/img/920x615/18-11/05/daniel-craig-55920525.jpg?0.47278974714556177"},
    "Pierce Brosnan":{"films":["Die Another Day, 2002",
                      "The World is Not Enough, 1999",
                      "Tomorrow Never Dies, 1997",
                      "Goldeneye, 1995"],
                      "photo":"https://i2.cnnturk.com/i/cnnturk/75/630x0/55db188fae78492e40210fa5.jpg"},
    "Timothy Dalton":{"films":["Licence to Kill, 1989",
                      "The Living Daylight, 1987"],
                      "photo":"https://i.pinimg.com/originals/81/5e/4b/815e4bfd6f1124ef06c39b2571daba8d.jpg"},
    "Roger Moore":{"films":["A View To A Kill, 1985",
                   "Octopussy, 1983",
                   "For Your Eyes Only, 1981",
                    "Moonraker, 1979",
                    "The Sky Who Loved Me, 1977",
                    "The Man With the Golden Gun, 1974",
                    "Live and Let Die, 1973"],
                    "photo":"https://www.jamesbondlifestyle.com/sites/default/files/ckeditor/images/articles/170524-roger-moore-james-bond.jpg"},
    "George Lazenby":{"films":["On Her Majesty's Secret Service, 1969"],
                      "photo":"https://i.pinimg.com/originals/9a/ec/5f/9aec5f5bcce074b7fb4b705fca6e2152.jpg"},
    "Sean Connery":{"films":["Diamonds Are Forever, 1971",
                    "You Only Live Twice, 1967", 
                    "Thunderball, 1965",
                    "Goldfinger, 1964",
                    "From Russia with Love, 1963",
                    "Dr. No, 1961"],
                    "photo":"https://usa-grlk5lagedl.stackpathdns.com/production/usa/images/1604156166080730-sean-connery-death-james-bond-style-3.jpg?w=1900&fit=crop&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb"}
  }
const main = document.querySelector(".main");
let n = 0;
for(let i=0;i<7;i++){
    for(let j = 0; j< 2; j++){
        let div = document.createElement("div");
        div.className= "films";
        div.style.justifyContent = j%2==0 ? "flex-end" : "flex-start";
        if(i == 0){
            div.classList.add("headers");
            div.style.height = "150px";
            div.style.alignItems = "center";
            if(i == 0)
            {
                div.innerHTML = j == 0 ? "<h1 class='header1'>JAMES &</h1>" : "<h1 class='header2'>& BOND</h1>";
            }
        }
        if((i%2==0 && j%2==0) || (i%2==1 && j%2==1)){
            div.style.backgroundColor = "gray";
            div.style.color = "#bbb";
            if(i != 0 && i != 7){
            div.classList.add("artists");
            div.style.backgroundImage = `url(${Object.values(jamesBondFilms)[n].photo})`;
            n++;}
        }
        main.appendChild(div);
    }
}
const filmDivs = document.querySelectorAll(".films");
console.log(filmDivs);
n = 0;
filmDivs.forEach((film, index) => {
    if(film.style.backgroundImage == "" && index > 1){
        film.style.flexDirection = "column";
        if(film.style.justifyContent == "flex-start") {
            film.style.alignItems = "flex-start";
            film.style.justifyContent = "flex-end";
        }
        else if(film.style.justifyContent == "flex-end"){
            film.style.alignItems = "flex-end";
            film.style.justifyContent = "flex-end";
        }
        thisBondFilms = Object.values(jamesBondFilms)[n].films;
        const bondFilmsCountDiv = document.createElement("div");
        bondFilmsCountDiv.innerHTML = thisBondFilms.length;
        bondFilmsCountDiv.className = "film-list-count";
        film.appendChild(bondFilmsCountDiv);
        let html = n % 2 == 0 ? "<ul class='film-list' style='display:flex; flex-direction:column; align-items:flex-end'>" : "<ul class='film-list'>";
        for(let i = 0; i < thisBondFilms.length; i++){
            html += 
            `
                <li>${thisBondFilms[i].split(",")[0]}</li>
                <li>${thisBondFilms[i].split(",")[1].replace(" ", "")}</li>
            `;
        }
        html += "<ul>";
        film.innerHTML += html;
    }
    if(index % 2 == 0 && index > 0){
        film.innerHTML += `<h1 class="artistName">${(Object.keys(jamesBondFilms)[n]).split(" ")[0]}</h1>`;
    }
    else if(index % 2 == 1 && index > 1){
        film.innerHTML += `<h1 class="artistName">${(Object.keys(jamesBondFilms)[n]).split(" ")[1]}</h1>`;
        n++;
    }
    if(film.classList.contains("headers")) console.log(film);
});
console.log(filmDivs.length)
