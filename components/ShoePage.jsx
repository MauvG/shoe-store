"use client";

import { ArrowLeft, ArrowRight, Done } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const ShoePage = ({ shoe }) => {
  const router = useRouter();
  const [src, setSrc] = useState("/" + shoe.name + "/main.png");
  const [sizeChosen, setSizeChosen] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [alert, setAlert] = useState("hidden mt-2 text-red-500");
  const [popup, setPopup] = useState(
    "hidden fixed top-0 left-0 z-50 w-screen h-screen"
  );

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
    setAlert("hidden mt-2 text-red-500");
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

  const prevImg = () => {
    if (src === "/" + shoe.name + "/main.png") {
      pictureShoe();
    } else if (src === "/" + shoe.name + "/alt.png") {
      pictureMain();
    } else if (src === "/" + shoe.name + "/shoe.png") {
      pictureAlt();
    }
  };

  const nextImg = () => {
    if (src === "/" + shoe.name + "/main.png") {
      pictureAlt();
    } else if (src === "/" + shoe.name + "/alt.png") {
      pictureShoe();
    } else if (src === "/" + shoe.name + "/shoe.png") {
      pictureMain();
    }
  };

  const handleCart = () => {
    if (sizeChosen === 0) {
      setAlert("mt-2 text-red-500");
      return;
    }

    setPopup("fixed top-0 left-0 z-50 w-screen h-screen");
    addToCart();
  };

  const addToCart = async () => {
    const name = shoe.name;
    const price = shoe.price;
    const size = sizeChosen;
    const quantity = 1;
    const category = shoe.category;

    await fetch("http://127.0.0.1:8090/api/collections/cart/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        size,
        quantity,
        category,
      }),
    });
    router.refresh();
  };

  const closePopup = () => {
    setPopup("hidden fixed top-0 left-0 z-50 w-screen h-screen");
  };

  return (
    <div>
      {/* Dekstop */}
      <div className="hidden lg:block">
        <div className="m-20 flex justify-center text-center">
          <div className="flex-1">
            <div className="sticky top-10 flex gap-2 justify-end mr-10">
              <div className="flex flex-col gap-2">
                <Image
                  src={"/" + shoe.name + "/main.png"}
                  alt={shoe.name}
                  width={75}
                  height={75}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[75px] object-cover"
                  onMouseEnter={pictureMain}
                />
                <Image
                  src={"/" + shoe.name + "/alt.png"}
                  alt={shoe.name}
                  width={75}
                  height={75}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[75px] object-cover"
                  onMouseEnter={pictureAlt}
                />
                <Image
                  src={"/" + shoe.name + "/shoe.png"}
                  alt={shoe.name}
                  width={75}
                  height={75}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[75px] object-cover"
                  onMouseEnter={pictureShoe}
                />
              </div>
              <div>
                <Image
                  src={src}
                  alt={shoe.name}
                  width={500}
                  height={500}
                  loading="eager"
                  className="shadow rounded-2xl object-contain"
                />
                <div className="absolute right-4 bottom-4 flex gap-2">
                  <div className="bg-white rounded-full shadow-md hover:bg-gray-200">
                    <button onClick={prevImg}>
                      <ArrowLeft fontSize="large" />
                    </button>
                  </div>
                  <div className="bg-white rounded-full shadow-md hover:bg-gray-200">
                    <button onClick={nextImg}>
                      <ArrowRight fontSize="large" />
                    </button>
                  </div>
                </div>
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
                <h1 className={alert}>Please select a size.</h1>
                <button
                  onClick={handleCart}
                  className="bg-black text-white rounded-full shadow-lg w-96 p-4 hover:bg-zinc-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={popup}>
          <div className="bg-white w-1/4  m-auto mt-[20vh] border rounded-xl shadow-xl p-2 text-center">
            <h1 className="p-4 font-bold text-xl">
              <Done /> Added to Cart
            </h1>

            <div className="flex justify-center gap-4">
              <div className="mt-6">
                <Image
                  src={"/" + shoe.name + "/main.png"}
                  alt={shoe.name}
                  width={100}
                  height={100}
                  loading="eager"
                  className="shadow rounded-lg h-4/6 object-cover"
                />
              </div>

              <div className="flex flex-col gap-1 text-left">
                <h1 className="pt-4 text-lg">{shoe.name}</h1>
                <div className="opacity-50">
                  {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
                  {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
                  {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
                </div>
                <h1 className="opacity-50">Size UK {sizeChosen}</h1>
                <h1 className="pb-8 text-lg">€{shoe.price}</h1>
              </div>
            </div>

            <div className="flex justify-center gap-2 w-full">
              <button className="rounded-full border bg-zinc-800 text-white p-4 w-1/2 hover:bg-zinc-600">
                <Link href="/cart">Proceed to Cart</Link>
              </button>

              <button
                onClick={closePopup}
                className="rounded-full border shadow-lg p-4 w-1/2 hover:bg-zinc-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Medium */}
      <div className="lg:hidden max-sm:hidden block">
        <div className="mt-10 m-4 flex flex-col justify-center">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{shoe.name}</h1>
            <div className="text-xl">
              {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
              {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
              {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
            </div>
            <h1 className="mb-4 text-2xl">€{shoe.price}</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-full">
              <Image
                src={src}
                alt={shoe.name}
                width={1000}
                height={1000}
                loading="eager"
                className="shadow rounded-2xl object-contain"
              />
              <div className="absolute top-[90vw] left-4 p-4 bg-white rounded-full shadow-md hover:bg-gray-200">
                <button onClick={prevImg}>
                  <ArrowLeft fontSize="large" />
                </button>
              </div>
              <div className="absolute top-[90vw] right-4 p-4 bg-white rounded-full shadow-md hover:bg-gray-200">
                <button onClick={nextImg}>
                  <ArrowRight fontSize="large" />
                </button>
              </div>

              <div className="flex justify-center gap-4  mt-4">
                <Image
                  src={"/" + shoe.name + "/main.png"}
                  alt={shoe.name}
                  width={150}
                  height={150}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[150px] object-cover"
                  onMouseEnter={pictureMain}
                />
                <Image
                  src={"/" + shoe.name + "/alt.png"}
                  alt={shoe.name}
                  width={150}
                  height={150}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[150px] object-cover"
                  onMouseEnter={pictureAlt}
                />
                <Image
                  src={"/" + shoe.name + "/shoe.png"}
                  alt={shoe.name}
                  width={150}
                  height={150}
                  className="shadow rounded-lg hover:brightness-75 h-[150px] object-cover"
                  onMouseEnter={pictureShoe}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center m-4 text-xl">
            <h1 className="mt-10 text-2xl font-medium">Select Size</h1>
            <div className="grid grid-cols-3 gap-2 w-full m-4 text-xl">
              {sizes.map((size) =>
                size.chosen === false ? (
                  <button
                    onClick={() => chooseSize(size)}
                    className="border rounded-md p-3 shadow hover:border-black"
                  >
                    UK {size.size}
                  </button>
                ) : (
                  <button className="border rounded-md p-3 shadow border-black">
                    UK {size.size}
                  </button>
                )
              )}
            </div>

            <div className="mt-2 justify-center text-center">
              <h1 className={alert}>Please select a size.</h1>
              <button
                onClick={handleCart}
                className="bg-black text-white rounded-full shadow-lg w-96 p-4 hover:bg-zinc-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className={popup}>
          <div className="bg-white w-[80vw]  m-auto mt-[20vh] border rounded-xl shadow-xl p-2 text-center">
            <h1 className="p-4 font-bold text-2xl">
              <Done /> Added to Cart
            </h1>

            <div className="flex justify-center gap-4">
              <div className="mt-4">
                <Image
                  src={"/" + shoe.name + "/main.png"}
                  alt={shoe.name}
                  width={200}
                  height={200}
                  loading="eager"
                  className="shadow rounded-lg h-5/6 object-cover"
                />
              </div>

              <div className="mt-8 flex flex-col gap-1 text-left">
                <h1 className="pt-4 text-2xl">{shoe.name}</h1>
                <div className="opacity-50 text-xl">
                  {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
                  {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
                  {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
                </div>
                <h1 className="opacity-50">Size UK {sizeChosen}</h1>
                <h1 className="pb-8 text-2xl">€{shoe.price}</h1>
              </div>
            </div>

            <div className="flex justify-center gap-2 w-full text-xl">
              <button className="rounded-full border bg-zinc-800 text-white p-4 w-1/2 hover:bg-zinc-600">
                <Link href="/cart">Proceed to Cart</Link>
              </button>

              <button
                onClick={closePopup}
                className="rounded-full border shadow-lg p-4 w-1/2 hover:bg-zinc-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden block">
        <div className="mt-10 flex flex-col justify-center items-center">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{shoe.name}</h1>
            <div className="text-xl">
              {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
              {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
              {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
            </div>
            <h1 className="mb-4 text-2xl">€{shoe.price}</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-full ml-1 mr-1 justify-center items-center text-center">
              <Image
                src={src}
                alt={shoe.name}
                width={500}
                height={500}
                loading="eager"
                className="shadow rounded-2xl object-contain"
              />
              <div className="absolute top-[150vw] left-2 opacity-75 p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                <button onClick={prevImg}>
                  <ArrowLeft fontSize="large" />
                </button>
              </div>
              <div className="absolute top-[150vw] right-2 opacity-75 p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                <button onClick={nextImg}>
                  <ArrowRight fontSize="large" />
                </button>
              </div>

              <div className="flex justify-center gap-4 m-4 ml-2 mr-2">
                <Image
                  src={"/" + shoe.name + "/main.png"}
                  alt={shoe.name}
                  width={100}
                  height={100}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[100px] object-cover"
                  onMouseEnter={pictureMain}
                />
                <Image
                  src={"/" + shoe.name + "/alt.png"}
                  alt={shoe.name}
                  width={100}
                  height={100}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[100px] object-cover"
                  onMouseEnter={pictureAlt}
                />
                <Image
                  src={"/" + shoe.name + "/shoe.png"}
                  alt={shoe.name}
                  width={100}
                  height={100}
                  loading="eager"
                  className="shadow rounded-lg hover:brightness-75 h-[100px] object-cover"
                  onMouseEnter={pictureShoe}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center m-4 text-xl">
            <h1 className="mt-10 text-2xl font-medium">Select Size</h1>
            <div className="grid grid-cols-3 gap-2 w-full m-4 text-xl">
              {sizes.map((size) =>
                size.chosen === false ? (
                  <button
                    onClick={() => chooseSize(size)}
                    className="border rounded-md p-3 shadow hover:border-black"
                  >
                    UK {size.size}
                  </button>
                ) : (
                  <button className="border rounded-md p-3 shadow border-black">
                    UK {size.size}
                  </button>
                )
              )}
            </div>

            <div className="mt-2 justify-center text-center">
              <h1 className={alert}>Please select a size.</h1>
              <button
                onClick={handleCart}
                className="bg-black text-white rounded-full shadow-lg w-96 p-4 hover:bg-zinc-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className={popup}>
          <div className="bg-white w-full m-auto mt-[20vh] border rounded-xl shadow-xl p-2 text-center">
            <h1 className="p-4 font-bold text-2xl">
              <Done /> Added to Cart
            </h1>

            <div className="flex justify-center gap-4">
              <div className="mt-4">
                <Image
                  src={"/" + shoe.name + "/main.png"}
                  alt={shoe.name}
                  width={150}
                  height={150}
                  loading="eager"
                  className="shadow rounded-lg h-[150px] object-cover"
                />
              </div>

              <div className="mt-2 flex flex-col gap-1 text-left">
                <h1 className="pt-4 text-2xl">{shoe.name}</h1>
                <div className="opacity-50 text-xl">
                  {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
                  {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
                  {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
                </div>
                <h1 className="opacity-50">Size UK {sizeChosen}</h1>
                <h1 className="pb-8 text-2xl">€{shoe.price}</h1>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2 w-full">
              <button className="rounded-full border bg-zinc-800 text-white p-4 w-1/2 hover:bg-zinc-600">
                <Link href="/cart">Proceed to Cart</Link>
              </button>

              <button
                onClick={closePopup}
                className="rounded-full border shadow-lg p-4 w-1/2 hover:bg-zinc-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* End */}
    </div>
  );
};

export default ShoePage;
