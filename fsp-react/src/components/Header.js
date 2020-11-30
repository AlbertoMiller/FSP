import React from "react";
import Topheader from "./topheader";
import Menu from "./menu";
function Header() {
  return (
    <header>
      <Topheader />
      <div className="header">
        <Menu />
      </div>
    </header>
  );
}

export default Header;
