// import SaveOceanCampaignImage from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media 1.png";
// import SaveOceanCampaignImageWeb from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media-web.jpg";
import { IAttentionSectionProps } from "../../types/project";

const Attention = ({ contents }: IAttentionSectionProps) => {
  return (
    <>
      <div className="w-[100%] h-[100%] pt-[20px] md:pt-[70px] xxl:pt-0">
        <h1 className="xxl:hidden text-center leading-[48px] text-[16px] uppercase font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px]">
          {contents?.title[0].text}
        </h1>
        {/* Contents */}
        <div className="w-[100%] grid xxl:grid-cols-2 px-[40px] sm:px-[65px] py-[30px] xxxxl:py-[50px] md:pt-[55px] xxxl:px-[300px]">
          {/* Text */}
          <div className="order-2 xxl:order-2 xxxxl:flex xxxxl:flex-col xxxxl:justify-center">
            <div className="hidden xxl:block">
              <h1 className="text-[16px] md:mt-[64px] leading-[48px] text-xl font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
                {contents?.title[0].text}
              </h1>
            </div>
            <div className="flex flex-col w-[100%] gap-y-[30px] md:py-[50px] md:w-[585px] xxl:w-full md:mx-auto xxl:mx-0">
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
                className="font-[be-vietnam] text-justified hidden md:block text-center text-[16px] xl:text-[20px] xxl:text-left xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-col justify-center items-center order-1 h-[196px] md:h-[438px] xxl:h-[100%] md:px-[0px] md:w-[100%] md:h-[100%] xxl:order-1 mb-[30px] md:mb-0 xxl:items-start">
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

export default Attention;
