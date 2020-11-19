import React, { useState } from "react";
import { readFromStorage, writeToStorage } from "./LocalStorage";

const DATA = "data";

async function fetchPokemons(pokemonName) {
  // const [pokemonData, setPokemonData] = useState(() => readFromStorage(DATA) || '');

  const pokemonInfo = {};
  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonName
  );
  if (response.ok) {
    // console.log("The STATUS code for this API request: " + response.status);

    let result = await response.json();
    let pokeId = result.id;

    /*
        let pokemon_name = result.name;
        let pokeId = result.id;
        let pokemon_height = result.height;
        let pokemon_weight = result.weight;
        let pokemon_base_experience = result.base_experience;
        */

    let display_image = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

    let number_of_abilities = result.abilities.length;
    let number_of_moves = result.moves.length;

    let pokemon_abilities = [];
    let pokemon_moves = [];

    for (let i = 0; i < number_of_abilities; i++) {
      pokemon_abilities.push(result.abilities[i].ability.name);
    }

    for (let i = 0; i < number_of_moves; i++) {
      pokemon_moves.push(result.moves[i].move.name);
    }

    pokemonInfo.name = result.name;
    pokemonInfo.id = result.id;
    pokemonInfo.height = result.height;
    pokemonInfo.weight = result.weight;
    pokemonInfo.base_experience = result.base_experience;
    pokemonInfo.image = display_image;

    for (let i of pokemon_abilities) {
      // console.log(i);
      pokemonInfo.pokemon_abilities = i;
    }
    for (let i = 1; i <= 6; i++) {
      pokemonInfo.pokemon_moves = pokemon_moves[i - 1];
    }
  } else {
    throw new Error(
      "HTTP -ERROR: " +
        response.status +
        " \nThe error message: " +
        response.statusText
    );
  }
  return pokemonInfo;

  /*
    const {pokemon_name, pokeId, pokemon_height, pokemon_weight, pokemon_base_experience, display_image, pokemon_abilities, pokemon_moves}
  */
}

export { fetchPokemons };
