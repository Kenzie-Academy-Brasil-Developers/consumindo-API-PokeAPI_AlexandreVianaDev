/* Monte a lógica das requisições aqui */
async function consomePokeAPI () {
    const loading = document.querySelector("#loading")

    const pokemonsDaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then (response => response.json())
    .catch(error => console.log(error))

    loading.classList.add("hidden")

    return pokemonsDaAPI
}

// NÃO HÁ UMA FORMA DE PESQUISAR VIA NOME NA POKEAPI, ÚNICA FORMA QUE ENCONTREI FOI ACESSAR DIRETAMENTE O POKEMON PELO SEU NOME (DIGITADO NO INPUT), ATÉ COGITEI REQUISITAR TODOS OS POKEMONS E FILTRAR PELO FRONTEND (USANDO MÉTODOS DE ARRAY), PORÉM NÃO ME PARECEU ALGO MUITO LEGAL
async function pesquisarPokemonNaAPI (pokemonName) {
    const pokemonNameLowerCase = pokemonName.toLowerCase()
    const loading = document.querySelector("#loading")

    const pokemonsDaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameLowerCase}`)
    .then (response => response.json())
    .catch(error => console.log(error))

    loading.classList.add("hidden")

    return pokemonsDaAPI
}