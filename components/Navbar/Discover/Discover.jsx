import React from "react";
import Link from "next/link";

//internnal import
import styles from "./Discover.module.css";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "nft-details",
    },
    {
      name: "Account Settings",
      link: "account-settings",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <>
      <div>
        {discover.map((el, i) => (
          <div key={i + 1} className={styles.discover}>
            <Link href={{ pathname: el.link }}>{el.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Discover;
