// import SaveOceanCampaignImage from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media 1.png";
// import SaveOceanCampaignImageWeb from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media-web.jpg";
import { IAttentionSectionProps } from "../../types/project";
import Wrapper from "../layout/Wrapper";

const Attention = ({ contents }: IAttentionSectionProps) => {
  return (
    <>
    <Wrapper>
    <section className="xl:grid xl:grid-cols-2 xl:px-[60px] xxl:px-[120px] mt-[118px] xl:mt-[258px]">
        {/* Image Column */}
        <div className="xl:order-1 flex flex-col items-center xl:items-start xl:justify-center">
          {/* Home header Title */}
          <div className="xl:hidden xl:w-0 xl:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam-600] leading-[48px] tracking-[0.32px] text-center">
            <h1>{contents?.title[0].text}</h1>
          </div>

          {/* Image */}
          <div className="">
            <img
              src={contents?.image.url}
              alt={contents?.image.alt}
              className="w-[293px] xl:w-[579px] h-auto xl:rounded-[20px] mt-[36px] xl:mt-0"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="mx-auto xl:mx-0 xl:ml-[50px] xxl:ml-[30px] text-center xl:text-left xl:flex xl:flex-col w-[293px] xl:w-full xl:order-2">
          <h1 className="hidden xl:block font-[be-vietnam-600] text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">
            {contents?.title[0].text}
          </h1>
          <div className="xl:w-[500px] xxl:w-[560px]">
            <p
              dangerouslySetInnerHTML={{
                __html: contents?.firstparagraph[0].text,
              }}
              className="text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] tracking-[1px] mt-[33px] xl:mt-[67px]"
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: contents?.secondparagraph[0].text,
              }}
              className="hidden xl:block mt-[50px] text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] font-[be-vietnam] bold"
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: contents?.thirdparagraph[0].text,
              }}
              className="hidden xl:block mt-[50px] text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] font-[be-vietnam] bold"
            ></p>
          </div>
        </div>
      </section>
    </Wrapper>
     
    </>
  );
};

export default Attention;
