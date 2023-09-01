"use client";

import { DeleteOutlineOutlined, KeyboardArrowDown } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartShoeCard = ({ shoe }) => {
  const [sizes, setSizes] = useState([]);
  const [dropwdown, setDrowdown] = useState(false);
  const [drowdownClass, setDropdownClass] = useState(
    "hidden absolute border bg-white ml-[4.5rem] z-10"
  );

  const removeShoe = async () => {
    const id = shoe.id;
    await fetch(`http://127.0.0.1:8090/api/collections/cart/records/${id}`, {
      method: "DELETE",
    });

    reload();
  };

  const reload = () => {
    let timer = setTimeout(() => {
      window.location.reload();
    }, 100);

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
    if (dropwdown == false) {
      setDrowdown(true);
      setDropdownClass(
        "flex flex-col absolute border bg-white ml-[4.5rem] z-10"
      );
    } else {
      setDrowdown(false);
      setDropdownClass("hidden absolute border bg-white ml-[4.5rem] z-10");
    }
  };

  const handleSizeChange = () => {};

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
            <button onClick={showDropdown}>
              <KeyboardArrowDown />
            </button>
            <div className={drowdownClass}>
              {sizes.map((size) => (
                <button
                  onClick={handleSizeChange}
                  className="text-left text-sm leading-4 pl-2 pr-2 hover:bg-slate-800 hover:text-white"
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
