import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { clsx } from "clsx";

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

const RingCard = () => {
  return (
    <div
      className={clsx(
        "cardsContainer grid grid-cols-3 justify-items-center",
        "gap-y-10 gap-x-10 my-8 mx-6"
      )}
    >
      {rings.map(({ id, src, title }) => {
        return (
          <div className="card flex flex-col w-96 h-96 relative" key={id}>
            <Link href={`/rings/${id}`}>
              <Image className="w-full h-full" fill src={src} alt={title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RingCard;
