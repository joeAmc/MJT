"use client";

import React from "react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import "./HeaderLink.css";
import { usePathname } from "next/navigation";

const HeaderLink = ({ href, children, className }) => {
  const pathname = usePathname();

  return (
    <div
      className={`${className} ${pathname.startsWith(`${href}`) && "active"} `}
    >
      {/* <div
      className={
        pathname.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    > */}
      <Link href={href}>
        <h3>{children}</h3>
        <BsThreeDots />
      </Link>
    </div>
  );
};

export default HeaderLink;
