// import { fetchPokemons } from './api.js';
// import { fetchPokemons } from './api.js';
import React, { useState, useEffect } from "react";

// import Prettier from 'prettier';
import "./Pokedex.css";
import { FcSearch } from "react-icons/fc";
import DisplayImage from "./components/DisplayImage/DisplayImage.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

import { readFromStorage, writeToStorage } from "./LocalStorage";

const SEARCH = "search";
const DATA = "data";

const PokedexApp = () => {
  // const [searchPokemon, setSearchPokemon] = useState(() => readFromStorage(SEARCH) || '');
  // const [pokemonData, setPokemonData] = useState(() => readFromStorage(DATA) || '');

  // console.log("BENKI");
  // console.log(fetchPokemons('charmander'));

  const [pokemon, setPokemon] = useState("pikachu");
  const [data, setData] = useState([]);
  const [displayValue, setDisplayValue] = useState("");
  // const [displayImage, setDisplayImage] = useState("https://cdn3.iconfinder.com/data/icons/pokemons/500/Charizard__Rizadon_dragon_fantastic_pikachu_pokeball_games_-512.png");
  const [displayImage, setDisplayImage] = useState(
    "https://cdn0.iconfinder.com/data/icons/movies-11/32/pokemon_movie_cinema_ball_pokeball-512.png"
  );

  const pokemonInfo = {};
  let pokeId = data.id;
  let display_image = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

  async function fetchPokemonURL() {
    const array = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const result = await fetch(url)
        .then((response) => response.json())
        .then((datta) => datta);
      console.log("b", result);
      array.push(result);
      setData(array);
    } catch (error) {
      console.log(error);
    }
  }

  pokemonInfo.name = data.name;
  pokemonInfo.id = data.id;
  pokemonInfo.height = data.height;
  pokemonInfo.weight = data.weight;
  pokemonInfo.base_experience = data.base_experience;
  pokemonInfo.image = display_image;

  let pokemon_abilities = [];
  let pokemon_moves = [];
  let pokemon_types = [];

  return (
    <div className="FlexContainer">
      <div className="MainScreen">
        <div className="DisplayScreen">
          <img
            src={displayImage}
            alt="pokemon image"
          />
        </div>

        {/* SEMI-WORKING CODE */}
        {/* <DisplayImage image={displayImage}/> */}

        <textarea
          className="PokemonNameSearch"
          onChange={(event) => {
            // let pokemonNameSearch = event.target.value;
            // setSearchPokemon(pokemonNameSearch);
            // handleChange();
            let pokemonNameSearch = event.target.value;
            setPokemon(pokemonNameSearch);
          }}
        ></textarea>
        <FcSearch
          className="SearchIcon"
          onClick={(event) => {
            // fetchPokemons(searchPokemon);

            event.preventDefault();
            fetchPokemonURL();
          }}
        />

        {/* SEMI-WORKING CODE */}
        {/* <SearchBar/> */}
      </div>

      <div className="FlexContainer">
        <div className="Divider"></div>
      </div>

      {data.map((d) => {
        return (
          <div className="MainScreen2">
            <div className="FlexContainer">
              <div className="BlueLight">
                <div className="BlueLight2"></div>
              </div>

              <div className="RedLight">
                <div className="RedLight2"></div>
              </div>

              <div className="YellowLight">
                <div className="YellowLight2"></div>
              </div>

              <div className="GreenLight">
                <div className="GreenLight2"></div>
              </div>
            </div>
            <div className="DisplayScreen2">{displayValue}</div>

            <div className="ButtonsDisplay">
              <div className="FlexContainer">
                <button
                  className="BlueButton"
                  onClick={() => {
                    const val = "Name : " + d.name;
                    setDisplayValue(val);
                  }}
                ></button>

                <button
                  className="BlueButton"
                  onClick={() => {
                    const val = "Base Experience : " + d.base_experience;
                    setDisplayValue(val);
                  }}
                ></button>

                <button
                  className="BlueButton"
                  onClick={() => {
                    const val = "Height : " + d.height;
                    setDisplayValue(val);
                  }}
                ></button>

                <button
                  className="BlueButton"
                  onClick={() => {
                    const val = "Weight : " + d.weight;
                    setDisplayValue(val);
                  }}
                ></button>
              </div>

              <div className="FlexContainer">
                <button
                  className="BlueButton"
                  onClick={() => {
                    let number_of_abilities = d.abilities.length; //result.abilities.length;
                    for (let i = 0; i < number_of_abilities; i++) {
                      pokemon_abilities.push(d.abilities[i].ability.name); //result.abilities[i].ability.name
                    }

                    const val = "Pokemon Abilities : " + pokemon_abilities;
                    setDisplayValue(val);
                  }}
                ></button>

                <button
                  className="BlueButton"
                  onClick={() => {
                    let number_of_moves = d.moves.length; //result.moves.length;
                    for (let i = 0; i < number_of_moves; i++) {
                      pokemon_moves.push(d.moves[i].move.name);
                    }

                    const val = "Top 6 moves : " + pokemon_moves;
                    setDisplayValue(val);
                  }}
                ></button>

                <button
                  className="BlueButton"
                  onClick={() => {
                    const val = `https://pokeres.bastionbot.org/images/pokemon/${d.id}.png`;
                    // setDisplayValue(val);
                    setDisplayImage(val);
                  }}
                ></button>

                <button
                  className="BlueButton"
                  onClick={() => {
                    let number_of_types = d.types.length; //result.moves.length;
                    for (let i = 0; i < number_of_types; i++) {
                      pokemon_types.push(d.types[i].type.name);
                    }

                    const val = "Pokemon Type : " + pokemon_types;
                    setDisplayValue(val);
                  }}
                ></button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokedexApp;
