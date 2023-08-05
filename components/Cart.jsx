"use client";

import { useEffect, useState } from "react";
import CartShoeCard from "./CartShoeCard";

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

  return (
    <div>
      <div className="flex m-20">
        <div className="flex-[60%] h-96">
          <div className="">
            <h1 className="text-xl font-bold">Your Cart</h1>
            <div className="flex flex-col gap-2">
              {data.items.map((shoe) => (
                <div className="mt-4">
                  <CartShoeCard shoe={shoe} />
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[40%] h-96 border"></div>
      </div>
    </div>
  );
};

export default Cart;
