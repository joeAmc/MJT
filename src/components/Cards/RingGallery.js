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
  const [closeUpImage, setcloseUpImage] = useState();

  const toggleZoom = (id) => {
    ringImages.map((ring) => {
      if (ring.id === id) {
        setcloseUpImage(ring.src);
      }
    }),
      setIsGallery(!isGallery);
  };

  console.log(closeUpImage, "closeUpImage");
  const closeZoom = () => {
    setIsGallery(!isGallery);
  };

  return (
    <div className="mx-32 my-10 relative">
      <div className="gallery-container grid gap-4 grid-cols-6  auto-rows-[300px] auto-cols-[300px] w-full">
        {ringImages.map(({ id, src, title, colspan, rowspan }) => {
          return (
            <div
              className={`gallery-item-${id} ${colspan} ${rowspan} overflow-hidden`}
              key={id}
            >
              <Image
                className="h-full rounded-lg object-cover	cursor-pointer ease-in duration-300 hover:scale-105"
                onClick={() => toggleZoom(id)}
                src={src}
                alt={title}
              />
            </div>
          );
        })}
      </div>
      {!isGallery && (
        <div onClick={closeZoom}>
          <div className=" close-up rounded-lg bg-white w-3/5 h-3/5 mt-[160px] z-50 fixed top-0 bottom-0 left-0 right-0 mx-auto">
            <Image
              className="h-full rounded-lg object-cover "
              src={closeUpImage}
              alt={title}
            />
          </div>
          <div className="background h-full w-full fixed top-0 left-0 bg-black-rgba "></div>
        </div>
      )}
      <div className="ring-text  ">
        <h1 className="text-4xl mt-3 mb-3 ">Swirl</h1>
        <p className="">Very nice organic inspired silver ring</p>
      </div>
      <button className="btn mt-4 ">Shop</button>
    </div>
  );
};

export default RingGallery;
