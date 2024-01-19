import React from "react";
import { IHomeWaveProp } from "../../types/home";

const Wave = ({contents}: IHomeWaveProp) => {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[110px] pb-[57px] font-[be-vietnam] bold-600">
        <h1 className="text-white text-[16px] uppercase text-center leading-[23.602px]">
          {contents?.heading1[0]?.text}<br />
          {contents?.heading2[0]?.text}
        </h1>
      </div>
    </>
  );
};

export default Wave;
