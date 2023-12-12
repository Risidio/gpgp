import MyLink from "../base/MyLink";

const Section1 = () => {
  return (
    <>
      <div className="flex flex-col items-center md:pb-[100px] ">
        {/* <div className="mt-[81px] px-[17px] md:mt-[150px] flex flex-col md:items-center gap-y-[20px] md:gap-y-[65px]"> */}
        <div className="w-[297px] md:w-[unset] mt-[81px] mx-auto md:mt-[150px] flex flex-col md:items-center gap-y-[20px] md:gap-y-[65px]">
          <p className="hidden md:block w-[697px] text-[#050B1D] text-center font-[be-vietnam] md:text-[32px] md:leading-[200%] md:tracking-[-0.64px]">
            Due to their small size, microplastics are nearly <br />
            <b>impossible to monitor, track, or remove.</b>
          </p>
          <div className="hidden md:block md:w-[698px] h-[10px] flex-shrink-0 rounded-[40px] bg-gpgp-blue px-[20px]"></div>

          <div className="md:max-w-[1215px] md:h-[119px]">
            <p className="text-center text-[#050B1D] font-[be-vietnam] text-[16px] md:text-[32px] leading-[200%] tracking-[-0.75px] md:tracking-[0.64px]">
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
      </div>
    </>
  );
};

export default Section1;
