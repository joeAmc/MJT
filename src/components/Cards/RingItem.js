import React from "react";
import Image from "next/image";
import classes from "./Card.module.css";
import Logo from "../../assets/logo.png";

const ring = {
  src: Logo,
  id: 1,
  title: "Ring 1",
};

const RingItem = () => {
  return (
    <div className={classes.cardsContainer}>
      <div className={classes.card} key={ring.id}>
        <Image fill src={ring.src} alt={ring.title} />
        <h3>{ring.title}</h3>
      </div>
    </div>
  );
};

export default RingItem;
