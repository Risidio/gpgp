import MyLink from "./base/MyLink";
import gpgpMapImage from "../assets/images/gpgp-map-mobile.png";

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col pb-[35px] pt-[48px] xl:pt-[80px] xl:flex-row xl:gap-x-[49px] xl:pl-[68px]">
          {/* Image */}
          <div className="flex flex-col gap-y-[14px] pb-[31.33px]">
            <h3 className="xl:hidden text-center uppercase font-[be-vietnam-semibold] text-[15px] leading-[147.51%] tracking-[1.65px]">
              GPGP
              <br />
              The Great Pacific Garbage Patch
            </h3>
            <div className="bg-gpgp-blue flex justify-center items-center mx-[19px] py-[31.7px] px-[37px] rounded-[15px] md:w-[387px] md:h-[260px] md:mx-auto xl:w-[700px] xl:h-[480px]">
              <img
                src={gpgpMapImage}
                alt={gpgpMapImage}
                className="w-[313px] h-[185px] xl:w-[575px] xl:h-[342px]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* About John */}
            <div className="flex flex-col gap-y-[25px] xl:gap-y-[0px]">
              <h3 className="hidden xl:block text-[20px] leading-[29.50px] tracking-[3px] font-[be-vietnam-bold]">GPGP <br/>The Great Pacific Garbage Patch</h3>
              <h1 className="w-[371px] mx-auto text-center text-gpgp-blue uppercase leading-[28.8px] tracking-[1.2px] font-[be-vietnam-bold] text-[24px] xl:text-[48px] xl:leading-[57.6px] xl:w-[442px] xl:text-left xl:mt-[10px] xl:tracking-[3px]">
                Art Project by Environmental artist <br/>john Dahlsen & InfinArt{" "}
              </h1>
              <p className="font-[be-vietnam-semibold] text-center capitalize leading-[19.2px] tracking-[0.8px] text-[16px] xl:text-left xl:text-[20px] xl:leading-[29.50px] xl:mt-[17px]">
                The art inspiring global action
              </p>
            </div>

            {/* Button */}
            <div className="mt-[30px] mx-[19px] xl:mx-0 xl:mt-[35px]">
              <div className="flex justify-center items-center xl:justify-start xl:items-end gap-x-[12px]">
                {/* Explore */}
                <MyLink to="" className="w-[187px] xl:hidden">
                  <p className="px-[10px] py-[9px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.13px] uppercase text-gpgp-blue text-[15px]">
                    Explore
                  </p>
                </MyLink>

                {/* Join Us */}
                <MyLink to="" className="w-[187px] bg-gpgp-blue">
                  <p className="px-[10px] py-[9px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.13px] uppercase text-white text-[15px] xl:text-[16px]">
                    Join Us
                  </p>
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
