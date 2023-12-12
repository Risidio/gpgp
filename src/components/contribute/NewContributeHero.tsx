import { Link } from "react-router-dom";
import { IContributeHeroProps } from "../../types/contribute";

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
    <div className=" flex flex-col justify-center items-center sm:mb-[-150px] z-60 ">
      <div className="flex flex-col items-center md:flex-row gap-x-[-60px] w-[100%] mt-16">
        <div className="w-[55%] xsm:mb-2 sm:mb-0 md:pl-[50px] lg:pl-[70px] xlg:mr-[-45px]   flex text-center md:text-right flex-col justify-center items-center uppercase">
          <div className=" w-[110%]  sm:w-[100%] xlg:w-[80%] ">
            <h2 className="text-[1.3rem] xsm:text-[1.6rem] md:text-[2.5rem] xl:text-[3.4rem] xxl:text-[4rem] xxxl:text-[4.5rem] md:mb-[-20px] text-gpgp-blue font-extrabold">
              {contents?.heading1[0].text}
            </h2>
            <span
              className="md:pl-[4px] text-[1.2rem] xsm:text-[1.4rem] md:text-[2rem]  xl:text-[3.4rem] xxl:text-[3.5rem]  xxxxl:text-[4.5rem] w-max text-white font-bold"
              style={{ WebkitTextStroke: "1px #0A2471" }}
            >
              {contents?.heading2[0].text}
            </span>
          </div>

          <div className=" w-[100%] xlg:w-[80%] mb-[10px]">
            <h2 className="text-[2rem] xsm:text-[3rem] md:text-[4rem] xl:text-[5rem] xxxl:text-[5.5rem] md:mb-[-20px] text-gpgp-blue tracking-wider font-extrabold">
            {contents?.heading3[0].text}
            </h2>
            <span
              className=" md:pl-[4px] text-[1.5rem] xsm:text-[1.4rem] md:text-[2.5rem] xl:text-[3.4rem] xxl:text-[4rem] xxxl:text-[4.5rem] text-white font-bold "
              style={{ WebkitTextStroke: "1px #0A2471" }}
            >
              {contents?.heading4[0].text}
            </span>
          </div>
        </div>

        <div className=" w-[65%] flex justify-center text-center md:text-left  items-center flex-col xsm:mb-3 sm:mb-0 md:pl-[1rem] md:pr-[1rem] lg:pl-0 lg:pr-[7rem]">
          {HeroContent &&
            HeroContent?.map((item, index) => (
              <p
                className={` text-[1rem]  w-[140%] sm:text-[1rem] lg:text-[1.3rem]  xxxl:text-[1.6rem] xsm:w-[120%] sm:w-[130%] md:w-[90%] font-be-vietnam  md:mb-[20px] lg:mb-[29px] tracking-normal sm:tracking-[1px]  z-8 md:z-10 opacity-100 xsm:leading-6  md:leading-[27px]  xl:leading-7 xxxl:leading-[3rem] ${paragraph}`}
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
            className="border rounded-[6px] border-gpgp-blue text-gpgp-blue font-semibold w-[75%] sm:w-[75%] lg:w-[50%] text-center h-[60px] xxxl:h-[75px] flex justify-center items-center mt-3 mb-5 uppercase sm:tracking-[0.1rem] lg:tracking-[0.3rem] sm:text-[0.8rem] lg:text-[1rem]  xxl:text-[1.3rem] xxxxl:text-[1.7rem] hover:shadow-lg "
          >
            COntribute as an investor
          </Link>
          <Link
            to={"/contribute/inviteArtist"}
            className="rounded-[6px] bg-gpgp-blue text-white font-semibold w-[75%] sm:w-[75%] lg:w-[50%] text-center h-[60px] xxxl:h-[75px] flex justify-center items-center mt-3 mb-5 uppercase sm:tracking-[0.1rem] lg:tracking-[0.3rem] sm:text-[0.8rem] lg:text-[1rem] xxl:text-[1.3rem] xxxxl:text-[1.7rem] hover:shadow-lg"
          >
            COntribute as an artist
          </Link>
        </div>
      </div>
    </div>
  );
}
