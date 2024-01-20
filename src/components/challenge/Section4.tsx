import { IChallengeSection4Prop } from "../../types/challenge";
import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";

const Section4 = ({ contents }: IChallengeSection4Prop) => {
  return (
    <>
      <Wrapper>
        <section className="mt-[82.5px] xl:mt-[417px] mb-[130px] xl:mb-[295px]">
          <div className="flex flex-col text-center text-[16px] xl:text-[32px] leading-[32px] xl:leading-[200%] tracking-[-0.32px] xl:tracking-[-0.64px] font-[be-vietnam] bold-400">
            <h3 className="text-[#050B1D] w-[298px] xl:w-[886.048px] mx-auto font-[be-vietnam] font-[700] flex xl:flex-col justify-center">
              {contents?.description1[0]?.text}{" "}
              {contents?.description1[1]?.text}
            </h3>

            <div className="w-[297px] xl:w-[764.475px] mx-auto mt-[31px] xl:mt-[71px] h-[4px] xl:h-[10px] bg-gpgp-blue rounded-[40px]"></div>

            <h3 className="mt-[29px] xl:mt-[60px] w-[293px] xl:w-[1081px] xl:font-[be-vietnam-400] mx-auto flex xl:flex-col">
              {contents?.description2[0]?.text}{" "}
              {contents?.description2[1]?.text}
            </h3>
          </div>
          <div className="flex flex-col items-center mt-[35px] xl:mt-[60px] ">
            <MyLink
              to="/contribute"
              className="w-[187px] xl:w-[223px] h-[40px] xl:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mx-auto"
            >
              <p className="text-white text-center text-[15px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[4.125px]">
                {contents?.button[0]?.text}
              </p>
            </MyLink>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Section4;
