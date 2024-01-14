"use client";

import React from "react";
import { useEffect } from "react";
import "../Header/Header.css";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsThreeDots } from "react-icons/bs";

const Header = ({ gridArea }) => {
  const pathname = usePathname();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    if (pathname === "/") {
      scrollTop >= window.innerHeight
        ? header.classList.add("active")
        : header.classList.remove("active");
    } else header.classList.add("active");
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
          } else if (pathname === "/rings") {
            return (
              <div className="nav">
                <div className="about-link">
                  <Link onClick={scrollTop} href="/">
                    <h3>Home</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} href="/earrings">
                    <h3>Earrings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} href="/necklaces">
                    <h3>Necklaces</h3>
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
          } else if (pathname === "/earrings") {
            return (
              <div className="nav">
                <div className="about-link">
                  <Link onClick={scrollTop} href="/">
                    <h3>Home</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} href="/rings">
                    <h3>Rings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} href="/necklaces">
                    <h3>Necklaces</h3>
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
                <div className="collect-link">
                  <Link onClick={scrollTop} href="/rings">
                    <h3>Rings</h3>
                    <BsThreeDots />
                  </Link>
                </div>
                <div className="collect-link">
                  <Link onClick={scrollTop} href="/earrings">
                    <h3>Earrings</h3>
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
          }
        })()}
      </div>
    </div>
  );
};

export default Header;
