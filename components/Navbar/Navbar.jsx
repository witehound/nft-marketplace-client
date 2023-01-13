import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//icon imports
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//internal imports
import styles from "./Navbar.module.css";
import { Discover, HelpCenter, Notification, Sidebar, Profile } from "./index";
import { Button } from "../index";
import images from "../../img";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideBarMenu, setOpenSideBarMneu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(!discover);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setHelp(!help);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setHelp(false);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setHelp(false);
      setDiscover(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setNotification(false);
      setHelp(false);
      setDiscover(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideBarMenu) {
      setOpenSideBarMneu(true);
    } else {
      setOpenSideBarMneu(false);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <div className={styles.logo}>
            <Image
              src={images.logo}
              alt="nft marketplace"
              height={100}
              width={100}
            />
          </div>
          <div className={styles.navbar_container_left_box_input}>
            <div className={styles.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search Nft" />
              <BsSearch onClick={() => {}} className={styles.search_icon} />
            </div>
          </div>
        </div>
        <div className={styles.navbar_container_right}>
          <div className={styles.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover ? (
              <div className={styles.navbar_container_right_discover_box}>
                <Discover />
              </div>
            ) : null}
          </div>
          <div className={styles.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>

            {help ? (
              <div className={styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            ) : null}
          </div>
          <div className={styles.navbar_container_right_notify}>
            <MdNotifications
              className={styles.notify}
              onClick={openNotification}
            />
            {notification ? <Notification /> : null}
          </div>
          <div className={styles.navbar_container_right_button}>
            <Button btnText="Create" handleClick={() => {}} />
          </div>
          <div className={styles.navbar_container_right_profile_box}>
            <div className={styles.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="profile"
                height={40}
                width={40}
                onClick={openProfile}
                className={styles.navbar_container_right_profile}
              />
              {profile ? <Profile /> : null}
            </div>
          </div>
          <div className={styles.navbar_container_right_menuBtn}>
            <CgMenuRight className={styles.menuIcon} onClick={openSideBar} />
          </div>
        </div>
      </div>
      {openSideBarMenu ? (
        <div className={styles.Sidebar}>
          <Sidebar setOpenSideBarMenu={setOpenSideBarMneu} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
