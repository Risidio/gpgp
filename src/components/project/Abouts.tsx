import { IAboutProps } from "../../types/project";
import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const About = ({ contents }: IAboutProps) => {
  return (
    <>
      <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-wave bg-no-repeat bg-cover mt-[88px] xl:mt-[219px]">
        <div className="pt-[120px] md:pt-[220px] xl:pt-[386px] pb-[62px] xl:pb-[130px]">
          {/* Exhibition Context */}
          <div className="flex flex-col mx-auto gap-y-[13px] xl:gap-y-[60px] w-[298px] md:w-[520px] xl:w-[538px]">
            <h1 className="font-[be-vietnam-600] leading-[48px] tracking-[-0.32px] uppercase text-center text-[16px] text-white xl:text-[40px] xl:capitalize">
              {contents?.title[0].text}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: contents?.subtitle[0].text,
              }}
              className="text-center mx-auto font-[be-vietnam] text-white leading-[29px] text-[15px] xl:text-[16px]"
            ></p>
          </div>

          <div className="hidden md:block sm:py-[20px] md:py-[40px] lg:py-[60px] xl:py-[80px]">
            <NftCarousel />
          </div>

          {/* Exhibition Button */}
          <div className="flex flex-col justify-center items-center md:mt-[39px] xl:mt-0">
            <div className="hidden md:block">
              <MyLink to="/gallery" className="w-[187px]">
                <p className="px-[30px] py-[19px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.13px] uppercase text-gpgp-blue text-[15px] xl:text-[16px]">
                  See all
                </p>
              </MyLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
