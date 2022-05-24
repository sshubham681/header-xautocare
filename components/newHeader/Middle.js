import styles from "../../styles/Middle.module.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SideNav from "./SideNav";

const Middle = ({ openSidebar }) => {
  return (
    <div className={styles.middle}>
      <div className={styles.middle__container}>
        <div className={styles.hamburger__menu} onClick={openSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.middle__image}>
          <img
            src="https://xautocare.com/wp-content/uploads/2020/07/LOGO-01-1.png"
            alt=""
          />
        </div>
        <div className={styles.middle__contact}>
          <div className={styles.middle__email}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.middle__contacts__icons}
            />
            <p>Email Us At</p>
          </div>
          <div className={styles.middle__call}></div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
