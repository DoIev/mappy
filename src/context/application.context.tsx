import { Context, createContext, useEffect, useState } from "react";

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export const THEMES = [Theme.Light, Theme.Dark];

export interface IApplicationContext {
  toggleTheme: () => void;
  currentTheme: Theme;
}

export const ApplicationContext: Context<IApplicationContext> =
  createContext<IApplicationContext>({
    toggleTheme: () => {},
    currentTheme: Theme.Light,
  });

export const ApplicationContextProvider = ({ children }: any) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);

  const toggleTheme = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    setCurrentThemeIndex(nextThemeIndex);
  };

  useEffect(() => {
    document
      .getElementById("root")
      ?.setAttribute("data-theme", THEMES[currentThemeIndex]);
  }, [currentThemeIndex]);

  return (
    <ApplicationContext.Provider
      value={{
        toggleTheme,
        currentTheme: THEMES[currentThemeIndex],
      }}
      children={children}
    ></ApplicationContext.Provider>
  );
};
