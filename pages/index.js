import React from "react";

//INTERENAL import
import styles from "../styles/index.module.css";
import { Hero } from "../components";

const Home = () => {
  return (
    <div className={styles.heros_page}>
      <Hero />
    </div>
  );
};

export default Home;
