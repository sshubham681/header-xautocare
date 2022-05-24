import styles from "../../styles/SideNav.module.css";
import { data } from "./navdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideNav = ({ showSidebar }) => {
  return (
    <nav
      className={`${showSidebar} ? ${styles.sidebar__true}:${styles.sidebar}`}
    >
      <i className={styles.cross__icon}>
        <FontAwesomeIcon icon={faTimes} />
      </i>
      <div className={styles.sidenav__wrap}>
        <ul className={styles.sidenav__list}>
          {data.map((item) => (
            <div className={styles.sidenav__wrap}>
              <li key={item.id} className={styles.list__item}>
                <a href="#">
                  <div className={styles.title}>{item.title}</div>
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.login}>
        <p>Login</p>
      </div>
      <div className={styles.share__links}>
        <a
          href="https://www.facebook.com/usedenginetransmissionllc/"
          title="Facebook"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className={styles.social__icons}
          />
        </a>
        <a href="https://twitter.com/usedenginetransmissionLLC" title="Twitter">
          <FontAwesomeIcon icon={faTwitter} className={styles.social__icons} />
        </a>
        <a
          href="https://www.instagram.com/usedenginetransmissionllc/"
          title="Instagram"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.social__icons}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/usedenginetransmission/"
          title="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.social__icons} />
        </a>
      </div>
    </nav>
  );
};
export default SideNav;
