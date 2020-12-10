const inputs = document.querySelectorAll(".controls input");

function cssUpdate(){
    const dataAttribute = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + dataAttribute);
}

inputs.forEach(input => input.addEventListener("change", cssUpdate));
inputs.forEach(input => input.addEventListener("mousemove", cssUpdate));