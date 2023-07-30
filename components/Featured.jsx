"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Featured = ({ autoSlide, autoSlideInterval }) => {
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

  const FeaturedShoes = [
    {
      name: "Air Force 1",
      image: "/AirForce1/main.png",
      alt: "/AirForce1/alt.png",
      desc: "The radiance lives on in the Air Force 1, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    },
    {
      name: "Dunk Low",
      image: "/DunkLow/main.png",
      alt: "/DunkLow/alt.png",
      desc: "Created for the hardwood but taken to the streets, this '80s b-ball icon returns with classic details and throwback hoops flair. Supple suede overlays help the Nike Dunk channel vintage style while its padded, low-cut collar lets you take your game anywhere—in comfort.",
    },
    {
      name: "Revolution 6",
      image: "/Revolution6/main.png",
      alt: "/Revolution6/alt.png",
      desc: "Here's to new beginnings between you and the pavement. Lace up the 100% recycled laces and set the pace at the start of your running journey with the plush feel of the Revolution 6. We know comfort is key to a successful run.",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold text-center p-5 bg-grey-bg">Featured</h1>
      {/* Dekstop */}
      <div className="lg:flex hidden w-full h-[70vh] bg-grey-bg overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {FeaturedShoes.map((shoe) => (
            <div className="w-screen h-4/5 flex items-center">
              <div className="flex-1 ml-40">
                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  width={500}
                  height={500}
                  className="object-cover h-3/5 w-8/12"
                />
              </div>
              <div className="flex-1 text-lg">
                <h1 className="text-5xl font-bold">{shoe.name}</h1>
                <p className="tracking-wider mt-5 mb-5 mr-40 ">{shoe.desc}</p>
                <button className="border border-black p-2 hover:bg-black hover:text-white">
                  <Link href={shoe.name.replace(/\s/g, "")}>Shop Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ArrowLeft fontSize="large" />
          </button>

          <button
            onClick={nextSlide}
            className="p-1 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ArrowRight fontSize="large" />
          </button>
        </div>

        <div className="absolute bottom-5 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2 ">
            {FeaturedShoes.map((_, i) => (
              <div
                className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${
                  index === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex w-full h-96 bg-grey-bg overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {FeaturedShoes.map((shoe) => (
            <div className="w-screen flex flex-col items-center">
              <div className="flex-1 text-center">
                <h1 className="pt-10 text-4xl font-bold">{shoe.name}</h1>

                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  width={300}
                  height={300}
                  className="object-cover pb-10 h-2/5"
                />
                <button className="border border-black p-2 hover:bg-black hover:text-white">
                  <Link href={shoe.name.replace(/\s/g, "")}>Shop Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ArrowLeft fontSize="large" />
          </button>

          <button
            onClick={nextSlide}
            className="p-1 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ArrowRight fontSize="large" />
          </button>
        </div>

        <div className="absolute bottom-3 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2 ">
            {FeaturedShoes.map((_, i) => (
              <div
                className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${
                  index === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Medium */}
      <div className="lg:hidden max-sm:hidden flex w-full h-[70vh] bg-grey-bg overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {FeaturedShoes.map((shoe) => (
            <div className="w-screen h-4/5 flex items-center">
              <div className="flex-1 pl-20">
                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-lg pl-20">
                <h1 className="text-5xl pb-5 font-bold">{shoe.name}</h1>
                <button className="border border-black p-2 hover:bg-black hover:text-white">
                  <Link href={shoe.name.replace(/\s/g, "")}>Shop Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ArrowLeft fontSize="large" />
          </button>

          <button
            onClick={nextSlide}
            className="p-1 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ArrowRight fontSize="large" />
          </button>
        </div>

        <div className="absolute bottom-5 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2 ">
            {FeaturedShoes.map((_, i) => (
              <div
                className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${
                  index === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
