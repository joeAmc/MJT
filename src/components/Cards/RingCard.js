import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Card.module.css";

const rings = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    id: 1,
    title: "Ring 1",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    id: 2,
    title: "Ring 2",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    id: 3,
    title: "Ring 3",
  },
];

const RingCard = () => {
  return (
    <div className={classes.cardsContainer}>
      {rings.map(({ id, image, title }) => {
        return (
          <div className={classes.card} key={id}>
            <Link href={`/rings/${id}`}>
              <Image src={image} alt={title} />
            </Link>
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  // const res = await fetch("http://localhost:3000/api/rings");
  // const rings = await res.json();

  return {
    props: {
      rings,
    },
  };
}

export default RingCard;
