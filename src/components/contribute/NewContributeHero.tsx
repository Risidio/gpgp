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

      
    </>
  );
}
