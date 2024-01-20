import { IChallengeSection1Prop } from "../../types/challenge";
import Wrapper from "../layout/Wrapper";

const Section1 = ({ contents }:IChallengeSection1Prop) => {
  return (
    <>
      <Wrapper>
        <section className="mt-[82.5px] xl:mt-[190px]">
          <div className="flex flex-col text-center text-[16px] leading-[-0.32px] xl:leading-[200%] tracking-[-0.32px] xl:tracking-[-0.64px] font-[be-vietnam] bold-[400] xl:text-[32px]">
            <h3 className="text-[#050B1D] w-[298px] xl:w-[1215px] mx-auto xl:order-3 xl:mt-[55px]">
              {contents?.heading2[0]?.text} <br />
              {contents?.heading2[1]?.text}{" "}
              <span className="bold-700">{contents?.heading2[2]?.text}</span>
            </h3>

            <div className=" w-[297px] xl:w-[698px] mx-auto xl:order-2 mt-[31px] xl:mt-[75px] h-[4px] xl:h-[10px] bg-gpgp-blue rounded-[40px]"></div>

            <h3 className="mt-[29px] xl:mt-0 w-[293px] xl:w-[697px] mx-auto xl:text-[32px]">
              {contents?.heading1[0]?.text}{" "}
              <span className="bold-700 action-header">
                {contents?.heading1[1]?.text}
              </span>
            </h3>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Section1;
