import React from "react";
import "./Banner.css";
import Logo from "../../assets/Logo.png";
import bannerImg from "../../assets/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="banner-container h-screen w-screen flex justify-center bg-banner">
        <Image
          className="object-cover absolute -z-50"
          src={bannerImg}
          alt="banner image"
        />
        <div className="banner-content flex  flex-col justify-center items-center">
          <Image
            className="banner-logo h-[10em] w-[10em]"
            src={Logo}
            alt="logo"
          />
          <h1 className="text-2xl">Midas Touch Jewellery</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
