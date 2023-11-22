import { IAboutProps } from "../../types/project";
import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const About = ({ contents }: IAboutProps) => {
  return (
    <>
      {/* <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-wave bg-no-repeat bg-cover md:pb-[50px] xl:pb-[80px] xxxl:pb-[80px]">
        <div className="xxsm:pb-[30px]">
          <div className="flex flex-col text-white pt-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[250px] xl:pt-[400px] xxl:pt-[400px] xxxl:pt-[380px] xxxxl:pt-[700px]">
            <h1 className="text-center sm:mt-[30px] md:mt-[40px] lg:mt-[30px] xl:mt-[30px] xxl:mt-[120px] xxxl:mt-[93.38px] text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] xxl:text-[35px] xxxl:text-[64px] font-[600] leading-[23.38px] md:leading-[48px]">
              {contents?.title[0].text}
            </h1>
            <div className="py-[10px] lg:py-[20px] lg:py-[50px] xxxl:py-[60px] xl:py-[30px] px-[39px] sm:px-[39px] md:px-[150px] lg:px-[209px] xl:px-[200px] xxl:px-[360px] xxxl:px-[600px] xxxxl:px-[800px]">
              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.subtitle[0].text,
                }}
                className="text-center text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>
            </div>
          </div>

          <div className="hidden sm:block sm:py-[20px] md:py-[40px] lg:py-[25px] xl:py-[90px] xxl:py-[90px]">
            <NftCarousel />
          </div>

          <div className="hidden md:flex flex-col items-center pb-[60px] md:pb-[30px] md:pt-[30px] pt-[10px]">
            <MyLink
              to="/gallery"
              className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[10px] py-[11px] md:bg-white text-white md:text-gpgp-blue md:w-60 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
            >
              <p className="font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                SEE ALL
              </p>
            </MyLink>
          </div>
        </div>
      </div> */}
      <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-wave bg-no-repeat bg-cover md:pb-[50px] xl:pb-[80px] xxxl:pb-[80px]">
        <div className="xxsm:pb-[30px]">
          <div className="flex flex-col text-white pt-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[250px] xl:pt-[400px] xxl:pt-[400px] xxxl:pt-[380px] xxxxl:pt-[700px]">
            <h1 className="uppercase md:normal-case text-center sm:mt-[30px] md:mt-[40px] lg:mt-[30px] xl:mt-[30px] xxl:mt-[120px] xxxl:mt-[93.38px] text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] xxl:text-[35px] xxxl:text-[64px] font-[600] leading-[23.38px] md:leading-[48px]">
              {contents?.title[0].text}
            </h1>
            <div className="py-[10px] lg:py-[20px] lg:py-[50px] xxxl:py-[60px] xl:py-[30px] px-[30px] sm:px-[39px] md:px-[150px] lg:px-[210px] xl:px-[200px] xxl:px-[380px] xxxl:px-[500px] xxxxl:px-[800px]">
              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.subtitle[0].text,
                }}
                className="text-center font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>
            </div>
          </div>

          <div className="hidden sm:block sm:py-[20px] md:py-[40px] lg:py-[25px] xl:py-[90px] xxl:py-[90px]">
            <NftCarousel />
          </div>

          <div className="hidden md:flex flex-col items-center pb-[60px] md:pb-[30px] md:pt-[30px] pt-[10px]">
            <MyLink
              to="/gallery"
              className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[10px] py-[11px] md:bg-white text-white md:text-gpgp-blue md:w-60 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
            >
              <p className="font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                SEE ALL
              </p>
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
