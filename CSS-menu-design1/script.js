const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.onclick = () => {
    menu.classList.remove("inactive");
    
};

window.addEventListener("click", (e) => {
    if(e.target.className == "menu" && e.target != "li")
    {
        e.target.classList.add("inactive");
    } 
});

