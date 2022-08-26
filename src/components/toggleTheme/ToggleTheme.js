import { useRef } from "react";

import { useTheme } from "~/context/ThemeContext";

import styles from "./toggleTheme.module.scss";

function ToggleTheme() {
  const toggle = useRef();

  const handleToggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles["toggle"]}>
      <input
        type="checkbox"
        ref={toggle}
        id="toggle"
        onClick={handleToggleTheme}
      />
      <label htmlFor="toggle"></label>
    </div>
  );
}

export default ToggleTheme;
