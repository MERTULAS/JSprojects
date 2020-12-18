const mainDiv = document.querySelector(".pokemons");
const apiAddress = "https://pokeapi.co/api/v2/pokemon/";
const typeColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
var pokemonsCount = 150;

class Pokemon{
    constructor(url){
        this.url = url;
    }
    async getPokemonsJSON(){
        for(let i = 1; i <= pokemonsCount; i++)
        {
            await fetch(this.url + `${i}`)
            .then(receivedData => receivedData.json())
            .then(data => {
                const pokemonDiv = document.createElement("div");
                pokemonDiv.className = "pokemon";
                pokemonDiv.style.backgroundColor = `${typeColors[data.types[0].type.name]}`;
                pokemonDiv.innerHTML = 
                    `
                        <div class="poke-img">
                            <img src="${data.sprites.other.dream_world.front_default}"/>
                        </div>
                        <p class="poke-id">#${Pokemon.pokeIdToHashtagThreeDigits(data.id)}</p>
                        <p class="poke-name">${data.name}</p>
                        <p class="poke-type">type: ${data.types[0].type.name}</p>
                `;
                mainDiv.appendChild(pokemonDiv);
            });
        }
    }
    
    static pokeIdToHashtagThreeDigits(id){
        let threeDigit;  
        if(id < 10) threeDigit = `00${id}`;
        else if(id < 100) threeDigit = `0${id}`;
        else threeDigit = id;
        return threeDigit;
    };
}

var pokemon = new Pokemon(apiAddress);
pokemon.getPokemonsJSON();
