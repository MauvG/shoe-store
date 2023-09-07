import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="m-auto h-[50%]">
      <Image
        src="/loading.gif"
        width={100}
        height={100}
        alt="loading"
        priority
      />
    </div>
  );
};

export default Loading;
