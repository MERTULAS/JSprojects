const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("click", (e) => 
{
    e.target.classList.toggle("open");
}));

panels.forEach(panel => panel.addEventListener("transitionend", (e) => {
    // Toggle will be applied separately for each propertyname, if there are 2 propertyname, toggle turns 1 on and 1 off. It should only do this for one of them so that if it is to be opened, it remains open.
    if(e.propertyName.includes("flex")){
    e.target.classList.toggle("open-active");}
}));
