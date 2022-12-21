/* Monte sua lógica aqui */
async function renderizaPokemons () { 
    const ulList = document.querySelector(".pokemons__list")

    const listaDePokemons = await consomePokeAPI(); 
    
    listaDePokemons.results.forEach(pokemon => {

        const numeroNaPokedex = pokemon.url.slice(34,-1)

        ulList.insertAdjacentHTML("beforeend", `
            <li class="pokemon__card">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}" alt="">
                <h3 class="text-1">${pokemon.name}</h3>
            </li>
        `)
    })

}

function renderizarPesquisa () {
    const button = document.querySelector(".search__button")
    const input = document.querySelector("#search")

    const ulList = document.querySelector(".pokemons__list")

    button.addEventListener("click", async (event) => {
        ulList.innerHTML = `<li id="loading" class="text-2">Carregando...</li>`

        event.preventDefault()
        const pokemon = await pesquisarPokemonNaAPI(input.value)
        pokemon.forEach(pokemon => {
        ulList.insertAdjacentHTML("beforeend", `
                <li class="pokemon__card">
                    <img src="${pokemon.sprites.front_default}" alt=${pokemon.name}" alt="">
                    <h3 class="text-1">${pokemon.name}</h3>
                </li>
            `)
        })
    })

    input.addEventListener("keypress", async (event) => {
        if (event.key == "Enter") {           
            ulList.innerHTML = `<li id="loading" class="text-2">Carregando...</li>`
    
            event.preventDefault()
            const pokemon = await pesquisarPokemonNaAPI(input.value)
            ulList.insertAdjacentHTML("beforeend", `
                    <li class="pokemon__card">
                        <img src="${pokemon.sprites.front_default}" alt=${pokemon.name}" alt="">
                        <h3 class="text-1">${pokemon.name}</h3>
                    </li>
                `)
        }
    })
}

renderizaPokemons()
renderizarPesquisa ()