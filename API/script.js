function cargarPokemon() {
    // Generar un ID aleatorio entre 1 y 898 (número total de Pokémon en la PokeAPI)
    const pokemonId = Math.floor(Math.random() * 898) + 1;
    // Construir la URL de la API con el ID del Pokémon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    // Hacer una solicitud GET a la API de PokeAPI
    fetch(apiUrl)
        .then(response => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Convertir la respuesta a formato JSON
            return response.json();
        })
        .then(data => {
            // Llamar a la función para mostrar la información del Pokémon
            mostrarPokemon(data);
        })
        .catch(error => {
            // Capturar y manejar errores
            console.error('Error fetching Pokémon:', error);
        });
}

function mostrarPokemon(pokemon) {
    // Obtener el elemento donde se mostrará la información del Pokémon
    const pokemonInfo = document.getElementById('pokemon-info');
    // Actualizar el contenido del elemento con los datos del Pokémon
    pokemonInfo.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Altura: ${pokemon.height / 10} m</p>
        <p>Peso: ${pokemon.weight / 10} kg</p>
    `;
}
