import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import styles from "./Navbar.module.css";
import { navRoutes } from "../../utils/staticData";
import Chevron from "../SimpleReusable/Chevron";
import Logo from "../SimpleReusable/Logo";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [animateStyles, setAnimateStyles] = useState({
    opacity: 0,
    translate: 100,
  });
  const router = useRouter();
  const navItems = navRoutes.map(({ name, path }) => {
    return (
      <li
        key={path}
        className={router.asPath === path ? styles.active : undefined}
        onClick={() => closeNavMenu()}
      >
        <Link href={path}>{name}</Link>
      </li>
    );
  });
  const openNavMenu = () => {
    setAnimateStyles({ opacity: 0.97, translate: 0 });
  };

  const closeNavMenu = () => {
    setAnimateStyles({ opacity: 0, translate: 100 });
  };

  return (
    <>
      <header className={styles.headerMobile}>
        <Logo />
        <nav
          className={`${styles.navigation}`}
          style={{
            opacity: animateStyles.opacity,
            transform: `translateX(${animateStyles.translate}%)`,
          }}
        >
          <ul>{navItems}</ul>
          <div className={styles.iconContainer} onClick={() => closeNavMenu()}>
            <Chevron pointDirection={"right"} />
          </div>
        </nav>
        <nav className={styles.burger} onClick={() => openNavMenu()}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </nav>
      </header>
      <header className={styles.headerDesktop}></header>
    </>
  );
};

export default Navbar;
