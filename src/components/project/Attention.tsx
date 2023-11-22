// import SaveOceanCampaignImage from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media 1.png";
// import SaveOceanCampaignImageWeb from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media-web.jpg";
import { IAttentionSectionProps } from "../../types/project";

const Attention = ({ contents }: IAttentionSectionProps) => {
  return (
    <>
      {/* <div className="w-full bg-gpgp-blue md:bg-[white]">
        <h1 className="text-center text-[white] pt-[30px] uppercase md:text-[black] md:mt-[64px] md:pt-[0px] font-[600] font-[600] md:text-[40px] md:leading-[48px]">
          Why does it need attention?
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px] md:border-y-[1px] md:border-black">
          <div className="h-[200px] md:w-[100%] mx-auto md:mx-0 md:h-[100%] order-1 md:mb-0">
            <img
              className="w-[100%] h-[100%]"
              src={SaveOceanCampaignImage}
              alt={"The Challenge"}
            />
          </div>

          <div className="w-[100%] order-2 md:order-1 mt-[26px] md:mt-[60px] md:pt-[0px] md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
            <p className="text-white md:text-[black] font-[be-vietnam] text-center md:text-left text-[16px] lg:text-[18px] xl:text-[25px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              The Great Pacific Garbage Patch is a pressing environmental issue
              that requires immediate attention. It has already caused
              significant harm to marine life and the ecosystem, and its impact
              will only worsen if we do nothing.
            </p>
            <p className="hidden md:block font-[be-vietnam] text-center md:text-left text-[16px] lg:text-[18px] xl:text-[25px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              The research conducted by oceanographers and ecologists suggests
              that a significant proportion of the marine debris, approximately
              70%, sinks to the ocean's bottom.{" "}
              <b>This makes the case of the GPGP even more alarming</b>.
            </p>
            <p className="font-[be-vietnam] mb-[25px] md:mb-[0px] text-white md:text-[black] text-center md:text-left text-[16px] lg:text-[18px] xl:text-[25px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              It's time to take responsibility for our actions and work towards
              a sustainable future.
            </p>
          </div>
        </div>
      </div> */}
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
