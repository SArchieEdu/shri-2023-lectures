"use client";

import {
  ThemeProvider,
  useTheme,
  useThemeSwitcher,
} from "@/contexts/themeContext";
import SlowComponent from "@/components/SlowComponent/component";
import React from "react";

const Header = () => {
  const switchTheme = useThemeSwitcher();

  return (
    <header>
      <button onClick={switchTheme}>SwitchTheme</button>
    </header>
  );
};

const Content = () => {
  const theme = useTheme();
  return <div>{theme}</div>;
};

export default function ContextPage() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Content />
        <SlowComponent />
      </div>
    </ThemeProvider>
  );
}
