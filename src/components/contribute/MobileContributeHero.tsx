import React from "react";
import { IContributeHeroProps } from "../../types/contribute";

export default function MobileContributeHero({
  classes: {
    container = "",
    image = "",
    heading = "",
    subheading = "",
    paragraph = "",
  },
  contents,
}: IContributeHeroProps) {
  return (
    <div className="  sm:hidden w-[100%] xsm:mb-2 sm:mb-0 pt-9 md:pl-[30px] lg:pl-[30px] xlg:mr-[-45px] flex text-center md:text-right flex-col justify-center items-center uppercase">
      <div className="w-[100%] mb-0 sm:w-[100%] xlg:w-[80%] ">
        <h2 className="text-[1.3rem] xsm:text-[1.7rem] sm:text-[1.8rem]  font-BeVietnam md:mb-[-10px] text-gpgp-blue font-bold">
          {contents?.mobileheading1[0].text}
        </h2>
        <span
          className="md:pl-[4px] text-[1.1rem] xsm:text-[1.5rem] sm:text-[1.8rem] font-BeVietnam w-max text-white font-bold"
          style={{ WebkitTextStroke: "1px #0A2471" }}
        >
          {contents?.mobileheading2[0].text}
        </span>
      </div>

      <div className=" w-[100%] mt-[1px]  xlg:w-[80%] mb-[10px]">
        <h2 className="text-[1rem] xsm:text-[1.5rem] sm:text-[1.6rem]  font-BeVietnam  text-gpgp-blue font-bold">
          {contents?.mobileheading3[0].text}
        </h2>
       
      </div>
    </div>
  );
}
