"use client";

import React from "react";
import Link from "next/link";
import Logo from "../../assets/Logo.png";
import "../Footer/Footer.css";
import { FaEtsy } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        {/* <div className="spacer"></div> */}
        <div className="footer">
          <div className="footer-items">
            <Link href="/">
              <Image onClick={scrollTop} src={Logo} alt="logo" priority />
            </Link>
            <ul className="footer-links">
              <li>
                <Link href="/#about">
                  <h3 onClick={scrollTop}>About</h3>
                </Link>
              </li>
              <li>
                <Link href="/rings">
                  <h3 onClick={scrollTop}>Rings</h3>
                </Link>
              </li>
              <li>
                <Link href="/earrings">
                  <h3 onClick={scrollTop}>Earrings</h3>
                </Link>
              </li>
              <li>
                <Link href="/necklaces">
                  <h3 onClick={scrollTop}>Necklaces</h3>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <h3>Contact</h3>
                </Link>
              </li>
            </ul>
            <div className="footer-icons">
              <Link href="https://www.etsy.com/uk/shop/MidasTouchJeweller?ref=simple-shop-header-name&listing_id=1246783193">
                <FaEtsy />
              </Link>
              <Link href="https://www.instagram.com/">
                <FiInstagram />
              </Link>
            </div>
            <div className="copyright">
              <h5>&copy; Midas Touch Jeweller. All rights reserved</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
