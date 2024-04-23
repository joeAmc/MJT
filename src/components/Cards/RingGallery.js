"use client";

import React from "react";
import Image from "next/image";
import Rings from "../../assets/rings.jpg";
import Silvia from "../../assets/silvia.jpeg";
import Banner from "../../assets/banner.jpg";
import "./RingGallery.css";
import { useState } from "react";

const ringImages = [
  {
    src: Rings,
    id: 1,
    colspan: "col-span-2",
  },
  {
    src: Silvia,
    id: 2,
    colspan: "col-span-4",
  },
  {
    src: Banner,
    id: 3,
    colspan: "col-span-2",
  },
  {
    src: Silvia,
    id: 4,
    colspan: "col-span-3",
  },
  {
    src: Rings,
    id: 5,
    colspan: "col-span-1",
  },
];

const RingGallery = ({ title }) => {
  const [isGallery, setIsGallery] = useState(true);

  const toggleZoom = () => {
    setIsCollapsed(!isGallery);
  };

  return (
    <div className="mx-32 my-6 relative">
      <h1 className="text-4xl mt-6">Ring name</h1>
      <div className="gallery-container grid gap-4 grid-cols-6  auto-rows-[300px] auto-cols-[300px]">
        {ringImages.map(({ id, src, title, colspan, rowspan }) => {
          return (
            <div
              className={`gallery-item-${id} ${colspan} ${rowspan}`}
              key={id}
            >
              <Image
                className="h-full rounded-lg object-cover	cursor-pointer"
                onClick={toggleZoom}
                src={src}
                alt={title}
              />
            </div>
          );
        })}
      </div>
      <div className="background h-full w-full fixed top-0 left-0 bg-black-rgba ">
        HELLP
      </div>
      <h1>buy here</h1>
    </div>
  );
};

export default RingGallery;
