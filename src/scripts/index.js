/* Monte sua lógica aqui */
async function renderizaPokemons (pokemonName) { // pokemonNome é uma tentativa
    const ulList = document.querySelector(".pokemons__list")

    const listaDePokemons = await consomePokeAPI(pokemonName); // pokemonNome é uma tentativa
    
    listaDePokemons.results.forEach(pokemon => {

        const numeroNaPokedex = pokemon.url.slice(34,-1)

        ulList.insertAdjacentHTML("beforeend", `
            <li class="pokemon__card">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}" alt="">
                <h3 class="text-1">${pokemon.name}</h3>
            </li>
        `)
    })

    // console.log(listaDePokemons)
}

renderizaPokemons() // pokemonNome é uma tentativa

function prepararPesquisa () {
    const button = document.querySelector(".search__button")

    button.addEventListener("click", (event) => {
        event.preventDefault()

    })

}
