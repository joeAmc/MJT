import React from "react";
import Image from "next/image";
import Rings from "../../assets/rings.jpg";
import Silvia from "../../assets/silvia.jpeg";
import Banner from "../../assets/banner.jpg";

const rings = [
  {
    src: Rings,
    id: 1,
    title: "Ring 1",
    colspan: "col-span-2",
    // rowspan: "row-span-5",
  },
  {
    src: Silvia,
    id: 2,
    title: "Ring 2",
    colspan: "col-span-4",
    // rowspan: "row-span-4",
  },
  {
    src: Banner,
    id: 3,
    title: "Ring 3",
    colspan: "col-span-2",
    // rowspan: "row-span-3  ",
  },
  {
    src: Silvia,
    id: 4,
    title: "Ring 4",
    colspan: "col-span-3",
    // rowspan: "row-span-4",
  },
  {
    src: Banner,
    id: 5,
    title: "Ring 5",
    colspan: "col-span-2",
    // rowspan: "row-span-3",
  },
];

const RingGallery = () => {
  return (
    <div className="gallery-container grid gap-6 grid-cols-6  m-6 ">
      {rings.map(({ id, src, title, colspan, rowspan }) => {
        return (
          <div className={`gallery-item-${id} ${colspan} ${rowspan}`} key={id}>
            <Image className="h-full w-full" src={src} alt={title} />
          </div>
        );
      })}
    </div>
  );
};

export default RingGallery;
