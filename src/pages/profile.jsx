import React from "react";
import useLogin from "../hooks/useLogin";

export default function ProfilePage() {
  const username = useLogin(); // Login Token

  const onScroll = () => {};
  return (
    <div className="bg-black text-white overflow-x-auto snap-x  whitespace-nowrap    ">
      <span className="h-screen w-screen text-black bg-white flex justify-center items-center  ">
        Lorem
      </span>
      <span className=" h-screen w-screen flex justify-center items-center ">
        ipsum
      </span>
    </div>
  );
}
