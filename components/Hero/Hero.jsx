import React from "react";
import Image from "next/image";

//internal import
import styles from "./Hero.module.css";
import { Button } from "../index";
import images from "../../img";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_box}>
        <div className={styles.hero_box_left}>
          <h1>Discover, Collect andd Sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnText={"Start Your Search"} />
        </div>
        <div className={styles.hero_right}>
          <Image
            src={images.hero}
            alt="Hero Section"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
