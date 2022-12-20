/* Monte a lógica das requisições aqui */
async function consomePokeAPI () {
    const loading = document.querySelector("#loading")

    const pokemonsDaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then (response => response.json())
    .catch(error => console.log(error))

    loading.classList.add("hidden")

    return pokemonsDaAPI
}

// async function pesquisarPokeAPI (pokemonName) {
//     const pokemonsDaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
// }



// consomePokeAPI ()