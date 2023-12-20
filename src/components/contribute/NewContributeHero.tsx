import { Link } from "react-router-dom";
import { IContributeHeroProps } from "../../types/contribute";
import DeskstopContributeHero from "./DeskstopContributeHero";
import MobileContributeHero from "./MobileContributeHero";
// import MyLink from "../base/MyLink";

export default function NewContributeHero({
  classes: {
    container = "",
    image = "",
    heading = "",
    subheading = "",
    paragraph = "",
  },
  contents,
}: IContributeHeroProps) {
  const HeroContent = [
    contents?.["hero-content"][0].text,
    contents?.["hero-content2"][0].text,
    contents?.["hero-content3"][0].text,
  ];

  return (
    <>
      <div className=" flex flex-col justify-center items-center sm:mb-[-100px] z-60">
        <div className="flex flex-col items-center md:flex-row gap-x-[-70px] w-[100%] mt-0">
          
            <DeskstopContributeHero
              classes={{
                container: undefined,
                image: undefined,
                heading: undefined,
                subheading: undefined,
                paragraph: undefined,
              }}
              contents={contents}
            />
          

          
            <MobileContributeHero
              classes={{
                container: undefined,
                image: undefined,
                heading: undefined,
                subheading: undefined,
                paragraph: undefined,
              }}
              contents={contents}
            />
          

          
          <div className=" w-[65%] flex justify-center text-center md:text-left pt-4 items-center flex-col xsm:mb-3 sm:mb-0 md:pl-[1rem] md:pr-[1rem] lg:pl-0 lg:pr-[12px] xxl:pr-[6rem]">
            {HeroContent &&
              HeroContent?.map((item, index) => (
                <p
                  className={` text-[1rem] font-BeVietnam w-[140%] sm:text-[1rem] lg:text-[1.3rem]  xxxl:text-[1.6rem] xsm:w-[120%] sm:w-[130%] md:w-[90%] font-be-vietnam mb-[30px]  md:mb-[20px] lg:mb-[29px] tracking-normal sm:tracking-[1px]  z-8 md:z-10 opacity-100 xsm:leading-6  md:leading-[26px]  xl:leading-[36px] xxxl:leading-[3rem] ${paragraph}`}
                  key={index}
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
        <div className=" flex w-full ">
          <div className="flex  w-[100%] flex-col justify-end items-center sm:items-end sm:pl-[0px] sm:pr-[120px] md:pl-[300px]  lg:pl-[86px] lg:pr-[120px] xl:pl-[75px] xl:pr-[124px] md:pr-[24px] ">
            <Link
              to={"/contribute/inviteSponsor"}
              className="border rounded-[6px] border-gpgp-blue text-gpgp-blue font-semibold w-[75%] sm:w-[75%] lg:w-[50%] text-center h-[65px] xxxl:h-[75px] flex justify-center font-BeVietnam items-center mt-3 mb-5 uppercase sm:tracking-[0.1rem] lg:tracking-[0.3rem] sm:text-[0.8rem] lg:text-[1rem]  xxl:text-[1.3rem] xxxxl:text-[1.7rem] hover:shadow-lg "
            >
              COntribute as an investor
            </Link>
            <Link
              to={"/contribute/inviteArtist"}
              className="rounded-[6px] font-BeVietnam bg-gpgp-blue text-white font-semibold w-[75%] sm:w-[75%] lg:w-[50%] text-center h-[65px] xxxl:h-[75px] flex justify-center items-center mt-3 mb-5 uppercase sm:tracking-[0.1rem] lg:tracking-[0.3rem] sm:text-[0.8rem] lg:text-[1rem] xxl:text-[1.3rem] xxxxl:text-[1.7rem] hover:shadow-lg"
            >
              COntribute as an artist
            </Link>
          </div>
        </div>
      </div>

      {/* <section className="bg-[pink] xl:grid xl:grid-cols-2">
        Call to Action *
        <div className="w-[411px] xl:w-[591px] mx-auto mt-[59.68px] xl:mt-0">
          <h3 className="font-[be-vietnam-800] text-gpgp-blue leading-[35.402px] text-[24px] xl:text-[48px] text-center xl:text-right uppercase xl:mr-[62px]">
            Contribute{" "}
            <span className="header-text-stroke text-white">
              <br className="xl:hidden"/>
              <br className="hidden"/>to <br className="hidden xl:block"/>the global effort
            </span>{" "}
            <br className=""/><br className="hidden xl:block"/>
            <span className="xl:text-[70px]">create</span><br className="hidden xl:block"/> <span className="xl:header-text-stroke xl:text-white xl:mt-[30px]">a better world</span>
          </h3>
        </div>

         Content *
        <div className="xl:w-[622px] xl:mr-[179px]">
          <div className="bg-[yellow] hidden xl:block flex flex-col xl:gap-y-[30px]">
            {HeroContent &&
              HeroContent?.map((item, index) => (
                <p
                  className={`text-[1rem] text-[#050B1D] xl:text-[16px] font-[be-vietnam] bold-400 leading-[32px]`}
                  key={index}
                >
                  {item}
                </p>
              ))}
          </div>

          * Mobile *
          <div className="xl:hidden bg-[teal] flex flex-col text-center mt-[30px] gap-y-[10px] w-[293px] mx-auto">
            <p className="text-[1rem] text-[#050B1D] font-[be-vietnam] bold-400 leading-[32px]">
              The Great Pacific Garbage Patch Art Project is an exciting
              initiative that welcomes both artists and investors to join us in
              making a profound impact on the environment. Together, we can
              create a harmonious blend of creativityand capital to tackle one
              ofthe planet's most pressingenvironmental challenges.
            </p>

            <p className="text-[1rem] text-[#050B1D] font-[be-vietnam] bold-400 leading-[32px]">
              Join us on this remarkable journey to combat the Great Pacific
              Garbage Patch through the transformative power of art and
              investment.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mt-[42px] gap-y-[10px]">
            <MyLink to={"/contribute/inviteSponsor"} className="w-[216px] xl:w-[622px] h-[49px] xl:h-[63px] flex flex-col justify-center items-center bg-white">
              <p className="text-gpgp-blue font-[be-vietnam-700] text-[11px] xl:text-[16px] uppercase text-center w-[189px] xl:w-[543.134px] h-[35px] xl:h-0 leading-[16.226px ] tracking-[3.025px]">Contribute <br/>as an investor</p>
            </MyLink>
            <MyLink to={"/contribute/inviteSponsor"} className="w-[216px] xl:w-[622px] h-[49px] xl:h-[63px] flex flex-col justify-center items-center bg-gpgp-blue">
              <p className="text-white font-[be-vietnam-700] text-[11px] xl:text-[16px] uppercase text-center w-[189px] xl:w-[543.134px] h-[35px] xl:h-0 leading-[16.226px ] tracking-[3.025px]">Contribute <br/>as an artist</p>
            </MyLink>
          </div>
        </div>
      </section> */}
    </>
  );
}
