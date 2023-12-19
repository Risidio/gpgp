import MyLink from "../base/MyLink";

const Hero = () => {
  return (
    <>
      {/* <section className="xl:grid xl:grid-cols-2"> */}
      <section className="flex">
      <div className="xl:flex xl:flex-row mx-auto xl:gap-[81px]">
        {/* Call to Action Column */}
        <div className="xl:order-2 xl:w-[398px]  mt-[60.73px] xl:mt-[6px]">
          <h1 className="text-gpgp-blue text-[32px] xl:text-[80px] font-[be-vietnam-700] uppercase text-center xl:text-left leading-[140%] xl:leading-[90px]">
            The art{" "}
            <span className="text-white header-text-stroke">
              inspiring &nbsp;
            </span>
            <span className="hidden xl:inline-flex text-white xl:text-gpgp-blue  header-text-stroke  xl:header-text-no-stroke xl:ml-[-18px]">
              global
            </span>
            <span className="xl:hidden text-white xl:text-gpgp-blue  header-text-stroke  xl:header-text-no-stroke xl:ml-[-18px]">
              <br />global
            </span>
            <span className="action-header xl:text-white header-text-stroke">action</span>
          </h1>
        </div>

        {/* Content Column */}
        {/* <div className="xl:order-1 mt-[17px] xl:mt-0 w-[293px] xl:w-[413px] mx-auto xl:mx-0 xl:ml-[160px] border border-1"> */}
        <div className="xl:order-1 mt-[17px] xl:mt-0 w-[293px] xl:w-[413px] mx-auto xl:mx-0">
          <p className="text-[#050B1D] text-[16px] font-[be-vietnam] bold-400 text-center leading-[200%] tracking-[-0.32px] py-[10px]">
            Imagine a vast floating island of discarded plastic waste <span className="text-[#0A2471] bold-600"> twice the
            size of Texas</span>, right in the heart of the Pacific Ocean - the Great
            Pacific Garbage Patch Challenge is not just an environmental
            mission,but <span className="text-[#0A2471] bold-600">a call to action</span> to reclaim and restore our planet's
            most precious resource.
          </p>
          <div className="mt-[29px] xl:mt-[14px] flex flex-col gap-y-[16px] xl:gap-y-[14px]">
            <MyLink
              to="/contribute"
              className="w-[216px] xl:w-full h-[49px] xl:h-[63px] bg-white rounded-[2px]  shrink-0 mx-auto xl:mx-0"
            >
              <p className="text-gpgp-blue text-center text-[11px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[3.025px]">
                Contribute
                <span className="xl:hidden">
                  <br /> as an investor
                </span>
              </p>
            </MyLink>
            <MyLink
              to=""
              className="xl:hidden w-[216px] xl:w-[223px] h-[49px] xl:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mx-auto xl:mx-0"
            >
              <p className="text-white text-center text-[11px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[3.025px]">
                Contribute
                <br /> as an artist
              </p>
            </MyLink>

            <MyLink
              to="/contact"
              className="hidden xl:block w-[216px] xl:w-full h-[49px] xl:h-[63px] bg-gpgp-blue rounded-[2px]  shrink-0 mx-auto xl:mx-0"
            >
              <p className="xl:mt-[20px] text-white text-center text-[11px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[16.226px] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[3.025px]">
                Contact Us
                <span className="xl:hidden">
                  <br /> as an investor
                </span>
              </p>
            </MyLink>
          </div>
        </div>
      </div>
      </section>
      
    </>
  );
};

export default Hero;
