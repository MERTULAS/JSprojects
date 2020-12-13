const url = "https://www.themealdb.com/api/json/v1/1/random.php";

function getMeal(){
    fetch(url)
    .then(data => data.json())
    .then(data => {
        console.log(data.meals[0]);
        var ingredients = [];
        var indexesForMeasures = [];
        for (let meal in data.meals[0]){
        if(meal.startsWith("strIngredient")){
            if(data.meals[0][meal] != ""){
            ingredients.push(meal);
            let r = /\d+/;
            let index = meal.match(r);
            indexesForMeasures.push(index);
            }
        }
        }
        let htmlImage=`
        <div class=image>
            <img src="${data.meals[0].strMealThumb}"></img>
            <p><b>Category:</b>${data.meals[0].strCategory}</p>
            <p><b>Area:</b>${data.meals[0].strArea}</p>
            <h2>Ingredients</h2>
            <ul>`
        ingredients.forEach((ingredient,index) =>{
        htmlImage+=`<li>${data.meals[0][ingredient]} - ${data.meals[0][`strMeasure${indexesForMeasures[index]}`]}</li>`;
        });
        htmlImage+=`</ul>
        </div>
        <div class=".recipe">
        <h1>${data.meals[0].strMeal}</h1>
        <p>${data.meals[0].strInstructions}</p>
        </div>`;
        let mealHeader = document.querySelector(".meal-headers");
        mealHeader.innerHTML = htmlImage;
        let youtubeDiv = document.querySelector(".youtube-frame");
        let htmlYoutubeDiv = `
        <h1>Video Recipe</h1>
            ${data.meals[0].strYoutube ? `<div class=youtube-frame"><iframe src="${data.meals[0].strYoutube.replace("watch?v=", "embed/")}" frameborder="0"></iframe</div>` : '<h2>Video not found!</h2>'}`;
        youtubeDiv.innerHTML = htmlYoutubeDiv; 
    })};

    const getButton = document.querySelector("#getMeal");

getButton.addEventListener("click", getMeal);
