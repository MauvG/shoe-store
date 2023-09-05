"use client";

import { DeleteOutlineOutlined, KeyboardArrowDown } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartShoeCard = ({ shoe }) => {
  const [sizes, setSizes] = useState([]);
  const [drowdownClass, setDropdownClass] = useState(
    "hidden absolute border bg-white ml-[4.5rem] z-10"
  );

  const removeShoe = async () => {
    await fetch(`/api/cart/${shoe._id}`, {
      method: "DELETE",
    });

    reload();
  };

  const handleSizeChange = async (event) => {
    let size = event.target.innerHTML;
    if (size == shoe.size) {
      return;
    }

    await fetch(`/api/cart/${shoe._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        size,
      }),
    });

    reload();
  };

  const reload = () => {
    let timer = setTimeout(() => {
      window.location.reload();
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  };

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

  const showDropdown = () => {
    setDropdownClass("flex flex-col absolute border bg-white ml-[4.5rem] z-10");
  };

  const hideDropdown = () => {
    setDropdownClass("hidden absolute border bg-white ml-[4.5rem] z-10");
  };

  return (
    <div id="CartShoeCard" className="flex">
      <div>
        <Image
          src={"/" + shoe.name + "/main.png"}
          alt={shoe.name}
          width={150}
          height={150}
          loading="eager"
          className="h-[150px] object-cover"
        />
      </div>
      <div className="ml-10 flex flex-col gap-1">
        <h1 className="text-lg font-medium">{shoe.name}</h1>
        <div className="opacity-75">
          {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
          {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
          {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
        </div>
        <div className="flex gap-4">
          <h1 className="">
            Size UK {shoe.size + " "}
            <button onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
              <KeyboardArrowDown />
            </button>
            <div
              onMouseOver={showDropdown}
              onMouseLeave={hideDropdown}
              className={drowdownClass}
            >
              {sizes.map((size) => (
                <button
                  key={size.size}
                  onClick={handleSizeChange}
                  className="text-left text-sm leading-4 pl-2 pr-2 hover:bg-zinc-300"
                >
                  {size.size}
                </button>
              ))}
            </div>
          </h1>
        </div>
        <button onClick={removeShoe} className="text-left mt-8">
          <DeleteOutlineOutlined />
        </button>
      </div>
    </div>
  );
};

export default CartShoeCard;
