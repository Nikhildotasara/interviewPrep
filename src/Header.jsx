import React, { useContext } from "react";
import ThemeContext from "./contestApi/ThemeContext.js";

function Header() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      <p>This is para</p>
      <button onClick={toogleTheme}>Change theme</button>
    </div>
  );
}

export default Header;
