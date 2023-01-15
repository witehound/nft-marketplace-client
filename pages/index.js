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
  NFTCard,
  Collection,
} from "../components";

const Home = () => {
  return (
    <div className={styles.heros_page}>
      <Hero />
      <Service />
      <BigNftSlider />
      <Collection />
      <Title
        heading="Browse by Category"
        paragraph="Explore the Nfts in the Most Featured Category"
      />

      <Filter />
      <NFTCard NFTData={[]} />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
