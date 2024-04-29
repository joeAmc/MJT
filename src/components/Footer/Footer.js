"use client";

import React from "react";
import Link from "next/link";
import Logo from "../../assets/Logo.png";
import { FaEtsy } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section>
      <div className="footer flex justify-center items-center h-screen bg-gradient-to-b from-[#deccb0] to-[#c2bab3]">
        <div className="footer-items mt-18">
          <Link href="/" className="flex justify-center">
            <Image
              className="h-44	w-44"
              onClick={scrollTop}
              src={Logo}
              alt="logo"
              priority
            />
          </Link>
          <ul className="footer-links flex flex-col items-center">
            <li>
              <Link href="/#about">
                <h3
                  className="p-1.5 text-2xl text-white hover:text-[#6e6b6b]"
                  onClick={scrollTop}
                >
                  About
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/rings">
                <h3
                  className="p-1.5 text-2xl text-white hover:text-[#6e6b6b]"
                  onClick={scrollTop}
                >
                  Rings
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/earrings">
                <h3
                  className="p-1.5 text-2xl text-white hover:text-[#6e6b6b]"
                  onClick={scrollTop}
                >
                  Earrings
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/necklaces">
                <h3
                  className="p-1.5 text-2xl text-white hover:text-[#6e6b6b]"
                  onClick={scrollTop}
                >
                  Necklaces
                </h3>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <h3 className="p-1.5 text-2xl text-white hover:text-[#6e6b6b]">
                  Contact
                </h3>
              </Link>
            </li>
          </ul>
          <div className="footer-icons mt-5 mb-10 flex justify-center">
            <Link
              className="text-3xl text-white hover:text-[#6e6b6b] mr-3"
              href="https://www.etsy.com/uk/shop/MidasTouchJeweller?ref=simple-shop-header-name&listing_id=1246783193"
            >
              <FaEtsy />
            </Link>
            <Link
              className="text-3xl text-white hover:text-[#6e6b6b] ml-3"
              href="https://www.instagram.com/"
            >
              <FiInstagram />
            </Link>
          </div>
          <div className="copyright">
            <h5 className="text-white">
              &copy; Midas Touch Jeweller. All rights reserved
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
