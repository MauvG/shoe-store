"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const ShoePage = ({ shoe }) => {
  const [src, setSrc] = useState("/" + shoe.name + "/main.png");
  const [sizeChosen, setSizeChosen] = useState(0);
  const [sizes, setSizes] = useState([]);

  const initSizes = () => {
    const array = [];
    let count = 0;
    for (let index = 5; index <= 15; index += 0.5) {
      const size = {
        index: count,
        size: index,
        chosen: false,
      };
      count++;
      array.push(size);
    }
    return array;
  };

  useEffect(() => {
    setSizes(initSizes());
  }, []);

  const chooseSize = (size) => {
    setSizeChosen(size.size);
    let array = initSizes();
    array[size.index].chosen = true;
    setSizes(array);
  };

  const pictureMain = () => {
    setSrc("/" + shoe.name + "/main.png");
  };

  const pictureAlt = () => {
    setSrc("/" + shoe.name + "/alt.png");
  };

  const pictureShoe = () => {
    setSrc("/" + shoe.name + "/shoe.png");
  };

  return (
    <div>
      <div className="m-20 flex justify-center text-center">
        <div className="flex-1">
          <div className="sticky top-20 flex gap-2 justify-end mr-10">
            <div className="flex flex-col gap-2">
              <Image
                src={"/" + shoe.name + "/main.png"}
                alt={shoe.name}
                width={75}
                height={75}
                className="hover:brightness-75"
                onMouseEnter={pictureMain}
              />
              <Image
                src={"/" + shoe.name + "/alt.png"}
                alt={shoe.name}
                width={75}
                height={75}
                className="hover:brightness-75"
                onMouseEnter={pictureAlt}
              />
              <Image
                src={"/" + shoe.name + "/shoe.png"}
                alt={shoe.name}
                width={75}
                height={75}
                className="hover:brightness-75"
                onMouseEnter={pictureShoe}
              />
            </div>
            <div>
              <Image
                src={src}
                alt={shoe.name}
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-2 ml-10 items-start">
            <h1 className="text-2xl font-bold">{shoe.name}</h1>
            <div className="text-lg">
              {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
              {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
              {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
            </div>
            <h1 className="mt-4 text-lg">€{shoe.price}</h1>

            <h1 className="mt-10 text-lg font-medium">Select Size</h1>
            <div className="grid grid-cols-3 gap-2 w-96 text-lg">
              {sizes.map((size) =>
                size.chosen === false ? (
                  <button
                    onClick={() => chooseSize(size)}
                    className="border rounded-md p-3 shadow hover:border-black"
                  >
                    {size.size}
                  </button>
                ) : (
                  <button className="border rounded-md p-3 shadow border-black">
                    {size.size}
                  </button>
                )
              )}
            </div>

            <div className="mt-2">
              <button className="bg-black text-white rounded-full shadow w-96 p-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoePage;
