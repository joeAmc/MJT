import React from "react";
import classes from "./Collections.module.css";
import { collections } from "./collections-data";
import Link from "next/link";
// import Image from "next/image";

const Collections = ({ gridArea }) => {
  return (
    <>
      <h1 className={classes.heading}>Our Collections</h1>
      <div id="collections" className={classes.collectionsContainer}>
        {collections.map((collection, i) => (
          <div
            key={i}
            className={classes.collection}
            style={{ background: `url(${collection.imagePath})` }}
          >
            <button className="btn">
              <Link href={`/${collection.name.toLowerCase()}`}>
                {collection.name}
              </Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collections;
