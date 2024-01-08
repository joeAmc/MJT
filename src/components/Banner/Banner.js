import React from "react";
import "./Banner.css";
import Logo from "../../assets/Logo.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="banner-container">
        <div className="banner-content">
          <Image className="banner-logo" src={Logo} alt="" />
          <h1>Midas Touch Jewellery</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
