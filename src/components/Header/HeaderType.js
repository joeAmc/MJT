"use client";

import React from "react";
import HeaderLink from "./HeaderLink";
import { usePathname } from "next/navigation";
import logo from "../../assets/Logo.png";
import Image from "next/image";

const HeaderType = () => {
  const pathname = usePathname();

  return (
    <div className="header-text">
      {(() => {
        if (pathname === "/") {
          return (
            <div className="nav">
              <h1>Midas Touch</h1>
              <Image src={logo} alt="logo" />
              <HeaderLink href="#about" className="about-link">
                About
              </HeaderLink>
              <HeaderLink href="#collections" className="collect-link">
                Collections
              </HeaderLink>
            </div>
          );
        } else {
          return (
            <div className="nav">
              <HeaderLink href="/" className="about-link">
                Home
              </HeaderLink>
              <HeaderLink href="/rings" className="collect-link">
                Rings
              </HeaderLink>
              <Image src={logo} alt="logo" />
              <HeaderLink href="/earrings" className="collect-link">
                Earrings
              </HeaderLink>
              <HeaderLink href="/necklaces" className="collect-link">
                Necklaces
              </HeaderLink>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default HeaderType;
