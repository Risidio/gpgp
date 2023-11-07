import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const Exhibition = () => {
  return (
    <>
      <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover pb:[200px] md:pb-[50px] xl:pb-[80px] xxxl:pb-[80px]">
        <div className="flex flex-col text-white pt-[100px] xsm:pt-[150px] sm:pt-[150px] md:pt-[200px] lg:pt-[300px] xl:pt-[450px] xxl:pt-[350px] xxxl:pt-[600px] xxxxl:pt-[700px]">
          <h1 className="text-center sm:mt-[30px] md:mt-[40px] lg:mt-[60px] xl:mt-[50px] xxl:mt-[100px] xxxl:mt-[93.38px] text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] xxl:text-[35px] xxxl:text-[64px] font-[600] leading-[23.38px] md:leading-[48px]">
            The Exhibition
          </h1>
          <div className="py-[10px] xsm:py-[15px] lg:py-[20px] lg:py-[50px] xxxl:py-[60px] xl:py-[30px] px-[39px] xsm:px-[40px] sm:px-[39px] md:px-[150px] lg:px-[210px] xl:px-[350px] xxl:px-[400px] xxxl:px-[600px] xxxxl:px-[800px]">
            <p className="text-center text-[15px] md:text-[16px] lg:text-[19px] xl:text-[20px] xxxxl:text-[30px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
              The Great Pacific Garbage Patch (GPGP) environmental art project
              is a collaboration between environmental artist, John Dahlsen, and
              InfinArt. The complete artwork comprises 2450 tiles, representing
              a recent satellite image of the Great Pacific Garbage Patch and
              draws attention to the issue of plastic litter in the oceans,
              particularly the major garbage patches.
            </p>
          </div>
        </div>

        <div className="hidden sm:block sm:py-[20px] md:py-[40px] lg:py-[25px] xl:py-[90px] xxl:py-[100px]">
          <NftCarousel />
        </div>

        <div className="flex flex-col items-center pb-[60px] md:pb-[30px] md:pt-[30px] pt-[10px]">
          <MyLink
            to="/gallery"
            className="uppercase w-56 p-[15px] tracking-[.35em] text-base"
          >
            <p className="lg:text-[20px] xxxxl:text-[30px] xxxl:tracking-[10px] xxxl:text-[30px]">See all</p>
          </MyLink>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
