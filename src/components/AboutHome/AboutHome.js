import React from "react";
import classes from "./AboutHome.module.css";
import Image from "next/image";
import Silvia from "../../assets/Silvia.jpeg";

const AboutHome = () => {
  return (
    <div className={classes.aboutcontainer}>
      <Image className={classes.image} src={Silvia} alt="logo" />
      <div className={classes.content}>
        <h1>Hand Crafted Jeweller</h1>
        <p>
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
