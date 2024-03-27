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
        <Image width="500" src={ring.src} alt={ring.title} />
        <h3>{ring.title}</h3>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { ringid } = context.params;

  // const res = await fetch("http://localhost:3000/api/rings/ringid");
  // const ring = await res.json();

  console.log("ringid:", ringid);
  return {
    props: {
      ring,
    },
  };
}

export default RingItem;
