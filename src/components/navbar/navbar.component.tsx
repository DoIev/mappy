import { FC } from "react";
import { ThemeToggler } from "../themeToggler/themeToggler.component";

import "./navbar.css";

export const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-label-wrapper">
        <div className="navbar-label">מסוגלות</div>
      </div>
      <div className="custom-logo-wrapper">
        <img className="custom-logo" src="/mamason_v2.png" alt="ממסון"></img>
      </div>
      <ThemeToggler />
    </div>
  );
};
