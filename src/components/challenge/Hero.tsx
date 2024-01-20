import { IChallengeHeroProp } from "../../types/challenge";
import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";

const Hero = ({ contents }: IChallengeHeroProp) => {
  return (
    <>
      <Wrapper>
        <section className="flex">
          <div className="lg:flex lg:flex-row mx-auto lg:gap-[81px]">
            {/* Call to Action Column */}
            <div className="lg:order-2 lg:w-[398px] lg:mt-[18px]">
              <h1 className="text-gpgp-blue text-[32px] lg:text-[80px] font-[be-vietnam-700] uppercase text-center lg:text-left leading-[140%] lg:leading-[90px]">
                <span className="font-[be-vietnam-800]">
                  {contents?.title[0]?.text}{" "}
                </span>
                <span className="text-white header-text-stroke">
                  {contents?.title[1]?.text} &nbsp;
                </span>
                <span className="hidden lg:inline-flex text-white lg:text-gpgp-blue  font-[be-vietnam-800] header-text-stroke  lg:header-text-no-stroke lg:ml-[-18px]">
                  {contents?.title[2]?.text}
                </span>
                <span className="lg:hidden text-white lg:text-gpgp-blue  header-text-stroke  lg:header-text-no-stroke lg:ml-[-18px]">
                  <br />
                  {contents?.title[2]?.text}
                </span>
                <span className="action-header lg:text-white header-text-stroke">
                  {contents?.title[3]?.text}
                </span>
              </h1>
            </div>

            {/* Content Column */}
            <div className="lg:order-1 mt-[17px] lg:mt-0 w-[293px] lg:w-[413px] mx-auto lg:mx-0">
              <p className="text-[#050B1D] text-[16px] font-[be-vietnam] bold-400 text-center lg:text-left leading-[200%] tracking-[-0.32px] py-[16px]">
                {contents?.subtitle[0]?.text}
                <span className="text-[#0A2471] bold-600">
                  {" "}
                  {contents?.subtitle[1]?.text}
                </span>{" "}
                {contents?.subtitle[2]?.text}
                <span className="text-[#0A2471] bold-600">
                  {contents?.subtitle[3]?.text}
                </span>{" "}
                {contents?.subtitle[4]?.text}
              </p>
              <div className="mt-[29px] lg:mt-[14px] flex flex-col gap-y-[16px] lg:gap-y-[14px]">
                <MyLink
                  to="/contribute"
                  className="w-[216px] lg:w-full h-[49px] lg:h-[63px] bg-white rounded-[2px]  shrink-0 mx-auto lg:mx-0"
                >
                  <p className="text-gpgp-blue text-center text-[11px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[3.025px]">
                    {contents?.button1[0]?.text}
                    <span className="lg:hidden">
                      <br /> {contents?.button2[1]?.text}
                    </span>
                  </p>
                </MyLink>
                <MyLink
                  to=""
                  className="lg:hidden w-[216px] lg:w-[223px] h-[49px] lg:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mx-auto lg:mx-0"
                >
                  <p className="text-white text-center text-[11px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[3.025px]">
                    {contents?.button1[0]?.text}
                    <br /> {contents?.button1[1]?.text}
                  </p>
                </MyLink>

                <MyLink
                  to="/contact"
                  className="hidden lg:block w-[216px] lg:w-full h-[49px] lg:h-[63px] bg-gpgp-blue rounded-[2px]  shrink-0 mx-auto lg:mx-0"
                >
                  <p className="lg:mt-[20px] text-white text-center text-[11px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[3.025px]">
                    {contents?.button2[0]?.text}
                    <span className="lg:hidden">
                      <br /> {contents?.button2[1]?.text}
                    </span>
                  </p>
                </MyLink>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Hero;
