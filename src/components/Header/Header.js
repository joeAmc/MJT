"use client";

import React from "react";
import "../Header/Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsThreeDots } from "react-icons/bs";
import "../Header/Header.css";

const Header = ({ gridArea }) => {
  const pathname = usePathname();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="header-text">
        {(() => {
          if (pathname === "/") {
            return (
              <div className="nav">
                <div className="about-link">
                  <Link href="#about">
                    <h3>About</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <h1>Midas Touch</h1>
                <div className="collect-link">
                  <Link href="#collections">
                    <h3>Collections</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="contact-link">
                  <Link href="#contact">
                    <h3>Contact</h3>
                    <BsThreeDots />
                  </Link>
                </div>
              </div>
            );
          } else {
            return (
              <div className="nav">
                <div className="about-link">
                  <Link onClick={scrollTop} href="/">
                    <h3>Home</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div
                  className={`collect-link ${
                    pathname.startsWith("/rings") && "active"
                  } `}
                >
                  <Link onClick={scrollTop} href="/rings">
                    <h3>Rings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div
                  className={`collect-link ${
                    pathname.startsWith("/earrings") && "active"
                  } `}
                >
                  <Link onClick={scrollTop} href="/earrings">
                    <h3>Earrings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div
                  className={`collect-link ${
                    pathname.startsWith("/necklaces") && "active"
                  } `}
                >
                  <Link onClick={scrollTop} href="/necklaces">
                    <h3>Necklaces</h3>
                    <BsThreeDots />
                  </Link>
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Header;
