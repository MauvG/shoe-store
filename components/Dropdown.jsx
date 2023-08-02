"use client";

import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classname, setClassname] = useState(
    "hidden absolute right-10 rounded-2xl bg-white mt-4 p-4"
  );

  const handleDropdown = () => {
    if (isOpen) {
      setClassname("absolute right-10 rounded-2xl bg-white mt-4 p-4");
    } else {
      setClassname("hidden absolute right-10 rounded-2xl bg-white mt-4 p-4");
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="font-normal text-lg text-right">
        <button onClick={handleDropdown}>
          Sort By <KeyboardArrowDown />
        </button>
        <div className={classname}>
          <ul className="flex flex-col gap-2">
            <button className="text-right hover:text-gray-500">Featured</button>
            <button className="hover:text-gray-500">Price: Low to High</button>
            <button className="hover:text-gray-500">Price: High to Low</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
