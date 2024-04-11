import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Card.module.css";
import Logo from "../../assets/logo.png";

const rings = [
  {
    src: Logo,
    id: 1,
    title: "Ring 1",
  },
  {
    src: Logo,
    id: 2,
    title: "Ring 2",
  },
  {
    src: Logo,
    id: 3,
    title: "Ring 3",
  },
];

export default function RingCard() {
  return (
    <div className={classes.cardsContainer}>
      {rings.map(({ id, src, title }) => {
        return (
          <div className={classes.card} key={id}>
            <Link href={`/rings/${id}`}>
              <Image fill src={src} alt={title} />
            </Link>
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  );
}
