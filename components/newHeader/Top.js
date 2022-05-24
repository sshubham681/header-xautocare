import styles from "../../styles/Top.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div className={styles.social__brands}>
          <a
            href="https://www.facebook.com/usedenginetransmissionllc/"
            title="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className={styles.social__icons}
            />
          </a>
          <a
            href="https://twitter.com/usedenginetransmissionLLC"
            title="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className={styles.social__icons}
            />
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
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles.social__icons}
            />
          </a>
        </div>
        <div className={styles.contacts}>
          <a title="Call Us" href="tel:888-887-4566">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className={styles.contacts__icons}
            />
            888-887-4566
          </a>
          <span className={styles.line__seprator}>|</span>
          <a title="Email Us" href="mail-to:support@xautocare.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.contacts__icons}
            />
            support@xautocare.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
