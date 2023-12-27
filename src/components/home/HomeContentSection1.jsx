import React from "react";

const HomeContentSection1 = ({ ProjectImg, MyLink }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-[127px] lg:mt-[298px] justify-center gap-x-[121px]">
        {/* First Column */}
        <div className="flex flex-col gap-y-[32px] lg:max-w-[582px] lg:h-[582px] ">
          {/* Header */}
          <h3 className="text-center lg:hidden font-[be-vietnam-600] text-[16px] text-[#050B1D] leading-[48px] tracking-[-0.32px] uppercase">
            The Project
          </h3>

          {/* Image */}
          <div className="mx-auto ">
            <img
              src={ProjectImg}
              alt="GPGP Blue"
              className="lg:hidden w-[190px] h-[190px] lg:w-[582px] lg:h-[582px] lg:rounded-[20px]"
            />
            <img
              src={ProjectImg}
              alt="GPGP Blue"
              className="hidden lg:block w-[190px] h-[190px] lg:w-[100%] lg:h-[100%]  lg:rounded-[20px] flex-shrink-0"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="mt-[29px] w-[288px] lg:w-[484px] lg:mt-0 flex flex-col justify-center items-center lg:items-start mx-auto lg:mx-[unset]">
          <div className=" flex flex-col gap-y-[62px]">
            <h3 className="hidden lg:block text-gpgp-black font-[be-vietnam] bold-600 text-[40px] leading-[48px] tracking-[-0.8px]">
              The Project
            </h3>

            <p className="text-center lg:text-left text-[15px] lg:text-[16px] leading-[30px] lg:leading-[32px]  mx-auto lg:mx-0 text-[#050B1D] font-[be-vietnam]">
              The GPGP project is an immersive and transformative exhibition
              that aims to raise awareness, inspire action, and drive positive
              change regarding plastic pollution, with a specific focus on the
              Great Pacific Garbage Patch.
            </p>
          </div>

          {/* Join Us Btn */}
          <div className="flex flex-row gap-x-[12px] px-[19px] lg:px-0 mt-[35px] lg:mt-[62px]">
            <MyLink
              to="/project"
              className="bg-gpgp-blue lg:bg-white w-[187px] h-[40px] lg:w-[223px] lg:h-[63px]"
            >
              <p className="text-white text-[15px] lg:text-[16px] xl:text-gpgp-blue uppercase leading-[22.126px] xl:leading-[23.602px] font-[be-vietnam-600] tracking-[4.125px] xl:tracking-[4.4px]">
                <span className="hidden lg:flex">Explore</span>
                <span className="lg:hidden">Learn More</span>
              </p>
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContentSection1;
