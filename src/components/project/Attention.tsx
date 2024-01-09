// import SaveOceanCampaignImage from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media 1.png";
// import SaveOceanCampaignImageWeb from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media-web.jpg";
import { IAttentionSectionProps } from "../../types/project";
import Wrapper from "../layout/Wrapper";

const Attention = ({ contents }: IAttentionSectionProps) => {
  return (
    <>
      <Wrapper>
        <section className="lg:flex  mt-[118px] lg:mt-[258px] gap-x-[132px] justify-center">
          {/* Image Column */}
          <div className="lg:order-1 flex flex-col items-center lg:items-start lg:justify-center">
            {/* Home header Title */}
            <div className="lg:hidden lg:w-0 lg:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam-600] font-semibold leading-[48px] tracking-[0.32px] text-center">
              <h1>{contents?.title[0].text}</h1>
            </div>

            {/* Image */}
            <div className="">
              <img
                src={contents?.image.url}
                alt={contents?.image.alt}
                className="w-[293px] h-[196px] lg:w-[579px] lg:h-[498px] lg:rounded-[20px] mt-[36px] lg:mt-0"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="mx-auto lg:mx-0 text-center lg:text-left lg:flex lg:flex-col w-[293px] lg:w-[unset] lg:order-2">
            <h1 className="hidden lg:block font-[be-vietnam] font-semibold text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">
              {/* {contents?.title[0].text} */}Why does it need attention?
            </h1>
            <div className="lg:w-[488px] mt-[33px] lg:mt-[60px]">
              <p
                // dangerouslySetInnerHTML={{
                //   __html: contents?.firstparagraph[0].text,
                // }}
                className="text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[32px]"
              >
                The Great Pacific Garbage Patch is a pressing environmental
                issue that requires immediate attention. It has already caused
                significant harm to marine life and the ecosystem, and its
                impact will only worsen if we do nothing.
              </p>
              <p
                // dangerouslySetInnerHTML={{
                //   __html: contents?.secondparagraph[0].text,
                // }}
                className="hidden lg:block mt-[41px] text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[32px]"
              >
                The research conducted by oceanographers and ecologists suggests
                that a significant proportion of the marine debris,
                approximately 70%, sinks to the ocean's bottom. <b>Thats why the
                case of the GPGP needs more creative solutions</b>
              </p>
              <p
                // dangerouslySetInnerHTML={{
                //   __html: contents?.thirdparagraph[0].text,
                // }}
                className="hidden lg:block mt-[41px] text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[32px]"
              >
                It's time to take responsibility for our actions and work
                towards a sustainable future
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Attention;
