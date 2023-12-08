import MyLink from "./base/MyLink";
import gpgpMapImage from "../assets/images/gpgp-map-mobile.png";

const Hero = () => {
  return (
    <>
      <section className="pt-[48px] pb-[35px]">
        {/* Container */}
        <div className="flex flex-col xl:flex-row">
          {/* First Column */}
          <div className="px-[20px] xl:px-0 xl:pl-[68px] xl:w-full">
            {/* Mobile Header */}
            <div className="xl:hidden">
              <h3 className="text-center text-[#050B1D] font-[be-vietnam-600] font-[600] uppercase text-[15px] leading-[22.126px] tracking-[1.65px]">
                GPGP <br /> The Great Pacific Garbage Patch
              </h3>
            </div>

            {/* Image */}
            <div className="mt-[14px] w-[340px] md:w-[350] xl:w-full mx-auto xl:mx-0 xl:mt-0 h-[260.669px] xl:h-[479.531px] bg-gpgp-blue rounded-[15px] gpgp-home-map-shadow px-[37px] xl:px-[69px] py-[40px] xl:py-[69px]">
              <img
                src={gpgpMapImage}
                alt="GPGP Map"
                className="w-[312.584px] xl:w-[575.035px] xl:h-[341.804px] h-[185.802px] flex-shrink-0"
              />
            </div>
          </div>

          {/* Second Column */}

          <div className="pt-[31.33px] xl:pt-0 xl:w-full xl:pl-[49.23px]">
            {/* Container */}
            <div className="flex flex-col text-center xl:text-left gap-y-[25px]">
              <h3 className="hidden xl:block font-[be-vietnam-600] text-[20px] leading-[29.502px] tracking-[3px] uppercase">The Great Pacific Garbage Patch | GPGP</h3>
              <div className="m-0 p-0 w-[371px] xl:w-[441.693px] mx-auto xl:mx-0 leading-[28.8px] xl:leading-[57.6px] tracking-[1.2px]">
                <h3 className="text-[24px] xl:text-[48px] uppercase font-[be-vietnam-600] text-gpgp-blue">
                  Art Project by <span className="text-white header-text-stroke ">Environmental artist</span> <br/>john Dahlsen <span className="text-white header-text-stroke">&</span> InfinArt
                </h3>
                {/* <h3 className="uppercase font-[be-vietnam-600] text-gpgp-blue">
                  Art Project by Environmental artist john Dahlsen & InfinArt
                </h3> */}
              </div>
              <h3 className="capitalize text-[#050B1D] text-[16px] xl:text-[20px] font-[be-vietnam-600] leading-[19.2px] xl:leading-[29.502px] tracking-[0.8px]">The art inspiring global action</h3>
              {/* Button Container */}
              <div className="flex flex-row justify-center xl:justify-start gap-x-[12px] px-[19px] xl:px-0 mt-[5px] xl:mt-[13px]">
                {/* Explore Btn */}
                <MyLink to="" className="bg-white w-[187px] xl:hidden">
                  <p className="text-gpgp-blue uppercase leading-[22.126px] font-[be-vietnam-600] tracking-[4.125px] py-[9px]">Explore</p>
                </MyLink>
                {/* Join Us Btn */}
                <MyLink to="" className="bg-gpgp-blue w-[187px] xl:w-[245.63px]">
                  <p className="text-white uppercase leading-[22.126px] xl:leading-[23.602px] font-[be-vietnam-600] tracking-[4.125px] xl:tracking-[4.4px] py-[9px]">Join Us</p>
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
