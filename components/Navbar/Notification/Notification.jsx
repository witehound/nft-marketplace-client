import React from "react";
import Image from "next/image";

//internal imports
import styles from "./Notification.module.css";
import images from "../../../img";

const Notification = () => {
  return (
    <div className={styles.notification}>
      <p>Notification</p>
      <div className={styles.notification_box}>
        <div className={styles.notification_box_image}>
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className={styles.notification_box_image}
          />
        </div>
        <div className={styles.notification_box_info}>
          <h4>Winegd Anubis</h4>
          <p>Measure Action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <div className={styles.notification_box_span}>
          <span className={styles.notification_box_new}></span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
