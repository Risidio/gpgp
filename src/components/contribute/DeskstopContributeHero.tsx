import React from 'react'
import { IContributeHeroProps } from '../../types/contribute'

export default function DeskstopContributeHero({
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
    <div className="w-[55%] xsm:mb-2 sm:mb-0 pt-3 md:pl-[30px] lg:pl-[30px] xlg:mr-[-45px] hidden sm:flex text-center md:text-right flex-col justify-center items-center uppercase">
            <div className="w-[110%] mb-0 sm:w-[100%] xlg:w-[80%] ">
              <h2 className="text-[1.3rem] xsm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-BeVietnam xl:text-[3rem] xxl:text-[3.5rem] xxxl:text-[4rem] xxxxl:text-[4.3rem] md:mb-[-10px] text-gpgp-blue font-extrabold">
                {contents?.heading1[0].text}
              </h2>
              <span
                className="md:pl-[4px] text-[1.1rem] xsm:text-[1.2rem] font-BeVietnam md:text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] xxl:text-[3rem] xxxl:text-[3.5rem] xxxxl:text-[4rem] w-max text-white font-bold"
                style={{ WebkitTextStroke: "1px #0A2471" }}
              >
                {contents?.heading2[0].text}
              </span>
            </div>

            <div className=" w-[100%] mt-[-12px] xlg:w-[80%] mb-[10px]">
              <h2 className="text-[2rem] xsm:text-[3rem] md:text-[4rem] font-BeVietnam sm:tracking-[5px] lg:text-[5rem] xl:text-[6.5rem] xxl:text-[6.5rem] xxxl:text-[7rem] md:mb-[-20px] text-gpgp-blue font-extrabold">
                {contents?.heading3[0].text}
              </h2>
              <span
                className=" md:pl-[4px] text-[1.5rem] xsm:text-[1.4rem] font-BeVietnam md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] xxl:text-[3.5rem] xxxl:text-[3.5rem] text-white font-bold "
                style={{ WebkitTextStroke: "1px #0A2471" }}
              >
                {contents?.heading4[0].text}
              </span>
            </div>
          </div>
  )
}
