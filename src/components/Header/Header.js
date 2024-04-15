import React from "react";
import "../Header/Header.css";
import HeaderType from "./HeaderType";

const Header = () => {
  return (
    <div className="header bg-w flex justify-left relative shadow-sm transition h-24">
      <HeaderType />
    </div>
  );
};

export default Header;
