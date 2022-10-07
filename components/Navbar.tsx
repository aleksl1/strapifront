import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import styles from "../styles/Navbar.module.css";

interface NavbarProps {}

const navRoutes = [
  { name: "Strona Główna", path: "/" },
  { name: "Obwieszczenia", path: "/obwieszczenia" },
  { name: "O Kancelarii", path: "/kancelaria" },
  { name: "Usługi", path: "/uslugi" },
  { name: "Kontakt", path: "/#contact" },
];

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const toggleNav = () => {
    setIsChecked(!isChecked);
  };
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navbar}>
          <div className={`${styles.container} ${styles["nav-container"]}`}>
            <div
              className={styles["hamburger-lines"]}
              onClick={toggleNav}
              id={styles.mobile}
            >
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
            <div className={styles.logo} onClick={() => router.push("/")}>
              <h1>INLEX</h1>
              <h2>Kancelaria Prawnicza</h2>
            </div>
            <div
              className={
                !isChecked
                  ? styles["menu-items"]
                  : `${styles["menu-items"]} ${styles["menu-items-open"]}`
              }
              id={styles["mobile-items"]}
            >
              {navRoutes.map((navRoute) => {
                const isActive = router.asPath === navRoute.path;
                return (
                  <li
                    key={navRoute.path}
                    onClick={toggleNav}
                    className={isActive ? styles.active : ""}
                  >
                    <Link href={navRoute.path}>{navRoute.name}</Link>
                  </li>
                );
              })}
            </div>
            <div id={styles["desktop-items"]}>
              {navRoutes.map((navRoute) => {
                const isActive = router.asPath === navRoute.path;
                return (
                  <li
                    key={navRoute.path}
                    onClick={toggleNav}
                    className={isActive ? styles.active : ""}
                  >
                    <Link href={navRoute.path}>{navRoute.name}</Link>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
