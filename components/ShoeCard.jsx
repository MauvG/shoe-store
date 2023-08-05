"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ShoeCard = ({ id, name, price }) => {
  const [img, setImg] = useState("/" + name + "/main.png");

  const handleMouseEnter = () => {
    setImg("/" + name + "/alt.png");
  };

  const handleMouseLeave = () => {
    setImg("/" + name + "/main.png");
  };

  return (
    <Link href={id === undefined ? "/" : "/shoes/" + id}>
      <Image
        src={img}
        alt={name + " main"}
        width={500}
        height={500}
        loading="eager"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div className="pt-1">
        <h1 className="">{name}</h1>
        <h1 className="">€{price}</h1>
      </div>
    </Link>
  );
};

export default ShoeCard;
