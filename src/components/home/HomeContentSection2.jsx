import React from "react";

const HomeContentSection2 = ({ MyLink, contents }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-[127px] lg:mt-[293px] gap-x-[121px] justify-center">
        {/* First Column */}
        <div className="flex flex-col gap-y-[32px] lg:max-w-[582px] lg:h-[582px] lg:order-2">
          {/* Header */}
          <h3 className="text-center lg:hidden font-[be-vietnam-600] text-[16px] text-[#050B1D] leading-[48px] tracking-[-0.32px] uppercase">
          {contents?.title2[0]?.text}
          </h3>

          {/* Image */}
          <div className="mx-auto lg:h-[100%] ">
            <img
              src={contents?.image4?.url}
              alt="Challenge"
              className="lg:hidden w-[190px] h-[190px] lg:w-[582px] lg:h-[582px] lg:rounded-[20px]"
            />
            <img
              src={contents?.image2?.url}
              alt="Challenge"
              className="hidden lg:block w-[190px] h-[190px] lg:w-[100%] lg:h-[100%]  lg:rounded-[20px] flex-shrink-0"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="mt-[29px] w-[288px] lg:w-[484px] lg:mt-0 flex flex-col justify-center items-center lg:items-start lg:order-1 mx-auto lg:mx-[unset]">
          <div className=" flex flex-col gap-y-[59px]">
            <h3 className="hidden lg:block text-gpgp-black font-[be-vietnam] bold-600 text-[40px] leading-[48px] tracking-[-0.8px]">
            {contents?.title2[0]?.text}
              
            </h3>

            <p className="text-center lg:text-left text-[15px] lg:text-[16px] leading-[30px] lg:leading-[32px] mx-auto lg:mx-0 text-[#050B1D] font-[be-vietnam]">
            {contents?.description2[0]?.text}
            {contents?.description2[1]?.text} 
            </p>
          </div>

          {/* Join Us Btn */}
          <div className="flex flex-row gap-x-[12px] px-[19px] lg:px-0 mt-[35px] lg:mt-[59px]">
            <MyLink
              to="/challenge"
              className="bg-gpgp-blue lg:bg-white w-[187px] h-[40px] lg:w-[223px] lg:h-[63px]"
            >
              <p className="text-white lg:text-gpgp-blue text-[15px] lg:text-[16px] uppercase leading-[22.126px] lg:leading-[23.602px] font-[be-vietnam-600] tracking-[4.125px] lg:tracking-[4.4px]">
                <span className="">{contents?.button3[0]?.text}</span>
              </p>
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContentSection2;
