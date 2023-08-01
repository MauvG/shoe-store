"use client";

import Image from "next/image";
import { useState } from "react";

const ShoeCard = ({ name, price }) => {
  const [img, setImg] = useState("/" + name + "/main.png");

  const handleMouseEnter = () => {
    setImg("/" + name + "/alt.png");
  };

  const handleMouseLeave = () => {
    setImg("/" + name + "/main.png");
  };

  return (
    <div className="">
      <Image
        src={img}
        alt={name + "main"}
        width={500}
        height={500}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div className="pt-1">
        <h1 className="">{name}</h1>
        <h1 className="">€{price}</h1>
      </div>
    </div>
  );
};

export default ShoeCard;
