import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./navdata";
import styles from "../../styles/Nav.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar__container}>
      <ul className={styles.navbar}>
        {data.map((item) => (
          <li key={item.id} className={styles.list}>
            <a href="#">
              <div className={styles.icon}>
                <FontAwesomeIcon icon={item.iconName} size="1.5x" />
              </div>
              <div className={styles.text}>{item.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
