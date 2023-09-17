"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordShow, setPasswordShow] = useState("show");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

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

    setUsernameError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (username === "") {
      setUsernameError(true);
      return;
    } else if (password === "") {
      setPasswordError(true);
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }

    try {
      const resExistingUser = await fetch("/api/users/exists", {
        method: "POST",
        body: JSON.stringify({
          username: username,
        }),
      });

      const existingUser = await resExistingUser.json();

      console.log(existingUser);

      if (existingUser) {
        setUsernameError(true);
        return;
      }

      const res = await fetch("/api/users/new", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (res.ok) {
        const form = document.getElementById("signupForm");
        form.reset();
      }

      router.push("/signin");
    } catch (error) {
      console.log("Could not create new user!", error);
    }
  };

  return (
    <div className="mt-20">
      <form
        id="signupForm"
        className="flex flex-col gap-5 justify-center sm:w-[60vh] w-[90vw] m-auto border-2 shadow-lg p-10 rounded-2xl"
      >
        <h1 className="font-bold text-2xl">Sign up</h1>

        <div>
          <input
            placeholder="Username"
            className={`${
              usernameError === true ? "border-red-500" : "border-zinc-500"
            } border-2 rounded-md p-2 outline-none w-full`}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {usernameError === true ? (
            <p className="text-red-500">Username not available!</p>
          ) : (
            <></>
          )}
        </div>

        <div>
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
          {passwordError === true ? (
            <p className="text-red-500">Password required!</p>
          ) : (
            <></>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-2 border-zinc-500 rounded-md p-2 outline-none w-full"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {confirmPasswordError === true ? (
            <p className="text-red-500">Passwords do not match!</p>
          ) : (
            <></>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="text-center bg-zinc-800 text-white rounded-full shadow-lg w-full p-4 hover:bg-zinc-600"
        >
          Sign up
        </button>
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

export default SignUpForm;
