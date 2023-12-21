import Wrapper from "../layout/Wrapper";

const Section1 = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center md:pb-[100px] ">
        <div className="mt-[60px] px-[17px] md:mt-[150px] flex flex-col md:items-center gap-y-[20px] md:gap-y-[65px]">
          <p className="hidden md:block text-[#050B1D] text-center font-[be-vietnam] md:text-[32px] md:leading-[200%] md:tracking-[-0.64px]">
            Due to their small size, microplastics are nearly <br />
            <b>impossible to monitor, track, or remove.</b>
          </p>
          <div className="hidden md:block md:w-[698px] h-[10px] flex-shrink-0 rounded-[40px] bg-gpgp-blue px-[20px]"></div>

          <div className="md:w-[80%]">
            <p className="text-center text-[#050B1D] font-[be-vietnam] text-[16px] md:text-[32px] leading-[200%] tracking-[-0.75px] md:tracking-[0.99px]">
              92% of plastic pollution found on the ocean's surface is
              microplastic and it is estimated there is about <b>14 billion tons of microplastics in the ocean today.</b>
            </p>
          </div>
          <div className="md:hidden md:w-[698px]  h-[4px] h-[10px] flex-shrink-0 rounded-[40px] bg-gpgp-blue px-[20px]"></div>

          <p className="block md:hidden text-[#050B1D] text-center font-[be-vietnam] text-[16px] md:text-[32px] leading-[200%] tracking-[-0.75px] md:tracking-[-0.64px]">
            Due to their small size, microplastics are nearly <br />
            <b>impossible to monitor, track, or remove.</b>
          </p>

          <MyLink
            to=""
            className="mx-auto hidden uppercase mb-[48.62px] md:mb-[0px] px-[17px] py-[11px] bg-gpgp-blue text-white hover:text-white text-[12px] md:text-[16px] w-[91px] md:w-56 tracking-[3.3px] h-[38px] md:h-16 md:text-base"
          >
            Explore
          </MyLink>
        </div>
      </div> */}
      <Wrapper>
      <section className="mt-[82.5px] xl:mt-[190px]">
        <div className="flex flex-col text-center text-[16px] leading-[-0.32px] xl:leading-[200%] tracking-[-0.32px] xl:tracking-[-0.64px] font-[be-vietnam] bold-[400] xl:text-[32px]">
          {/* <h3 className="text-[#050B1D] w-[298px] xl:w-[1215px] mx-auto xl:order-3 xl:mt-[55px] xl:ml-[113px]"> */}
          <h3 className="text-[#050B1D] w-[298px] xl:w-[1215px] mx-auto xl:order-3 xl:mt-[55px]">
            92% of plastic pollution found on the ocean's surface is
            microplastic and <br />
            it is estimated there is about{" "}
            <span className="bold-700">
              14 billion tons of microplastics in the ocean today.
            </span>
          </h3>

          <div className=" w-[297px] xl:w-[698px] mx-auto xl:order-2 mt-[31px] xl:mt-[75px] h-[4px] xl:h-[10px] bg-gpgp-blue rounded-[40px]"></div>

          <h3 className="mt-[29px] xl:mt-0 w-[293px] xl:w-[697px] mx-auto xl:text-[32px]">
            Due to their small size, microplastics are nearly{" "}
            <span className="bold-700 action-header">
              impossible to monitor, track, or remove.
            </span>
          </h3>
        </div>
      </section>
      </Wrapper>
      
    </>
  );
};

export default Section1;
