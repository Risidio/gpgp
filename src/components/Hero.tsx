import MyLink from "./base/MyLink";
import gpgpMapImage from "../assets/images/gpgp-map-mobile.png";
import Wrapper from "./layout/Wrapper";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <section className="pt-[48px] xl:pt-[unset]">
          {/* Container */}
          <div className="flex flex-col xl:flex-row xl:pl-[68px] ">
            {/* First Column */}
            <div className="px-[20px] xl:px-0 xl:w-[713.767px]">
              {/* Mobile Header */}
              <div className="xl:hidden">
                <h3 className="text-center text-[#050B1D] font-[be-vietnam-600] font-[600] uppercase text-[15px] leading-[22.126px] tracking-[1.65px]">
                  GPGP <br /> The Great Pacific Garbage Patch
                </h3>
              </div>

              {/* Image */}
              <div className="mt-[14px] flex flex-col justify-center items-center mx-auto xl:mx-0 w-[340px] md:w-[387.998px] xl:w-full xl:mt-0 h-[260.669px] xl:h-[479.531px] bg-gpgp-blue rounded-[15px] gpgp-home-map-shadow">
                <img
                  src={gpgpMapImage}
                  alt="GPGP Map"
                  className="w-[312.584px] xl:w-[575.035px] xl:h-auto h-auto flex-shrink-0"
                />
              </div>
            </div>

            {/* Second Column */}

            <div className="pt-[31.33px] xl:pt-0 xl:w-auto xl:ml-[49.23px]">
              {/* Container */}
              <div className="flex flex-col text-center xl:text-left xl:w-[584px]">
                <h3 className="hidden xl:block font-[be-vietnam-normal-600] text-[20px] leading-[29.502px] tracking-[3px] uppercase">
                  The Great Pacific Garbage Patch | GPGP
                </h3>
                <div className="m-0 p-0 w-[371px] xl:mt-[10px] xl:w-[441.693px] mx-auto xl:mx-0 leading-[28.8px] xl:leading-[57.6px] tracking-[1.2px] xl:tracking-[unset]">
                  <h3 className="text-[24px] xl:text-[48px] uppercase font-[be-vietnam-700] text-gpgp-blue">
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
                <h3 className="xl:w-[313px] capitalize mt-[25px] xl:mt-[17px] text-[#050B1D] text-[16px] xl:text-[20px] font-[be-vietnam-normal-400] leading-[19.2px] xl:leading-[29.502px] tracking-[0.8px] xl:tracking-[unset]">
                  The art inspiring global action
                </h3>
                {/* Button Container */}
                <div className="flex flex-row justify-center xl:justify-start gap-x-[12px] px-[19px] xl:px-0 mt-[30px] xl:mt-[43px]">
                  {/* Explore Btn */}
                  <MyLink
                    to=""
                    className="xl:hidden w-[187px] h-[40px] xl:w-[245.63px] xl:h-[63px] bg-white rounded-[2px] xl:rounded-[5px] shrink-0"
                  >
                    <p className="text-gpgp-blue xl:w-[92.526px] text-center text-[15px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[22.126px] xl:leading-[23.602px] tracking-[4.125px] xl:tracking-[4.4px]">
                      Explore
                    </p>
                  </MyLink>

                  <MyLink
                    to="/contribute"
                    className="w-[187px] h-[40px] xl:w-[245.63px] xl:h-[63px] bg-gpgp-blue rounded-[2px] xl:rounded-[5px] shrink-0"
                  >
                    <p className="text-white xl:w-[92.526px] text-center text-[15px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[22.126px] xl:leading-[23.602px] tracking-[4.125px] xl:tracking-[4.4px]">
                      Join Us
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
