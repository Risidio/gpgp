import { IChallengeSection3Prop } from "../../types/challenge";
import Wrapper from "../layout/Wrapper";

const Section3 = ({ contents }: IChallengeSection3Prop) => {
  return (
    <>
      <Wrapper>
        <section className="mt-[100px] xl:mt-[432px] xl:flex  xl:gap-x-[90.25px] xl:w-[1440px] xl:mx-[auto] justify-center">
          <div className="xl:order-2">
            <h3 className="xl:hidden w-[257px] text-[#050B1D] text-center font-[be-vietnam-700] uppercase mx-auto text-[16px]">
              {contents?.heading[0]?.text}
            </h3>
            {/* Image */}
            <div className="mt-[39px] xl:mt-[5px] flex flex-col items-center xl:items-start">
              <img
                src={contents?.image?.url}
                alt={contents?.image?.alt}
                className="w-[293px] h-[199px] xl:w-[630px] xl:rounded-[20px] xl:h-[630px]"
              />
            </div>
          </div>

          {/* Contents */}
          <div className="mt-[36px] xl:mt-0 w-[293px] xl:w-[556px] text-center xl:text-left text-[#050B1D] mx-auto xl:mx-0 font-[be-vietnam] bold-400 xl:flex ">
            <div>
              <h3 className="hidden xl:block text-[36px] leading-[53.104px] text-[#050B1D] font-[be-vietnam-700] xl:mt-[85.5px]">
                {contents?.heading[0]?.text}
              </h3>
              <div className="xl:mt-[88.5px] xl:w-[522px]">
                <p className="tracking-[0.5px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] font-[500]">
                  {contents?.description1[0]?.text}
                </p>
                <p className="mt-[25px] xl:mt-[35px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] tracking-[0.2px] xl:tracking-[-0.32px]">
                  {contents?.description2[0]?.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Section3;
