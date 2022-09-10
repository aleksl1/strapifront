import { FunctionComponent } from "react";
import styles from "../styles/Navbar.module.css";
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navbar}>
          <div className={`${styles.container} ${styles["nav-container"]}`}>
            <input className={styles.checkbox} type="checkbox" name="" id="" />
            <div className={styles["hamburger-lines"]}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <div className={styles.logo}>
              <h1>INLEX</h1>
              <h2>Kancelaria Prawnicza</h2>
            </div>
            <div className={styles["menu-items"]}>
              <li>
                <a href="#">Strona Główna</a>
              </li>
              <li>
                <a href="#">Ogłoszenia</a>
              </li>
              <li>
                <a href="#">O kancelarii</a>
              </li>
              <li>
                <a href="#">Oferta</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
