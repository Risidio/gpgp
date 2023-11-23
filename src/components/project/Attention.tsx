// import SaveOceanCampaignImage from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media 1.png";
// import SaveOceanCampaignImageWeb from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media-web.jpg";
import { IAttentionSectionProps } from "../../types/project";

const Attention = ({ contents }: IAttentionSectionProps) => {
  return (
    <>
     
      <div className="w-[100%] h-[100%] mt-[60px] lg:mt-[200px]">
        <h1 className="md:hidden pt-[20px] md:text-black md:pt-[0px] text-center text-[16px] md:mt-[64px] leading-[48px] uppercase font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px] md:leading-[48px]">
          {contents?.title[0].text}
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] lg:mt-[70px] md:px-[30px]">
          <div className="flex flex-col items-center h-[200px] px-[50px] md:px-[0px] md:mx-0 md:w-[100%] md:h-[100%] mb-[30px] md:mb-[0px]">
            <img
              className="w-[630px] xxxxl:w-[90%] h-[630px] xxxxl:h-[100%] hidden md:block rounded-[20px]"
              src={contents?.image.url}
              alt={contents?.image.alt}
            />
            <img
              className="w-[100%] h-[100%] md:hidden"
              src={contents?.image.url}
              alt={contents?.image.alt}
            />
          </div>

          <div className="xxxxl:flex xxxxl:flex-col xxxxl:justify-center">
            <h1 className="hidden md:block px-[40px] md:px-[80px] text-[16px] md:mt-[64px] leading-[48px] font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
              {contents?.title[0].text}
            </h1>
            <div className="w-[100%] order-2 md:order-1 md:py-[60px] px-[30px] md:px-[80px] flex flex-col gap-y-[40px]">
              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.firstparagraph[0].text,
                }}
                className="font-[be-vietnam] md:text-black text-center md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.secondparagraph[0].text,
                }}
                className="font-[be-vietnam] text-justified hidden md:block md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.thirdparagraph[0].text,
                }}
                className="font-[be-vietnam-bold] md:text-black md:font-[be-vietnam] text-center md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attention;
