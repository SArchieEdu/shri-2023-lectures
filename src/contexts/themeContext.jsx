import React, { useCallback, useContext, useState } from "react";

const ThemeContext = React.createContext("default");
const ThemeSwitcherContext = React.createContext(() => {});

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeSwitcher = () => {
  return useContext(ThemeSwitcherContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const switchTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === "default" ? "alternative" : "default"
    );
  }, []);

  return (
    <ThemeSwitcherContext.Provider value={switchTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeSwitcherContext.Provider>
  );
};
