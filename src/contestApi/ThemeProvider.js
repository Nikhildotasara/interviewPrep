import React, { useState } from "react";

import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    console.log("Current theme", theme);
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
