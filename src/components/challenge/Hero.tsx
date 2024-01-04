import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";

const Hero = () => {
  return (
    <>
    <Wrapper>
    <section className="flex">
      {/* <div className="lg:flex lg:flex-row mx-auto lg:gap-[81px] lg:ml-[297px]"> */}
      <div className="lg:flex lg:flex-row mx-auto lg:gap-[81px]">
        {/* Call to Action Column */}
        <div className="lg:order-2 lg:w-[398px] lg:mt-[18px]">
          <h1 className="text-gpgp-blue text-[32px] lg:text-[80px] font-[be-vietnam-700] uppercase text-center lg:text-left leading-[140%] lg:leading-[90px]">
            <span className="font-[be-vietnam-800]">The art{" "}</span>
            <span className="text-white header-text-stroke">
              inspiring &nbsp;
            </span>
            <span className="hidden lg:inline-flex text-white lg:text-gpgp-blue  font-[be-vietnam-800] header-text-stroke  lg:header-text-no-stroke lg:ml-[-18px]">
              global
            </span>
            <span className="lg:hidden text-white lg:text-gpgp-blue  header-text-stroke  lg:header-text-no-stroke lg:ml-[-18px]">
              <br />global
            </span>
            <span className="action-header lg:text-white header-text-stroke">action</span>
          </h1>
        </div>

        {/* Content Column */}
        <div className="lg:order-1 mt-[17px] lg:mt-0 w-[293px] lg:w-[413px] mx-auto lg:mx-0">
          <p className="text-[#050B1D] text-[16px] font-[be-vietnam] bold-400 text-center lg:text-left leading-[200%] tracking-[-0.32px] py-[16px]">
            Imagine a vast floating island of discarded plastic waste <span className="text-[#0A2471] bold-600"> twice the
            size of Texas</span>, right in the heart of the Pacific Ocean - the Great
            Pacific Garbage Patch Challenge is not just an environmental
            mission,but <span className="text-[#0A2471] bold-600">a call to action</span> to reclaim and restore our planet's
            most precious resource.
          </p>
          <div className="mt-[29px] lg:mt-[14px] flex flex-col gap-y-[16px] lg:gap-y-[14px]">
            <MyLink
              to="/contribute"
              className="w-[216px] lg:w-full h-[49px] lg:h-[63px] bg-white rounded-[2px]  shrink-0 mx-auto lg:mx-0"
            >
              <p className="text-gpgp-blue text-center text-[11px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[3.025px]">
                Contribute
                <span className="lg:hidden">
                  <br /> as an investor
                </span>
              </p>
            </MyLink>
            <MyLink
              to=""
              className="lg:hidden w-[216px] lg:w-[223px] h-[49px] lg:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mx-auto lg:mx-0"
            >
              <p className="text-white text-center text-[11px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[3.025px]">
                Contribute
                <br /> as an artist
              </p>
            </MyLink>

            <MyLink
              to="/contact"
              className="hidden lg:block w-[216px] lg:w-full h-[49px] lg:h-[63px] bg-gpgp-blue rounded-[2px]  shrink-0 mx-auto lg:mx-0"
            >
              <p className="lg:mt-[20px] text-white text-center text-[11px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[3.025px]">
                Contact Us
                <span className="lg:hidden">
                  <br /> as an investor
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
