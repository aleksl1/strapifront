import Link from "next/link";
import { FunctionComponent, useState } from "react";
import styles from "../styles/Navbar.module.css";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleNav = () => {
    setIsChecked(!isChecked);
  };
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navbar}>
          <div className={`${styles.container} ${styles["nav-container"]}`}>
            <div className={styles["hamburger-lines"]} onClick={toggleNav}>
              <span
                className={
                  !isChecked
                    ? `${styles.line} ${styles.line1}`
                    : `${styles.line} ${styles.line1} ${styles["line1-open"]}`
                }
              ></span>
              <span
                className={
                  !isChecked
                    ? `${styles.line} ${styles.line2}`
                    : `${styles.line} ${styles.line2} ${styles["line2-open"]}`
                }
              ></span>
              <span
                className={
                  !isChecked
                    ? `${styles.line} ${styles.line3}`
                    : `${styles.line} ${styles.line3} ${styles["line3-open"]}`
                }
              ></span>
            </div>
            <div className={styles.logo}>
              <h1>INLEX</h1>
              <h2>Kancelaria Prawnicza</h2>
            </div>
            <div
              className={
                !isChecked
                  ? styles["menu-items"]
                  : `${styles["menu-items"]} ${styles["menu-items-open"]}`
              }
            >
              <li onClick={toggleNav}>
                <Link href="/">Strona Główna</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="/obwieszczenia">Obwieszczenia</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="/kancelaria">O Kancelarii</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="/uslugi">Usługi</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="/#contact">Kontakt</Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
