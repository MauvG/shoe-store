"use client";

import { useEffect, useState } from "react";
import CartShoeCard from "./CartShoeCard";
import Checkout from "./Checkout";

const Cart = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8090/api/collections/cart/records")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p></p>;
  if (!data) return <p>No profile data</p>;

  let total = 0;
  for (let i = 0; i < data.items.length; i++) {
    total += data.items[i].price;
  }
  
  return (
    <div>
      {/* desktop */}
      <div className="hidden lg:flex mt-20 ml-40 mr-40">
        <div className="flex-[70%]">
          <div className="">
            <h1 className="text-xl font-bold">Your Cart</h1>
            <div className="flex flex-col gap-2 relative">
              {data.items.map((shoe) => (
                <div className="mt-4">
                  <CartShoeCard shoe={shoe} />
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[30%]">
          <Checkout total={total} />
        </div>
      </div>

      {/* medium */}
      <div className="lg:hidden max-sm:hidden flex flex-col mt-20 ml-40 mr-40">
        <div className="flex-[70%]">
          <div className="">
            <h1 className="text-xl font-bold">Your Cart</h1>
            <div className="flex flex-col gap-2 relative">
              {data.items.map((shoe) => (
                <div className="mt-4">
                  <CartShoeCard shoe={shoe} />
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[30%]">
          <Checkout total={total} />
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex flex-col mt-20 ml-10 mr-10">
        <div className="flex-[70%]">
          <div className="">
            <h1 className="text-xl font-bold">Your Cart</h1>
            <div className="flex flex-col gap-2 relative">
              {data.items.map((shoe) => (
                <div className="mt-4">
                  <CartShoeCard shoe={shoe} />
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[30%]">
          <Checkout total={total} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
