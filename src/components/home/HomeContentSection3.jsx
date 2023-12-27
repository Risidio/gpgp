import React from "react";

const HomeContentSection3 = ({ InvitationImg, MyLink }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mb-[50px] lg:mb-0 mt-[127px] lg:mt-[293px] lg:gap-[121px] justify-center">
        {/* First Column */}
        <div className="flex flex-col gap-y-[32px] lg:max-w-[583.489px] lg:h-[335.281px] lg:mt-[20px]">
          {/* Header */}
          <h3 className="text-center lg:hidden font-[be-vietnam-600] text-[16px] text-[#050B1D] leading-[48px] tracking-[-0.32px] uppercase">
            The Invitation
          </h3>

          {/* Image */}
          <div className="mx-auto lg:h-[100%]">
            <img
              src={InvitationImg}
              alt="GPGP Map"
              className="w-[293px] h-[169px] lg:w-[100%] lg:h-[100%] rounded-[20px]"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="mt-[29px] lg:mt-[unset] w-[288px] lg:w-[484px]  flex flex-col justify-center items-center lg:items-start mx-auto">
          <div className=" flex flex-col gap-y-[62px]">
            <h3 className="hidden lg:block text-gpgp-black font-[be-vietnam] bold-600 text-[40px] leading-[48px] tracking-[-0.8px] uppercase lg:capitalize">
              The Invitation
            </h3>

            <p className="text-center lg:text-left text-[15px] lg:text-[16px] leading-[30px] lg:leading-[32px] mx-auto lg:mx-0 text-[#050B1D] font-[be-vietnam]">
              The Great Pacific Garbage Patch offers a unique opportunity to
              channel your artistic talents towards a project. Artists of all
              form - painters, sculptors, photographers are invited to submit
              their works for consideration.
            </p>
          </div>

          {/* Join Us Btn */}
          <div className="flex flex-row gap-x-[12px] px-[19px] lg:px-0 mt-[35px] lg:mt-[65px]">
            <MyLink
              to="/contribute"
              className="bg-gpgp-blue lg:bg-white w-[187px] h-[40px] lg:w-[223px] lg:h-[63px]"
            >
              <p className="text-white lg:text-gpgp-blue text-[15px] lg:text-[16px] uppercase leading-[22.126px] lg:leading-[23.602px] font-[be-vietnam-600] tracking-[4.125px] lg:tracking-[4.4px]">
                <span className="">Take Part</span>
              </p>
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContentSection3;
