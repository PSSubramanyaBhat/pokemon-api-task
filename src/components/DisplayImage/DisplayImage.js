import React from "react";
import styles from "./DisplayImage.module.css";

const DisplayImage = (image) => {
  return (
    <div className={styles.DisplayImage}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        //src={display_image}
        // src={image}
        alt="pokemon image"
      />
    </div>
  );
};

export default DisplayImage;
