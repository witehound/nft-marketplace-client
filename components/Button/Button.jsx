import React from "react";

//internal import
import styles from "./Button.module.css";

const Button = ({ btnText, handleClick }) => {
  return (
    <div className={styles.box}>
      <div className={styles.Button} onClick={handleClick}>
        {btnText}
      </div>
    </div>
  );
};

export default Button;
