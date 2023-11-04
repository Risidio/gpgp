import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const About = () => {
  return (
    <>
      <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover md:pb-[50px] xl:pb-[80px] xxxl:pb-[80px]">
        <div className="flex flex-col text-white pt-[125px] sm:pt-[150px] md:pt-[200px] lg:pt-[340px] xl:pt-[430px] xxl:pt-[350px] xxxl:pt-[600px] xxxxl:pt-[700px]">
          <h1 className="text-center sm:mt-[30px] md:mt-[40px] lg:mt-[60px] xl:mt-[20px] xxl:mt-[100px] xxxl:mt-[93.38px] text-[16px] uppercase md:text-[40px] xxxl:text-[64px] font-[600] leading-[23.38px] md:leading-[48px]">
            About the Project
          </h1>
          <div className="py-[10px] lg:py-[20px] lg:py-[50px] xxxl:py-[60px] xl:py-[30px] px-[39px] sm:px-[39px] md:px-[150px] lg:px-[210px] xl:px-[350px] xxxl:px-[590px] xxxxl:px-[800px]">
            <p className="text-center text-[15px] md:text-[16px] lg:text-[19px] xl:text-[26px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
              The GPGP project represents a collaborative endeavour between
              InfinArt and the esteemed environmental artist John Dahlsen. It
              serves as an innovative exhibition with the primary objective of
              fostering heightened awareness concerning plastic pollution, with
              a specific focus on the Great Pacific Garbage Patch. This
              pioneering initiative uniquely melds artistic expression,
              educational outreach, and community engagement to provide a
              groundbreaking experience that effectively confronts the urgent
              environmental involvement at hand.
            </p>
          </div>
        </div>

        <div className="hidden sm:block sm:py-[20px] md:py-[40px] lg:py-[25px] xl:py-[90px] xxl:py-[90px]">
          <NftCarousel />
        </div>

        <div className="flex flex-col items-center pb-[60px] md:pb-[30px] md:pt-[30px] pt-[10px]">
          <MyLink
            to="/gallery"
            className="uppercase w-56 p-[15px] tracking-[.35em] text-base"
          >
            <p className="xxxl:text-[30px]">See all</p>
          </MyLink>
        </div>
      </div>
    </>
  );
};

export default About;
