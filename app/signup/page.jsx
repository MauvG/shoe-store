"use client";

import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordShow, setPasswordShow] = useState("show");

  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordShow("hide");
    } else {
      setPasswordType("password");
      setPasswordShow("show");
    }
  };
  return (
    <div className="mt-20">
      <form
        action="/"
        className="flex flex-col gap-5 justify-center sm:w-[60vh] w-[90vw] m-auto border-2 shadow-lg p-10 rounded-2xl"
      >
        <h1 className="font-bold text-2xl">Sign up</h1>
        <input
          placeholder="Username"
          className="border-2 border-zinc-500 rounded-md p-2 outline-none"
        />

        <div className="flex justify-between border-2 p-2 border-zinc-500 rounded-md">
          <input
            placeholder="Password"
            type={passwordType}
            className="w-full outline-none"
          />
          <p
            onClick={handlePasswordType}
            className="hover:underline underline-offset-4 pr-2"
          >
            {passwordShow}
          </p>
        </div>

        <input
          type="password"
          placeholder="Confirm Password"
          className="border-2 border-zinc-500 rounded-md p-2 outline-none"
        />

        <input
          type="submit"
          value="Sign in"
          className="bg-zinc-800 text-white rounded-full shadow-lg w-full p-4 hover:bg-zinc-600"
        />
      </form>

      <div className="flex font-medium gap-2 justify-center m-5">
        <h1>Already have an account?</h1>
        <Link
          href="/signin"
          className="hover:underline underline-offset-4 text-cyan-600"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default page;
