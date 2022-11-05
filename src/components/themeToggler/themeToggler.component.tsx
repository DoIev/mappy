import { useContext } from "react";
import {
  ApplicationContext,
  IApplicationContext,
} from "../../context/application.context";
import { MODE_TO_ICON_MAPPER } from "./themeToggler.consts";

export const ThemeToggler = () => {
  const { toggleTheme, currentTheme } =
    useContext<IApplicationContext>(ApplicationContext);

  const imagePath = MODE_TO_ICON_MAPPER[currentTheme];
  return <img src={imagePath} onClick={toggleTheme} />;
};
