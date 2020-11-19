import React from "react";
import styles from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

const SearchBar = (props) => {
  return (
    <div className={styles.SearchBar}>
      <textarea
        className="PokemonNameSearchBar"
        onChange={(event) => {
          

          /* let pokemonNameSearch = event.target.value;
             setPokemon(pokemonNameSearch);*/

        }}
      ></textarea>
      <FcSearch
        className="SearchIconStyle"
        onClick={(event) => {
          

          /*event.preventDefault();
          fetchPokemonURL();*/
        }}
      />
    </div>
  );

};

export default SearchBar;
