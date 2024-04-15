"use client";

import React from "react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { usePathname } from "next/navigation";

const HeaderLink = ({ href, children, className }) => {
  const pathname = usePathname();

  return (
    <div
      className={`${className} ${pathname.startsWith(`${href}`) && "active"} `}
    >
      <Link href={href}>
        <h3 className="text-2xl p-3">{children}</h3>
        <div className="text-4xl text-white transition-all duration-500">
          <BsThreeDots />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLink;
