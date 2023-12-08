import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const Exhibition = () => {
  return (
    <>
      <section className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave md:bg-project-page-wave bg-no-repeat bg-cover">
        <div className="pt-[100px] xsm:pt-[120px] xsm:pb-[40px] md:pt-[220px] xl:pt-[386px] pb-[33px] md:pb-[68px] xl:pb-[130px]">
          {/* Exhibition Context */}
          <div className="flex flex-col gap-y-[13px] xl:gap-y-[60px]">
            <h1 className="font-[be-vietnam-bold] leading-[48px] tracking-[-0.32px] uppercase text-center text-[16px] text-white xl:text-[40px] xl:capitalize">
              The Exhibition
            </h1>
            <p className="w-[293px] text-center mx-auto font-[be-vietnam] text-white leading-[30px] text-[15px] xl:text-[16px] xl:w-[532px]">
              The Great Pacific Garbage Patch (GPGP) environmental art project
              comprises 2450 tiles, representing a recent satellite image of the
              Great Pacific Garbage Patch and draws attention to the issue of
              plastic litter in the oceans, particularly the major garbage
              patches.
            </p>
          </div>

          <div className="hidden sm:block sm:py-[20px] md:py-[40px] lg:py-[60px] xl:py-[80px]">
            <NftCarousel />
          </div>

          {/* Exhibition Button */}
          <div className="flex flex-col justify-center items-center mt-[39px] xl:mt-0">
            <MyLink to="" className="w-[187px]">
              <p className="md:hidden px-[30px] py-[9px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.13px] uppercase text-gpgp-blue text-[15px] xl:text-[16px]">
                Gallery
              </p>
              <p className="hidden md:block px-[30px] py-[9px] font-[be-vietnam-600] leading-[22.13px] tracking-[4.13px] uppercase text-gpgp-blue text-[15px] xl:text-[16px]">
                See all
              </p>
            </MyLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exhibition;
