function buscarPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "";

      const nombre = document.createElement("p");
      nombre.innerText =`Nombre: ${data.name}`;
      resultado.appendChild(nombre);

      const imagen = document.createElement("img");
      imagen.src = data.sprites.front_default;
      resultado.appendChild(imagen);

      const altura = document.createElement("p");
      altura.innerText = `Altura: ${data.height} decímetros`;
      resultado.appendChild(altura);

      const peso = document.createElement("p");
      peso.innerText = `Peso: ${data.weight} hectogramos`;
      resultado.appendChild(peso);

      const habilidad = document.createElement("p");
      habilidad.innerText = `Habilidad: ${data.abilities[0].ability.name}`;
      resultado.appendChild(habilidad);

      const tipo = document.createElement("p");
      tipo.innerText = `Tipo: ${data.types[0].type.name}`;
      resultado.appendChild(tipo);
    })
    .catch(error => console.error(error));
}

const tipoSelect = document.getElementById("tipo");
const filtrarButton = document.getElementById("filtrar");
const pokemonsList = document.getElementById("pokemons");

filtrarButton.addEventListener("click", () => {
  const tipo = tipoSelect.value;

  // Hacer la petición a la API para obtener los Pokémon del tipo seleccionado
  fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
    .then(response => response.json())
    .then(data => {
      // Limpiar la lista de Pokémon previa
      pokemonsList.innerHTML = "";

      // Iterar sobre los Pokémon obtenidos y mostrarlos en la lista
      data.pokemon.forEach(pokemon => {
        const listItem = document.createElement("li");
        const pokemonLink = document.createElement("a"); // Crear el enlace para el nombre del Pokémon
        pokemonLink.innerText = pokemon.pokemon.name;
        pokemonLink.href = "#";
        pokemonLink.addEventListener("click", () => { // Agregar un evento click al enlace
          const resultado = document.getElementById("resultado");
          resultado.innerHTML = "";
          buscarPokemon(pokemon.pokemon.name); // Llamar la función buscarPokemon con el nombre del Pokémon como argumento
        });
        listItem.appendChild(pokemonLink); // Agregar el enlace al elemento de lista
        pokemonsList.appendChild(listItem);
      });
    })
    .catch(error => console.error(error));
});

