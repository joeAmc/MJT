"use client";

import React from "react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { usePathname } from "next/navigation";

const HeaderLink = ({ href, children, className }) => {
  const pathname = usePathname();

  return (
    <div
      className={`header-links flex justify-center flex-col	relative ${className} ${
        pathname.startsWith(`${href}`) && "active"
      } `}
    >
      <Link href={href}>
        <h3 className="text-2xl pt-3 pr-3 pl-3 pb-0 relative">{children}</h3>
        <div
          className={`text-4xl transition-all duration-500 flex justify-center absolute mr-auto ml-auto top-8 left-0 right-0 w-[100px]  text-white	hover:text-yellow-700 ${
            pathname.startsWith(`${href}`) && "text-yellow-700"
          }`}
        >
          <BsThreeDots />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLink;
