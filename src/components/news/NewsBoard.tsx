import React from "react";

export default function NewsBoard() {
  return (
    <div className="group relative py-10 ">
      <img
        src={require("../../assets/images/news/main-news3.png")}
        alt=""
        className="w-full   object-cover "
      />
      <span className="absolute bottom-[55px] left-[14px] text-[1rem] md:bottom-[90px] md:left-[30px] md:text-[1.5rem] drop-shadow-sm font-semibold text-white p-2 z-50">
        The Tide of Plastic: A Growing Threat The Tide of Plastic: A Growing
        Threat
      </span>
    </div>
  );
}
