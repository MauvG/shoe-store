"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordShow, setPasswordShow] = useState("show");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordShow("hide");
    } else {
      setPasswordType("password");
      setPasswordShow("show");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("Invalid username or password!");
      return;
    }

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid username or password!");
        return;
      }

      router.replace("/user");
    } catch (error) {
      console.log("Could not sign in!", error);
    }
  };

  return (
    <div className="mt-20">
      <form className="flex flex-col gap-5 justify-center sm:w-[60vh] w-[90vw] m-auto border-2 shadow-lg p-10 rounded-2xl">
        <h1 className="font-bold text-2xl">Sign in</h1>
        <input
          placeholder="Username"
          className="border-2 border-zinc-500 rounded-md p-2 outline-none"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <div className="flex justify-between border-2 p-2 border-zinc-500 rounded-md">
          <input
            placeholder="Password"
            type={passwordType}
            className="w-full outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p
            onClick={handlePasswordType}
            className="hover:underline underline-offset-4 pr-2"
          >
            {passwordShow}
          </p>
        </div>

        <div>
          <h1 className="text-red-500">{error}</h1>
        </div>

        <Link
          href="forgotpassword"
          className="hover:underline underline-offset-4 text-cyan-600 font-bold"
        >
          Forgot password?
        </Link>

        <button
          onClick={handleSubmit}
          className="bg-zinc-800 text-white rounded-full shadow-lg w-full p-4 hover:bg-zinc-600"
        >
          Sign in
        </button>
      </form>

      <div className="flex font-medium gap-2 justify-center m-5">
        <h1>Dont have an accout?</h1>
        <Link
          href="/signup"
          className="hover:underline underline-offset-4 text-cyan-600"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default page;
