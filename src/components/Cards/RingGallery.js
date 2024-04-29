"use client";

import React from "react";
import Image from "next/image";
import Rings from "../../assets/rings.jpg";
import Banner from "../../assets/banner.jpg";
import ring1 from "../../assets/ring1.jpeg";
import ring2 from "../../assets/ring2.jpeg";
import ring3 from "../../assets/ring3.jpeg";
import { useState } from "react";
import { clsx } from "clsx";

const ringImages = [
  {
    src: Rings,
    id: 1,
    colspan: "col-span-2",
  },
  {
    src: ring1,
    id: 2,
    colspan: "col-span-4",
  },
  {
    src: Banner,
    id: 3,
    colspan: "col-span-2",
  },
  {
    src: ring2,
    id: 4,
    colspan: "col-span-3",
  },
  {
    src: ring3,
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
      <div
        className={clsx(
          "gallery-container grid gap-4 grid-cols-6",
          "auto-rows-[300px] auto-cols-[300px] w-full"
        )}
      >
        {ringImages.map(({ id, src, title, colspan, rowspan }) => {
          return (
            <div
              className={`gallery-item-${id} ${colspan} ${rowspan} overflow-hidden`}
              key={id}
            >
              <Image
                className={clsx(
                  "h-full rounded-lg object-cover	cursor-pointer",
                  "ease-in duration-500 hover:scale-110"
                )}
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
          <div
            className={clsx(
              "close-up rounded-lg bg-white w-3/5 h-3/5 mt-[160px] z-50 fixed top-0 bottom-0 left-0 right-0 mx-auto"
            )}
          >
            <Image
              className="h-full rounded-lg object-cover "
              src={closeUpImage}
              alt={title}
            />
          </div>
          <div className="background h-full w-full fixed top-0 left-0 bg-black-rgba "></div>
        </div>
      )}
      <div className="ring-info flex justify-between items-center mt-5 align-bottom">
        <div className="ring-text">
          <h1 className="text-4xl mr-3">Swirl</h1>
          <p className="mr-3">Very nice organic inspired silver ring</p>
        </div>
        <button className="btn">Go to shop</button>
      </div>
    </div>
  );
};

export default RingGallery;
