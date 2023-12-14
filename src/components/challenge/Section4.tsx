import MyLink from "../base/MyLink";

const Section4 = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center md:pb-[200px]">
        <div className="px-[23px] md:px-none py-[35px] md:py-none md:mt-[150px] flex flex-col items-center gap-y-[20px] md:gap-y-[65px]">
          <p className="text-center text-[#050B1D] font-[be-vietnam] text-[15px] md:text-4xl lg:text-[22px] xl:text-[24px] xxl:text-[25px] xxxxl:text-[35px] font-bold leading-[200%] tracking-[-0.64px]">
            The project GPGP contributes to ongoing research of plastic in
            marine environments.
          </p>
          <div className="md:block w-[100%] md:w-[698px] h-[4px] md:h-[10px] flex-shrink-0 rounded-[40px] bg-gpgp-blue"></div>

          <p className="text-center text-[#050B1D] font-[be-vietnam] text-[15px] md:text-4xl lg:text-[22px] xl:text-[24px] xxl:text-[25px] xxxxl:text-[35px] md:font-bold leading-[200%] tracking-[-0.9px]">
            This knowledge guides cleanup strategies and informs policies,
            leading to more effective and targeted solutions.
          </p>

          <MyLink
            to=""
            className="mx-auto uppercase mb-[20px] md:mb-[48.62px] md:mb-[0px] px-[17px] py-[11px] bg-gpgp-blue text-white hover:text-white text-[12px] md:text-[16px] w-[187px] md:w-56 tracking-[3.3px] h-[39px] md:h-16 md:text-base leading-[147.51%]"
          >
            Join Us
          </MyLink>
        </div>
      </div> */}
      <section className="mt-[82.5px] xl:mt-[418px] xl:mb-[260px]">
        <div className="grid text-center text-[16px] leading-[32px] tracking-[-0.32px] font-[be-vietnam] bold-400">
          <h3 className="text-[#050B1D] w-[298px] xl:w-[1215px] mx-auto font-[be-vietnam-400]">
            The project GPGP contributes to ongoing research of plasticin marine
            environments.
          </h3>

          <div className="w-[293px] xl:w-[698px] mx-auto mt-[31px] xl:mt-[71px] h-[4px] xl:h-[10px] bg-gpgp-blue rounded-[40px] w-[297px]"></div>

          <h3 className="mt-[29px] xl:mt-[70px] w-[293px] xl:w-[697px] xl:font-[be-vietnam-400] mx-auto">
            This knowledge guides cleanup strategiesand informs policies,
            leading tomore effective and targeted solutions.
          </h3>
        </div>
        <div className="flex flex-col items-center mt-[35px] xl:mt-[71px]">
          <MyLink
            to=""
            className="w-[187px] xl:w-[223px] h-[40px] xl:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mt-[35px] xl:mt-[74px] mx-auto xl:mx-0"
          >
            <p className="text-white text-center text-[15px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[4.125px]">
              Join Us
            </p>
          </MyLink>
        </div>
      </section>
    </>
  );
};

export default Section4;
