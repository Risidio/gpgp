import React from 'react'
import Wrapper from '../layout/Wrapper'
// import JDFrame from "../../assets/images/JD-Frame.png"
import { IHomeArtistProp } from '../../types/home'

const Artist = ({contents}:IHomeArtistProp) => {
  return (
    <Wrapper>
        <div
        className={`flex flex-col justify-center items-center max-w-[289px] lg:w-[522px] mx-auto`}
      >
        <div className="text-[#050B1D] text-[16px] text-center font-[be-vietnam] font-semibold uppercase leading-[48px] tracking-[0.32px]">
        {/* <h1 className="text-[#050B1D] text-center font-[be-vietnam] bold-600 text-[16px] lg:text-[40px] leading-[48px] tracking-[0.32px] lg:tracking-[0.8px]">
            John Dahlsen
          </h1> */}
        The Artist
        </div>

        <div className="p-0 m-0">
          <img
        //     src={JDFrame}
            src={contents?.image?.url}
            alt="John Dahlsen"
            className="w-[163.64px] md:w-[299px] h-auto"
          />
        </div>

        <div className="hidden flex flex-col text-[#050B1D]  text-center font-[be-vietnam]">
          <span className="text-[16px] md:text-[40px] font-semibold leading-[48px] tracking-[-0,32px] md:tracking-[-0.8px]">
            {contents?.name[0]?.text}
          </span>
          <span className="text-[16px] leading-[23.602px] tracking-[0.432px] md:tracking-[4.4px] uppercase font-Inter font-[700] md:mt-[8px]">
          {contents?.title[0]?.text}
          </span>
        </div>

        <p className="w-full mt-[28px] text-center text-[#050B1D] text-[15px] font-[be-vietnam-normal-400] leading-[30px]">
          {contents?.description[0]?.text}
        </p>

        {/* <div className="">
          <MyLink
            to="/project"
            className="w-[234px] lg:w-[332px] h-[40px] lg:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mt-[36px] lg:mt-[70px]"
          >
            <p className="text-white text-center text-[15px] text-[16px] uppercase font-[be-vietnam] bold-700 leading-[22.126px] lg:leading-[23.602px] tracking-[4.125px] lg:tracking-[4.4px]">
              Find out more
            </p>
          </MyLink>
        </div> */}
      </div>
    </Wrapper>
  )
}

export default Artist