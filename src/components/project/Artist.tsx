import React from "react";
import Wrapper from "../layout/Wrapper";
import { IHomeArtistProp } from "../../types/home";

const Artist = ({ contents }: IHomeArtistProp) => {
  return (
    <Wrapper>
      <div
        className={`flex flex-col justify-center items-center max-w-[289px] lg:w-[522px] mx-auto`}
      >
        <div className="text-[#050B1D] text-[16px] text-center font-[be-vietnam] font-semibold uppercase leading-[48px] tracking-[0.32px]">
          {contents?.title[0]?.text}
        </div>

        <div className="p-0 m-0">
          <img
            src={contents?.image?.url}
            alt={contents?.image?.alt}
            className="w-[163.64px] md:w-[299px] h-auto"
          />
        </div>

        <p className="w-full mt-[28px] text-center text-[#050B1D] text-[15px] font-[be-vietnam-normal-400] leading-[30px]">
          {contents?.description[0]?.text}
        </p>
      </div>
    </Wrapper>
  );
};

export default Artist;
