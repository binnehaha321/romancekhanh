import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import navItems from "./navItems";
import ToggleTheme from "../toggleTheme/ToggleTheme";

import styles from "./navbar.module.scss";

function Navbar() {
  // Fix navbar when scroll
  const navbar = useRef();

  const addStyle = () => {
    return (navbar.current.style.cssText = `
      position: fixed;
      background-color: #0F0F11;
    `);
  };

  const removeStyle = () => {
    return (navbar.current.style.cssText = `
      position: relative;
      background-color: #232428;
    `);
  };

  useEffect(() => {
    document.onscroll = () => {
      const topPagePosition = document.body.getBoundingClientRect().top;
      if (topPagePosition === 0) {
        removeStyle();
      } else {
        addStyle();
      }
    };
  }, []);

  return (
    <div className={styles["navbar"]} ref={navbar}>
      <div className={`container ${styles["container"]}`}>
        <div className={styles["navbar-brand"]}>
          <h3>Romance Khánh</h3>
        </div>
        <ul className={styles["navbar-nav"]}>
          {navItems.map((item) => (
            <Link key={item.id} to={item.path}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        <ToggleTheme />
      </div>
    </div>
  );
}

export default Navbar;
