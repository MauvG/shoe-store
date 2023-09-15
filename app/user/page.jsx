"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  return (
    <div className="items-center text-center m-20">
      <h1>
        Username: <span className="font-bold">{session?.user?.username}</span>
      </h1>

      <button
        onClick={() => signOut()}
        className="rounded-full p-2 pl-4 pr-4 bg-cyan-600 text-white font-bold"
      >
        Sign out
      </button>
    </div>
  );
};

export default page;
