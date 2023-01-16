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
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "../components";

const Home = () => {
  return (
    <div className={styles.heros_page}>
      <Hero />
      <Service />
      <BigNftSlider />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <FollowerTab TopCreator={[]} />

      <Slider />
      <Title
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Collection />
      <Title
        heading="Browse by Category"
        paragraph="Explore the Nfts in the Most Featured Category"
      />
      <Filter />
      <NFTCard NFTData={[]} />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
