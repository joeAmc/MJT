import React from "react";
import Image from "next/image";
import Silvia from "../../assets/rings.jpg";

const AboutHome = () => {
  return (
    <div className="aboutcontainer grid grid-cols-2 h-screen">
      <Image
        className="w-full h-full object-cover pt-12 pr-4 pb-12 pl-12"
        src={Silvia}
        alt="silvia"
      />
      <div className="flex flex-col justify-center pt-12 pr-12 pb-12 pl-4">
        <h1 className="text-4xl	font-bold	mb-4">Hand Crafted Jeweller</h1>
        <p className="mb-3">
          Silvia is a jeweller based in London. She has been making jewellery
          for over 30 years. She has a passion for creating unique pieces of
          jewellery that are inspired by nature and the world around her.
        </p>
        <button className="btn">Find out More</button>
      </div>
    </div>
  );
};

export default AboutHome;
