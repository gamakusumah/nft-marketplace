import React from "react";

export default function TabBar() {
  return (
    <section className="container h-[70px]">
      <div className="h-[60px] grid grid-cols-2 text-caption font-semibold w-full">
        <button className="cursor-pointer hover:bg-sec lg:text-lg text-white border-b-2 border-caption">
          NFTs
          <span className="font-mono bg-caption rounded-[20px] px-[10px] py-[5px] ml-4 hidden md:inline-block">
            302
          </span>
        </button>
        <button className="cursor-pointer hover:bg-sec lg:text-lg">
          Collections
          <span className="font-mono bg-sec text-white rounded-[20px] px-[10px] py-[5px] ml-4 hidden md:inline-block">
            48
          </span>
        </button>
      </div>
    </section>
  );
}
