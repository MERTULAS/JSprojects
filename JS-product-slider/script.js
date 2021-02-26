var xhr = new XMLHttpRequest();
const slider = document.querySelector(".slider");
const arrows = document.querySelectorAll(".arrow");

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        var data = JSON.parse(this.responseText).products;
        Object.keys(data).forEach(key => {
            let box = document.createElement("div");
            box.className = "box";
            let params = [data[key].params["land"], data[key].params["region"], data[key].params["art"], data[key].params["rebsorte"]];
            params = params.filter(e => e).map(p => " " + p + " ").toString().replace(/,/g, "|");
            if (params.indexOf("|") < 0 && params.length > 0) params = "| " + params;
            let newPrice = data[key].priceText.slice(1) + " € *";
            let oldPrice = data[key].oldPriceText;
            if (oldPrice.length != 0) oldPrice = oldPrice.slice(1) + " € *";
            let priceNum = data[key].price;
            let oldPriceNum = data[key].oldPrice;
            let discount = -100 * (oldPriceNum - priceNum) / oldPriceNum;
            let basePrice = data[key].params["basePrice"];
            let html = 
            `   
                <div class="upper-block">
                    <div class="left-infos">
            `;
            if(!isNaN(discount)){
                discount = `${Math.round(discount)}%`;
                html += `<div class="discount">${discount}</div>`;
            }
            if(data[key].params["isNew"] != ""){
                html += `<div class="isNew">NEU</div>`;
            }
            if(data[key].params["likeCount"] != ""){
                html += `<div class="likeCount"><i class="far fa-heart"></i>${data[key].params["likeCount"]}</div>`;
            }
            html += `
                    </div>
                    <div class="images"><img style="width:40%; height:100%" src="${data[key].image}"/></div>
                </div>
                <div class="names">${data[key].name}</div>
                <div class="params">${params}</div>
                <div class="price">
                    <div class="price-inner">${newPrice}</div>
                    <div class="price-inner">${oldPrice}</div>
                </div>
                <div class="basePrice">${basePrice}</div>
            `;
            box.innerHTML = html;
            slider.appendChild(box);
            console.log(data[key]);
        });
        
    }
}

xhr.open("GET", "sample_products.txt", true);
xhr.send();
var i = 0;

arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        var boxes = document.querySelectorAll(".box");
        if(e.target.className == "fa fa-arrow-left"){
            if(i != 0) i--;
        }
        if(e.target.className == "fa fa-arrow-right"){
            if(slider.getBoundingClientRect().width > boxes[0].getBoundingClientRect().width * 1.5){
                if(i != boxes.length - 3) i++;
            }
            else{
                if(i != boxes.length - 1) i++;
            }
            
        }
        let marginsForBoxes = window.getComputedStyle(document.documentElement).getPropertyValue('--box-margins');
        marginsForBoxes = marginsForBoxes.slice(0, marginsForBoxes.indexOf("px"));
        boxes.forEach(box => {
                let boxWidth = box.getBoundingClientRect().width;
                box.style.left = `${-(boxWidth + marginsForBoxes * 2) * i}px`; 
        });
    });
});
