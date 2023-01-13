import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//internal import
import styles from "./Sidebar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const Sidebar = ({ setOpenSideBarMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

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
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const closeSideBar = () => {
    setOpenSideBarMenu(false);
  };

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };
  return (
    <>
      <div className={styles.sidebar}>
        <GrClose className={styles.sidebar_closeBtn} onClick={closeSideBar} />
        <div className={styles.sidebar_box}>
          <Image src={images.logo} alt="logo" height={120} width={150} />
          <p>
            Discover the most outsatanding articles in the nft space & Share
            your story
          </p>
          <div className={styles.sidebar_socials}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={styles.sidebar_menu}>
          <div>
            <div className={styles.sidebar_menu_box} onClick={openDiscoverMenu}>
              <p>Discover</p>
              <TiArrowSortedDown />
            </div>
            {openDiscover ? (
              <div className={styles.sidebar_discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: el.link }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <div className={styles.sidebar_menu_box} onClick={openHelpMenu}>
              <p>Help Center</p>
              <TiArrowSortedDown />
            </div>
            {openHelp ? (
              <div className={styles.sidebar_discover}>
                {helpCenter.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: el.link }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.button}>
          <Button btnText="Create" handleClick={() => {}} />
          <Button btnText="Connect Wallet" handleClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
