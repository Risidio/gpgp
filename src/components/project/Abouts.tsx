import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const About = () => {
  return (
    <>
      <div className="bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover md:pb-[50px] xl:pb-[80px] xxxl:pb-[80px]">
        <div className="flex flex-col text-white pt-[125px] md:pt-[200px] lg:pt-[300px] xl:pt-[360px] xxl:pt-[350px] xxxl:pt-[500px] xxxxl:pt-[600px]">
          <h1 className="text-center mt-[25px] sm:mt-[50px] md:mt-[40px] lg:mt-[60px] xl:mt-[20px] xxl:mt-[100px] xxxl:mt-[93.38px] text-[16px] uppercase md:text-[40px] font-[600] leading-[23.38px] md:leading-[48px]">
            About the Project
          </h1>
          <div className="mb-[80px] md:mb-[15px] lg:mb-[20px] mt-[20px] lg:mt-[50px] xl:mt-[30px] px-[39px] sm:px-[39px] md:px-[150px] lg:px-[210px] xl:px-[380px] xxxl:px-[700px] xxxxl:px-[800px]">
            <p className="text-center text-[15px] md:text-[16px] leading-[25px] sm:leading-[30px] md:leading-[32px] font-[400]">
              The GPGP project represents a collaborative endeavour between
              InfinArt and the esteemed environmental artist John Dahlsen. It
              serves as an innovative exhibition with the primary objective of
              fostering heightened awareness concerning plastic pollution, with
              a specific focus on the Great Pacific Garbage Patch. This
              pioneering initiative uniquely melds artistic expression,
              educational outreach, and community engagement to provide a
              groundbreaking experience that effectively confronts the urgent
              environmental concern at hand.
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

export default About;
