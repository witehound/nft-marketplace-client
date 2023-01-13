import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

//internal imports
import styles from "./Profile.module.css";
import images from "../../../img";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_account}>
        <Image
          src={images.user1}
          alt="user-profile"
          height={50}
          width={50}
          className={styles.profile_account_image}
        />
        <div className={styles.profile_account_info}>
          <p>Winged Anubis</p>
          <small>0XRT478EUERVFST.....</small>
        </div>
      </div>
      <div className={styles.profile_menu}>
        <div className={styles.profile_menu_one_item}>
          <FaUserAlt />
          <p>
            <Link href={{ pathname: "/myprofile" }}>My Profile</Link>
          </p>
        </div>
        <div className={styles.profile_menu_one_item}>
          <FaRegImage />
          <p>
            <Link href={{ pathname: "/my-items" }}>My Items</Link>
          </p>
        </div>
        <div className={styles.profile_menu_one_item}>
          <FaUserEdit />
          <p>
            <Link href={{ pathname: "/edit-profile" }}>Edit Profile</Link>
          </p>
        </div>
        <div className={styles.profile_menu_one_item}>
          <MdHelpCenter />
          <p>
            <Link href={{ pathname: "/help" }}>Help</Link>
          </p>
        </div>
        <div className={styles.profile_menu_one_item}>
          <TbDownload />
          <p>
            <Link href={{ pathname: "/disconnect" }}>Disconnect</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
