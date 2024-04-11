import React from "react";
import "./Banner.css";
import Logo from "../../assets/Logo.png";
import Image from "next/image";

const Banner = () => {
  console.log("Banner.js: Banner component rendered!");
  return (
    <section>
      <div className="banner-container h-screen w-screen">
        <div className="banner-content">
          <Image className="banner-logo h-[10em] w-[10em]" src={Logo} alt="" />
          <h1 className="text-2xl">Midas Touch Jewellery</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
