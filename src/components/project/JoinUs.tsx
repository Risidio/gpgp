// import SeaSeal from "../../assets/images/ai-generated-realistic-pictures-seals.jpg";
// import SeaSealWeb from "../../assets/images/ai-generated-realistic-pictures-seals-web.jpg";
import MyLink from "../base/MyLink";
import { IJoinSectionProps } from "../../types/project";
import Wrapper from "../layout/Wrapper";

const JoinUs = ({ contents }: IJoinSectionProps) => {
  return (
    <>
      <Wrapper>
        <section className="lg:flex  mt-[122px] lg:mt-[258px] justify-center gap-x-[130px]">
          {/* Image Column */}
          <div className="lg:order-2 flex flex-col items-center lg:mt-[78px]">
            {/* Home header Title */}
            <div className="lg:hidden lg:w-0 lg:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam] bold-600 leading-[48px] tracking-[0.32px] text-center">
              <h1>{contents?.title[0].text}</h1>
            </div>

            {/* Image */}
            <div className="">
              <img
                src={contents?.image.url}
                // src={SeaSeal}
                alt={contents?.image.alt}
                className="w-[293px] h-[194.403px] lg:w-[585px] lg:h-[430px] lg:rounded-[20px] mt-[36px] lg:mt-0"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="mx-auto lg:mx-0 text-center lg:text-left w-[293px] lg:w-[522px] lg:h-[482px]">
            <h1 className="hidden lg:block font-[be-vietnam] font-semibold text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">
              {/* {contents?.title[0].text} */}Join us
            </h1>
            <p
              // dangerouslySetInnerHTML={{
              //   __html: contents?.firstparagraph[0].text,
              // }}
              className="hidden lg:block text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[32px] tracking-[1px] mt-[33px] lg:mt-[41px]"
            >
              <b>The Great Pacific Garbage Patch</b>&nbsp;
              <span>
                presents a distinctive platform for the expression of artistic
                endeavours, serving as a medium to not only manifest creativity
                but also underscore the paramount importance of ecological
                custodianship.
              </span>
            </p>
            <p
              // dangerouslySetInnerHTML={{
              //   __html: contents?.firstparagraph[0].text,
              // }}
              className="lg:hidden text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[32px] tracking-[1px] mt-[33px] lg:mt-[41px]"
            >
              The Great Pacific Garbage Patch offers a unique opportunity to
              channel your artistic talents towards a project.
            </p>
            <p
              // dangerouslySetInnerHTML={{
              //   __html: contents?.secondparagraph[0].text,
              // }}
              className="hidden lg:block mt-[41px] text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[32px]"
            >
              <b>We invite artists of all disciplines,</b> &nbsp;including
              painters, sculptors, photographers, and mixed media practitioners,
              to submit a maximum of three artistic pieces for consideration
            </p>
            <p
              // dangerouslySetInnerHTML={{
              //   __html: contents?.secondparagraph[0].text,
              // }}
              className="lg:hidden mt-[41px] text-[15px] lg:text-[16px] font-[be-vietnam] font-[700] text-[#050B1D] leading-[32px]"
            > Artists of all form - painters, sculptors, photographers are invited to submit their works for consideration. </p>
            <p
              // dangerouslySetInnerHTML={{
              //   __html: contents?.thirdparagraph[0].text,
              // }}
              className="hidden lg:block mt-[41px] text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[32px] font-bold"
            >
              Join us and contribute to the global effort
            </p>
            <div className="flex flex-row justify-center lg:justify-start gap-x-[16px] lg:gap-x-[18.1px] mt-[33px] lg:mt-[65px]">
              <MyLink
                to="/contribute/inviteArtist"
                className="w-[104px] lg:w-[223px] h-[38px] lg:h-[63px] bg-white rounded-[2px] shrink-0"
              >
                <p className="text-gpgp-blue text-center text-[15px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[4.125px]">
                  Submit <span className="hidden lg:inline">work</span>
                </p>
              </MyLink>
              <MyLink
                to="/contribute/inviteSponsor"
                className="w-[104px] lg:w-[223px] h-[38px] lg:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0"
              >
                <p className="text-white text-center text-[15px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[4.125px]">
                  Invest
                </p>
              </MyLink>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default JoinUs;
