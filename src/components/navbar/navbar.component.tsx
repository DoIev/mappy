import { FC } from "react";
import { Chip } from "../chip/chip.component";

import "./navbar.css";

export const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-label-wrapper">
        <div className="navbar-label">מסוגלות</div>
        <Chip label="סופר דופר חשוב" />
      </div>
      <div className="custom-logo-wrapper">
        <img className="custom-logo" src="/mamason_v2.png" alt="ממסון"></img>
      </div>
    </div>
  );
};
