import challengeImage from "../../assets/images/challenge.jpg";
import MyLink from "../base/MyLink";
import { IGpgpSectionProps } from "../../types/project";
import Wrapper from "../layout/Wrapper";

const GpgpSection = ({ contents }: IGpgpSectionProps) => {
  return (
    <>
    <Wrapper>
    <section className="xl:grid xl:grid-cols-2 xl:px-[60px] xxl:px-[120px] mt-[65px] lg:mt-[222px]">
        {/* Image Column */}
        <div className="xl:order-2 flex flex-col items-center xl:justify-center">
          {/* Home header Title */}
          <div className="xl:hidden xl:w-0 xl:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam-600] leading-[48px] tracking-[0.32px] text-center">
            <h1>{contents?.title[0].text}</h1>
          </div>

          {/* Image */}
          <div className="">
            <img
              src={challengeImage}
              alt="The Challenge"
              className="w-[293px] xl:w-[585px] xl:h-[438px] h-[196px] xl:rounded-[20px] mt-[36px] xl:mt-0"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="mx-auto xl:mx-0 text-center xl:text-left w-[293px] xl:w-[522px]">
          <h1 className="hidden xl:block font-[be-vietnam] bold-600 text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">Adex</h1>
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
          <MyLink
            to="/news"
            className="w-[187px] xl:w-[223px] h-[40px] xl:h-[63px] bg-gpgp-blue xl:bg-white rounded-[2px] shrink-0 mt-[35px] xl:mt-[74px] mx-auto xl:mx-0"
          >
            <p className="text-white xl:text-gpgp-blue text-center text-[15px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[4.125px]">
              {contents?.button}
            </p>
          </MyLink>
        </div>
      </section>
    </Wrapper>
     
    </>
  );
};

export default GpgpSection;
