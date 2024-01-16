import MyLink from "./base/MyLink";
import gpgpMapImage from "../assets/images/gpgp-map-mobile.png";
import Wrapper from "./layout/Wrapper";
import { IHomeHeroSectionProp } from "../types/home";

const Hero = ({contents}:IHomeHeroSectionProp) => {
  
  return (
    <>
      <Wrapper>
        <section className="pt-[48px] lg:pt-[unset]">
          {/* Container */}
          <div className="flex flex-col lg:flex-row justify-center">
            {/* First Column */}
            <div className="px-[20px] lg:px-0 lg:max-w-[713.767px]">
              {/* Mobile Header */}
              <div className="lg:hidden">
                <h3 className="text-center text-[#050B1D] font-[be-vietnam] font-[600] uppercase text-[15px] leading-[22.126px] tracking-[1.65px]">
                  GPGP <br /> The Great Pacific Garbage Patch
                </h3>
              </div>

              {/* Image */}
              <div className="mt-[14px] flex flex-col justify-center items-center mx-auto lg:mx-0 max-w-[340px] md:max-w-[387.998px] lg:max-w-full lg:mt-0 h-[260.669px] lg:h-[479.531px] bg-gpgp-blue rounded-[15px] gpgp-home-map-shadow lg:px-[68px]">
                <img
                  src={gpgpMapImage}
                  alt="GPGP Map"
                  className="w-[312.584px] lg:w-[575.035px] h-auto flex-shrink-0"
                />
              </div>
            </div>

            {/* Second Column */}

            <div className="pt-[31.33px] lg:pt-0 lg:w-auto lg:ml-[49.23px]">
              {/* Container */}
              <div className="flex flex-col text-center lg:text-left lg:max-w-[584px]">
                <h3 className="hidden lg:block text-[#050B1D] font-[be-vietnam] font-[600] text-[20px] leading-[29.502px] tracking-[3px] uppercase">
                  {contents?.title[0]?.text}
                </h3>
                <div className="m-0 p-0 max-w-[340px] lg:max-w-[441.693px] lg:mt-[10px]  mx-auto lg:mx-0 leading-[28.8px] lg:leading-[57.6px] tracking-[1.2px] lg:tracking-[unset]">
                  <h3 className="text-[24px] lg:text-[48px] uppercase font-be-vietnam font-[700] text-gpgp-blue">
                    Art Project by{" "}
                    <span className="text-white header-text-stroke">
                      Environmental artist
                    </span>{" "}
                    <br />
                    john Dahlsen{" "}
                    <span className="text-white header-text-stroke">
                      &
                    </span>{" "}
                    InfinArt
                  </h3>
                </div>
                <h3 className="lg:w-[313px] capitalize mt-[25px] md:mt-[10px] xxl:mt-[17px] text-[#050B1D] text-[16px] lg:text-[20px] font-[be-vietnam-normal-400] leading-[19.2px] lg:leading-[29.502px] tracking-[0.8px] lg:tracking-[unset]">
                  The art inspiring global action
                </h3>
                {/* Button Container */}
                <div className="flex flex-row justify-center lg:justify-start gap-x-[12px] px-[19px] lg:px-0 mt-[30px] md:mt-[20px] xxl:mt-[43px]">
                  {/* Explore Btn */}
                  <MyLink
                    to=""
                    className="lg:hidden xxsm:w-[110px] xsm:w-[150px] sm:w-[187px] lg:w-[245.63px] h-[40px] lg:h-[63px] bg-white rounded-[2px] lg:rounded-[5px] shrink-0"
                  >
                    <p className="text-gpgp-blue lg:w-[92.526px] text-center text-[15px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[22.126px] lg:leading-[23.602px] tracking-[4.125px] lg:tracking-[4.4px]">
                      Explore
                    </p>
                  </MyLink>

                  <MyLink
                    to="/contribute"
                    className="xxsm:w-[110px] xsm:w-[150px] sm:w-[187px] lg:w-[245.63px] h-[40px] lg:h-[63px] bg-gpgp-blue rounded-[2px] lg:rounded-[5px] shrink-0"
                  >
                    <p className="text-white lg:w-[92.526px] text-center text-[15px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[22.126px] lg:leading-[23.602px] tracking-[4.125px] lg:tracking-[4.4px]">
                      {contents?.buton[0]?.text}
                    </p>
                  </MyLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Hero;
