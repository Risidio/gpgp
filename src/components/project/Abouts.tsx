import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const About = () => {
  return (
    <>
      <div className="w-[100%] mt-[10px] bg-project-page-mobile-wave md:bg-project-page-wave bg-no-repeat bg-cover md:pt-[395px] md:pb-[82.5px]">
        <div className="flex flex-col items-center text-white pb-[60px]">
          <h1 className="mt-[90px] md:mt-[30px] text-[16px] uppercase md:text-[40px] font-[600] leading-[23.38px] md:leading-[48px]">
            About the Project
          </h1>
          <div className="mt-[20px] text-center md:mt-[25px] md:w-[80%] px-[39px] md:px-[250px]">
            <p className="text-[15.5px] md:text-[16px] leading-[30px] md:leading-[32px] font-[400]">
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
          <div className="mt-[85px] flex flex-col items-center">
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
