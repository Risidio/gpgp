import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const Exhibition = () => {
  return (
    <>
      <section className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave md:bg-project-page-wave bg-no-repeat bg-cover lg:mt-[29.47px]">
        <div className="pt-[100px] xsm:pt-[120px] xsm:pb-[40px] md:pt-[220px] lg:pt-[386px] pb-[33px] lg:pb-[190.17px]">
          {/* Exhibition Context */}
          <div className="flex flex-col gap-y-[13px] lg:gap-y-[70.05px]">
            <h1 className="lg:w-[262px] lg:h-[48.036px] font-[be-vietnam] bold-600 leading-[48px] tracking-[-0.32px] lg:tracking-[-0.8px] uppercase text-center text-[16px] text-white lg:text-[40px] lg:capitalize lg:mx-[auto]">
              The Exhibition
            </h1>
            <p className="w-[293px] text-center mx-auto font-[be-vietnam] lg:font-[400] text-white leading-[30px] lg:leading-[32px] text-[15px] lg:text-[16px] lg:w-[532px]  lg:mx-auto">
              The Great Pacific Garbage Patch (GPGP) environmental art project
              comprises 2450 tiles, representing a recent satellite image of the
              Great Pacific Garbage Patch and draws attention to the issue of
              plastic litter in the oceans, particularly the major garbage
              patches.
            </p>
          </div>

          <div className="hidden md:block lg:pt-[83px] lg:pb-[79.06px]">
            <NftCarousel />
          </div>

          {/* Exhibition Button */}
          <div className="flex flex-col justify-center items-center mt-[39px] lg:mt-0">
            <MyLink
              to="/gallery"
              className="w-[189px] h-[40px] lg:w-[223px] lg:h-[63px] bg-white rounded-[2px] shrink-0"
            >
              <p className="text-gpgp-blue text-center text-[15px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[22.126px] lg:leading-[23.602px] tracking-[4.125px] xl:tracking-[4.4px]">
                <span className="hidden lg:inline">See all</span>
                <span className="lg:hidden">Gallery</span>
              </p>
            </MyLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exhibition;
