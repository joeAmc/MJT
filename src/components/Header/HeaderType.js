"use client";

import React from "react";
import HeaderLink from "./HeaderLink";
import { usePathname } from "next/navigation";
import logo from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const HeaderType = () => {
  const pathname = usePathname();

  return (
    <div className="header-text ml-28">
      {(() => {
        if (pathname === "/") {
          return (
            <div className="nav flex justify-center items-center h-full">
              <h1 className="mr-4">Midas Touch</h1>
              <Link href="/">
                <Image
                  className="h-[60px] w-auto absolute top-0 bottom-0 mt-auto mb-auto left-[32px]"
                  src={logo}
                  alt="logo"
                />
              </Link>
              <HeaderLink
                href="#about"
                className="about-link flex justify-center flex-col relative"
              >
                About
              </HeaderLink>
              <HeaderLink href="#collections" className="collect-link">
                Collections
              </HeaderLink>
            </div>
          );
        } else {
          return (
            <div className="nav flex justify-center items-center h-full">
              <h1 className="mr-4">Midas Touch</h1>
              <Link href="/">
                <Image
                  className="h-[60px] w-auto absolute top-0 bottom-0 mt-auto mb-auto left-[32px]"
                  src={logo}
                  alt="logo"
                />
              </Link>
              <HeaderLink href="/rings" className="collect-link">
                Rings
              </HeaderLink>
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
