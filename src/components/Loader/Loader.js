import React from "react";
import styles from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div>
      <div className={styles.Loader}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
