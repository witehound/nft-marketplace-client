import React from "react";

//INTERENAL import
import styles from "../styles/index.module.css";
import { Hero, Service, BigNftSlider, Subscribe } from "../components";

const Home = () => {
  return (
    <div className={styles.heros_page}>
      <Hero />
      <Service />
      <BigNftSlider />
      <Subscribe />
    </div>
  );
};

export default Home;
