import { IChallengeSection2Prop } from "../../types/challenge";
import Wrapper from "../layout/Wrapper";

const Section2 = ({ contents }: IChallengeSection2Prop) => {
  return (
    <>
      <Wrapper>
        <section className="mt-[100px] xl:mt-[368px] xl:flex xl:gap-x-[130px] xl:w-[1440px] xl:mx-[auto] justify-center">
          <div className="">
            <h3 className="xl:hidden w-[160px] text-[#050B1D] text-center font-[be-vietnam-700] uppercase mx-auto text-[16px]">
              {contents?.heading[0]?.text}
            </h3>
            {/*Mobile Image */}
            <div className="md:hidden mt-[39px] flex justify-center xl:items-start xl:mt-[5px]">
              <img
                src={contents?.image2?.url}
                alt={contents?.image2?.alt}
                className="w-[293px] h-[199px] xl:w-[630px] xl:rounded-[20px] xl:h-[630px]"
              />
            </div>

            {/*Desktop Image */}
            <div className="hidden md:flex mt-[39px] justify-center xl:items-start xl:mt-[5px]">
              <img
                src={contents?.image?.url}
                alt={contents?.image?.alt}
                className="w-[293px] h-[199px] xl:w-[630px] xl:rounded-[20px] xl:h-[630px]"
              />
            </div>
          </div>

          {/* Contents */}
          <div className="mt-[36px] xl:mt-0 w-[293px] xl:w-[556px] text-center xl:text-left text-[#050B1D] mx-auto xxl:mx-0 font-[be-vietnam] bold-400">
            <h3 className="hidden xl:block text-[36px] leading-[53.104px] text-[#050B1D] font-[be-vietnam] font-[700] xl:mt-[-19.5px]">
              {contents?.heading[0]?.text}
            </h3>

            <p className="tracking-[0.5px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] xl:mt-[62px] xl:w-[523px]">
              {contents?.description1[0]?.text}
            </p>
            <p className="mt-[25px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] xl:w-[523px]">
              {contents?.description2[0]?.text}{" "}
              <b> {contents?.description2[1]?.text}</b>
            </p>
            <p className="mt-[25px] tracking-[0.5px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] xl:w-[523px]">
              {contents?.description3[0]?.text}
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Section2;
