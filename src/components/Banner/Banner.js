import React from "react";
import Logo from "../../assets/Logo.png";
import bannerImg from "../../assets/banner.jpg";
import Image from "next/image";
import { clsx } from "clsx";

const Banner = () => {
  return (
    <section className="">
      <div
        className={clsx(
          "banner-container h-screen w-screen flex",
          "justify-center relative bg-gradient-to-l"
        )}
      >
        <div className="h-screen">
          <Image
            className="-z-50 h-full object-cover fixed left-0 "
            src={bannerImg}
            alt="banner image"
          />
        </div>
        <div className="banner-content flex flex-col justify-center items-center mb-24">
          <Image
            className="banner-logo h-[15em] w-[15em]"
            src={Logo}
            alt="logo"
          />
          <h1 className="text-5xl	text-white	">Midas Touch Jewellery</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
