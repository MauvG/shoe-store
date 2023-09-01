"use client";

import { useState } from "react";

const Checkout = ({ total }) => {
  const [promoUsed, setPromoUsed] = useState(false);
  const [textClass, setTextClass] = useState("border rounded-full pl-4 w-1/2");
  const [errorClass, setErrorClass] = useState("hidden");
  const [codeApplied, setCodeApplied] = useState("hidden");
  const [subtotal, setSubtotal] = useState(Math.round(total * 100) / 100);

  const handlePromo = () => {
    let promo = document.getElementById("promo").value;
    promo = promo.toLowerCase();

    if (promo == "launch") {
      setPromoUsed(true);
      setTextClass("border rounded-full pl-4 w-1/2");
      setErrorClass("hidden");
      setCodeApplied("text-green-500");

      setSubtotal(Math.round(total * 0.9 * 100) / 100);
    } else {
      setPromoUsed(false);
      setTextClass("border border-red-600 rounded-full pl-4 w-1/2");
      setErrorClass("text-red-600");
      setCodeApplied("hidden");

      setSubtotal(Math.round(total * 100) / 100);
    }
  };

  return (
    <div className="p-4  border rounded-2xl">
      <h1 className="text-2xl pb-8 font-bold">Summary</h1>

      <h1 className=" ">Have a promo code?</h1>
      <div className="flex justify-between gap-2">
        <input id="promo" placeholder="Enter promo" className={textClass} />
        <button
          onClick={handlePromo}
          className="w-1/2 bg-black text-white rounded-full shadow-lg p-2 hover:bg-zinc-600"
        >
          Apply code
        </button>
      </div>
      <h1 className={errorClass}>Invalid promo code</h1>

      <br className="pb-8" />

      <div className="flex justify-between">
        <h1 className="">Subtotal</h1>
        <h1>€{subtotal}</h1>
      </div>

      <div className={codeApplied}>
        <div className="flex justify-between">
          <h1 className="">Promo code applied</h1>
          <h1>-10%</h1>
        </div>
      </div>

      <div className="flex justify-between">
        <h1 className="">Delivery Cost</h1>
        <h1>€5.00</h1>
      </div>

      <hr className="mt-4 mb-4" />

      <div className="flex justify-between">
        <h1 className="">Total</h1>
        <h1>€{subtotal + 5}</h1>
      </div>

      <hr className="mt-4 mb-4" />

      <button className="w-full bg-black text-white rounded-full shadow-lg p-3 hover:bg-zinc-600">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
