import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const Exhibition = () => {
  return (
    <>
      <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover md:pb-[50px] xl:pb-[80px] xxxl:pb-[80px]">
        <div className="flex flex-col text-white pt-[125px] md:pt-[200px] lg:pt-[300px] xl:pt-[360px] xxl:pt-[350px] xxxl:pt-[600px] xxxxl:pt-[600px]">
          <h1 className="text-center mt-[25px] sm:mt-[50px] md:mt-[40px] lg:mt-[60px] xl:mt-[20px] xxl:mt-[100px] xxxl:mt-[93.38px] text-[16px] uppercase md:text-[40px] xxxl:text-[64px] font-[600] leading-[23.38px] md:leading-[48px]">
            The Exhibition
          </h1>
          <div className="mb-[80px] md:mb-[15px] lg:mb-[20px] mt-[20px] lg:mt-[50px] xxxl:mt-[60px] xl:mt-[30px] px-[39px] sm:px-[39px] md:px-[150px] lg:px-[210px] xl:px-[390px] xxxl:px-[600px] xxxxl:px-[700px]">
            <p className="text-center text-[15px] md:text-[16px] leading-[25px] sm:leading-[30px] md:leading-[32px] font-[400]">
              The Great Pacific Garbage Patch (GPGP) environmental art project
              is a collaboration between environmental artist, John Dahlsen, and
              InfinArt. The complete artwork comprises 2450 tiles, representing
              a recent satellite image of the Great Pacific Garbage Patch and
              draws attention to the issue of plastic litter in the oceans,
              particularly the major garbage patches.
            </p>
          </div>
        </div>

        <div className="hidden md:block mt-[40px]">
          <NftCarousel />
          <div className="mt-[68px] flex flex-col items-center">
            <MyLink
              to=""
              className="uppercase w-56 h-16 tracking-[.35em] text-base"
            >
              See all
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
