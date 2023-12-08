// import SeaSeal from "../../assets/images/ai-generated-realistic-pictures-seals.jpg";
// import SeaSealWeb from "../../assets/images/ai-generated-realistic-pictures-seals-web.jpg";
import MyLink from "../base/MyLink";
import { IJoinSectionProps } from "../../types/project";

const JoinUs = ({ contents }: IJoinSectionProps) => {
  return (
    <>
      <div className="w-[100%] h-[100%] pt-[20px] md:pt-[80px] xxl:mt-[50px]">
        <h1 className="xxl:hidden text-center leading-[48px] text-[16px] uppercase font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px]">
          {contents?.title[0].text}
        </h1>
        {/* Contents */}
        <div className="w-[100%] grid xxl:grid-cols-2 px-[40px] sm:px-[65px] py-[30px] xxxxl:py-[50px] md:pt-[55px] xxxl:px-[300px]">
          {/* Text */}
          <div className="order-2 xxl:order-1 xxxxl:flex xxxxl:flex-col xxxxl:justify-center">
            <div className="hidden xxl:block">
              <h1 className="text-[16px] md:mt-[64px] leading-[48px] text-xl font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
                {contents?.title[0].text}
              </h1>
            </div>
            {/* Content */}
            <div className="flex flex-col w-[100%] gap-y-[30px] md:py-[50px] md:w-[585px] xxl:pt-[67px] xxl:pb-[74px] xxl:w-full md:mx-auto xxl:mx-0">
              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.firstparagraph[0].text,
                }}
                className="font-[be-vietnam] text-center text-[16px] xl:text-[20px] xxl:text-left xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.secondparagraph[0].text,
                }}
                className="font-[be-vietnam] text-justified hidden md:block text-center text-[16px] xl:text-[20px] xxl:text-left xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.thirdparagraph[0].text,
                }}
                className="block md:hidden font-[be-vietnam] text-justified text-center text-[16px] xl:text-[20px] xxl:text-left xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>
            </div>
            {/* Button */}
            <div className="flex flex-row justify-center xxl:justify-start gap-x-[16px] mt-[33px]">
              <MyLink to="" className="xxl:w-[300px]">
                <p className="px-[17px] py-[11px] font-[be-vietnam-bold] uppercase text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400] leading-[22.126px] tracking-[4.125px]">
                  Submit <span className="hidden md:inline">work</span>
                </p>
              </MyLink>
              <MyLink to="" className="bg-gpgp-blue text-white xxl:w-[300px]">
                <p className="px-[17px] py-[11px] font-[be-vietnam-bold] uppercase text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400] leading-[22.126px] tracking-[4.125px]">
                  Invest
                </p>
              </MyLink>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-col justify-center items-center order-1 h-[196px] md:h-[438px] xxl:h-[100%] md:px-[0px] md:w-[100%] md:h-[100%] xxl:order-2 mb-[30px] md:mb-0 xxxl:items-end">
            <img
              className="hidden rounded-[20px] w-[585px] md:block xxxxl:w-[882px] xxxxl:h-[530px]"
              src={contents?.image.url}
              alt={contents?.image.alt}
            />
            <img
              className="w-[293px] h-[100%] md:hidden"
              src={contents?.image.url}
              alt={contents?.image.alt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
