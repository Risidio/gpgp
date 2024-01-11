import { IAboutProps } from "../../types/project";
import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const About = ({ contents }: IAboutProps) => {
  return (
    <>
      {/* <Wrapper> */}
      <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover mt-[88px] lg:mt-[229px]">
        <div className="pt-[104px] lg:pt-[305px] pb-[48px] lg:pb-[223px]">
          {/* Exhibition Context */}
          <div className="flex flex-col mx-auto gap-y-[13px] lg:gap-y-[60px] w-[298px] md:w-[520px] lg:w-[538px]">
            <h1 className="font-[be-vietnam] bold-600 leading-[48px] tracking-[-0.32px] uppercase text-center text-[16px] text-white lg:text-[40px] lg:capitalize">
              {contents?.title[0].text}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: contents?.subtitle[0].text,
              }}
              className="text-center mx-auto font-[be-vietnam] text-white leading-[29px] text-[15px] lg:text-[16px]"
            ></p>
          </div>

          <div className="hidden md:block lg:pt-[80px]">
            <NftCarousel />
          </div>

          {/* Exhibition Button */}
          <div className="hidden flex flex-col justify-center items-center md:mt-[39px] lg:mt-0">
            <div className="">
              <MyLink to="/gallery" className="w-[187px]">
                <p className="px-[30px] py-[19px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.13px] uppercase text-gpgp-blue text-[15px] lg:text-[16px]">
                  See all
                </p>
              </MyLink>
            </div>
          </div>
        </div>
      </div>
      {/* </Wrapper> */}
    </>
  );
};

export default About;
