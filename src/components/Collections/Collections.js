import React from "react";
import { collections } from "./collections-data";
import Link from "next/link";

const Collections = ({ gridArea }) => {
  return (
    <div className="v-screen">
      <h1 className="text-center">Our Collections</h1>
      <div
        id="collections"
        className=".collectionsContainer grid grid-cols-2 grid-rows-2 gap-12 m-12"
      >
        {collections.map((collection, i) => (
          <div
            key={i}
            className="collection relative h-screen w-full flex background-cover justify-center items-center"
            style={{ background: `url(${collection.imagePath})` }}
          >
            <Link href={`/${collection.name.toLowerCase()}`}>
              <button className="btn">{collection.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
