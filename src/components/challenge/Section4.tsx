import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";

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
      <Wrapper>
      <section className="mt-[82.5px] xl:mt-[417px] mb-[130px] xl:mb-[295px]">
        <div className="flex flex-col text-center text-[16px] xl:text-[32px] leading-[32px] xl:leading-[200%] tracking-[-0.32px] xl:tracking-[-0.64px] font-[be-vietnam] bold-400">
          {/* <h3 className="text-[#050B1D] w-[298px] xl:w-[886.048px] mx-auto font-[be-vietnam] font-[700] flex xl:flex-col justify-center xl:ml-[266.76px]"> */}
          <h3 className="text-[#050B1D] w-[298px] xl:w-[886.048px] mx-auto font-[be-vietnam] font-[700] flex xl:flex-col justify-center">
            {/* <span> */}The project GPGP contributes to ongoing research{/* </span> */} 
            {/* <span> */}of plastic in marine
            environments.{/* </span> */}
          </h3>

          {/* <div className="w-[297px] xl:w-[764.475px] mx-auto mt-[31px] xl:mt-[71px] h-[4px] xl:h-[10px] bg-gpgp-blue rounded-[40px] xl:ml-[327px]"></div> */}
          <div className="w-[297px] xl:w-[764.475px] mx-auto mt-[31px] xl:mt-[71px] h-[4px] xl:h-[10px] bg-gpgp-blue rounded-[40px]"></div>

          {/* <h3 className="mt-[29px] xl:mt-[60px] w-[293px] xl:w-[1081px] xl:font-[be-vietnam-400] mx-auto flex xl:flex-col xl:ml-[166px]"> */}
          <h3 className="mt-[29px] xl:mt-[60px] w-[293px] xl:w-[1081px] xl:font-[be-vietnam-400] mx-auto flex xl:flex-col">
            {/* <span> */}This knowledge guides cleanup strategies and informs policies, {/* </span> */}
            {/* <span> */}leading to more effective and targeted solutions.{/* </span> */}
          </h3>
        </div>
        <div className="flex flex-col items-center mt-[35px] xl:mt-[60px] ">
          <MyLink
            to="/contribute"
            // className="w-[187px] xl:w-[223px] h-[40px] xl:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mx-auto xl:ml-[595px]"
            className="w-[187px] xl:w-[223px] h-[40px] xl:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mx-auto"
          >
            <p className="text-white text-center text-[15px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[4.125px]">
              Join Us
            </p>
          </MyLink>
        </div>
      </section>
      </Wrapper>
      
    </>
  );
};

export default Section4;
