import React from "react";

//INTERENAL import
import styles from "../styles/index.module.css";
import {
  Hero,
  Service,
  BigNftSlider,
  Subscribe,
  Title,
  Category,
  Filter,
} from "../components";

const Home = () => {
  return (
    <div className={styles.heros_page}>
      <Hero />
      <Service />
      <BigNftSlider />
      <Title
        heading="Browse by Category"
        paragraph="Explore the Nfts in the Most Featured Category"
      />

      <Filter />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
