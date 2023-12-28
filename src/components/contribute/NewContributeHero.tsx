import { IContributeHeroProps } from "../../types/contribute";
import MyLink from "../base/MyLink";
import DeskstopContributeHero from "./DeskstopContributeHero";
import MobileContributeHero from "./MobileContributeHero";


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
        <div className="flex flex-col items-center md:flex-row gap-x-[-70px] w-[100%] mt-0 pt-[90px]">
          
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
          


          <div className=" w-[65%] flex justify-center text-center md:text-left pt-4 items-center flex-col xsm:mb-3 sm:mb-0 md:pl-[1rem] md:pr-[1rem]  lg:pr-[12px] xxl:pr-[6rem]">
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

        {/* Second column */}
        <div className="">
          {/* Mobile */}
          <div className="xl:hidden">
            <div className="text-center font-[be-vietnam] bold-400 text-[16px] leading-[32px] w-[293px] mx-auto mt-[40px]">
              <p>
                The Great Pacific Garbage Patch Art Project is an exciting
                initiative that welcomes both artists and investors to join us
                in making a profound impact on the environment. Together, we can
                create a harmonious blend of creativityand capital to tackle one
                ofthe planet's most pressingenvironmental challenges.
              </p>
              <p className="mt-[5px]">
                Join us on this remarkable journey to combat the Great Pacific
                Garbage Patch through the transformative power of art and
                investment.
              </p>
            </div>
            <div className="mt-[42px] flex flex-col gap-y-[16px] items-center">
              <MyLink
                to="/contribute/inviteSponsor"
                className="w-[216px] h-[49px] bg-white text-gpgp-blue"
              >
                <p className="text-[11px] font-[be-vietnam] bold-700 leading-[16.226px] tracking-[3.025px] uppercase text-center">
                  Contribute as an investor
                </p>
              </MyLink>
              <MyLink
                to="/contribute/inviteArtist"
                className="w-[216px] h-[49px] bg-gpgp-blue text-white"
              >
                <p className="text-[11px] font-[be-vietnam] bold-700 leading-[16.226px] tracking-[4.025px] uppercase text-center">
                  Contribute as an artist
                </p>
              </MyLink>
            </div>
          </div>
          {/* Web */}
          <div className="hidden xl:block">
            <div className="w-[622px] font-[be-vietnam] bold-400 leading-[32px]">
              <p className="tracking-[1px]">
                The Great Pacific Garbage Patch Art Project isan exciting
                initiative that welcomes both artists and investors to join us
                in making a profound impact on the environment.
              </p>
              <p className="mt-[20px] tracking-[1px]">
                Together, we can create a harmonious blend of creativityand
                capital to tackle one of the planet's most pressing
                environmental challenges.
              </p>
              <p className="mt-[20px] tracking-[1px]">
                Join us on this remarkable journey to combat the Great Pacific
                Garbage Patch through the transformativepower of art and
                investment.
              </p>
            </div>
            <div className="w-[622px]">
              <div className="flex flex-col gap-y-[14px] mt-[30px]">
                <MyLink
                  to="/contribute/inviteSponsor"
                  className="h-[63px] text-gpgp-blue bg-white rounded-[1px]"
                >
                  <p className="text-center font-[be-vietnam] bold-700 leading-[23.602px] uppercase tracking-[4.4px]">
                    Contribute as an investor
                  </p>
                </MyLink>
                <MyLink
                  to="/contribute/inviteArtist"
                  className="h-[63px] text-white bg-gpgp-blue rounded-[1px]"
                >
                  <p className="text-center font-[be-vietnam] bold-700 leading-[23.602px] uppercase tracking-[4.4px] hover:text-white">
                    Contribute as an artist
                  </p>
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
