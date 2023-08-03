"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Featured = ({ shoesData, autoSlide, autoSlideInterval }) => {
  const [index, setIndex] = useState(0);
  const slides = 3;

  const prevSlide = () => {
    setIndex((index) => (index > 0 ? index - 1 : slides - 1));
  };

  const nextSlide = () => {
    setIndex((index) => (index < 2 ? index + 1 : 0));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold text-center p-5 bg-grey-bg">Featured</h1>

      {/* Dekstop */}
      <div className="lg:flex hidden w-full h-[70vh] bg-grey-bg overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {shoesData.map((shoe) =>
            shoe.featured == true ? (
              <div className="w-screen h-4/5 flex items-center">
                <div className="flex-1 ml-40">
                  <Image
                    src={"/" + shoe.name + "/main.png"}
                    alt={shoe.name}
                    width={500}
                    height={500}
                    className="object-cover h-3/5 w-8/12"
                  />
                </div>
                <div className="flex-1 text-lg">
                  <h1 className="text-5xl font-bold">{shoe.name}</h1>
                  <p className="tracking-wider mt-5 mb-5 mr-40 ">{shoe.desc}</p>
                  <button className="rounded-full shadow bg-black text-white p-2 pl-4 pr-4 hover:bg-white hover:text-black">
                    <Link href={shoe.name.replace(/\s/g, "")}>Shop Now</Link>
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>

        <div className="absolute mt-[30vh] left-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full shadow-md shadow-gray-500 bg-white hover:bg-gray-200"
          >
            <ArrowLeft fontSize="large" />
          </button>
        </div>

        <div className="absolute mt-[30vh] right-4">
          <button
            onClick={nextSlide}
            className="p-1 border-black rounded-full shadow-md shadow-gray-500 bg-white hover:bg-gray-200"
          >
            <ArrowRight fontSize="large" />
          </button>
        </div>

        <div className="absolute bottom-5 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2 ">
            {shoesData.map((shoe, i) =>
              shoe.featured == true ? (
                <div
                  className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${
                    index === i ? "p-2" : "bg-opacity-50"
                  }`}
                />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex w-full h-96 bg-grey-bg overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {shoesData.map((shoe) =>
            shoe.featured == true ? (
              <div className="w-screen flex flex-col items-center">
                <div className="flex-1 text-center">
                  <h1 className="pt-10 text-4xl font-bold">{shoe.name}</h1>

                  <Image
                    src={"/" + shoe.name + "/main.png"}
                    alt={shoe.name}
                    width={300}
                    height={300}
                    className="object-cover pb-10 h-2/5"
                  />
                  <button className="rounded-full shadow bg-black text-white p-2 pl-4 pr-4 hover:bg-white hover:text-black">
                    <Link href={shoe.name.replace(/\s/g, "")}>Shop Now</Link>
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>

        <div className="absolute mt-[20vh] left-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full shadow-md shadow-gray-500 bg-white hover:bg-gray-200"
          >
            <ArrowLeft fontSize="large" />
          </button>
        </div>

        <div className="absolute mt-[20vh] right-4">
          <button
            onClick={nextSlide}
            className="p-1 border-black rounded-full shadow-md shadow-gray-500 bg-white hover:bg-gray-200"
          >
            <ArrowRight fontSize="large" />
          </button>
        </div>

        <div className="absolute bottom-3 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2 ">
            {shoesData.map((shoe, i) =>
              shoe.featured == true ? (
                <div
                  className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${
                    index === i ? "p-2" : "bg-opacity-50"
                  }`}
                />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>

      {/* Medium */}
      <div className="lg:hidden max-sm:hidden flex w-full h-[70vh] bg-grey-bg overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {shoesData.map((shoe) =>
            shoe.featured == true ? (
              <div className="w-screen h-4/5 flex items-center">
                <div className="flex-1 pl-20">
                  <Image
                    src={"/" + shoe.name + "/main.png"}
                    alt={shoe.name}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-lg pl-20">
                  <h1 className="text-5xl pb-5 font-bold">{shoe.name}</h1>
                  <button className="rounded-full shadow bg-black text-white p-2 pl-4 pr-4 hover:bg-white hover:text-black">
                    <Link href={shoe.name.replace(/\s/g, "")}>Shop Now</Link>
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>

        <div className="absolute mt-[30vh] left-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full shadow-md shadow-gray-500 bg-white hover:bg-gray-200"
          >
            <ArrowLeft fontSize="large" />
          </button>
        </div>

        <div className="absolute mt-[30vh] right-4">
          <button
            onClick={nextSlide}
            className="p-1 border-black rounded-full shadow-md shadow-gray-500 bg-white hover:bg-gray-200"
          >
            <ArrowRight fontSize="large" />
          </button>
        </div>

        <div className="absolute bottom-5 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2 ">
            {shoesData.map((shoe, i) =>
              shoe.featured == true ? (
                <div
                  className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${
                    index === i ? "p-2" : "bg-opacity-50"
                  }`}
                />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
