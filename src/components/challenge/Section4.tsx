import MyLink from "../base/MyLink";

const Section4 = () => {
  return (
    <>
      <div className="flex flex-col items-center md:pb-[200px]">
        <div className="px-[23px] md:px-none py-[35px] md:py-none md:mt-[150px] flex flex-col items-center gap-y-[20px] md:gap-y-[65px]">
          <p className="text-center text-[#050B1D] font-be-vietnam text-[15px] md:text-4xl font-bold leading-[200%] tracking-[-0.64px]">
            The project GPGP contributes to ongoing research of plastic in
            marine environments.
          </p>
          <div className="hidden md:block w-[698px] h-[10px] flex-shrink-0 rounded-[40px] bg-gpgp-blue"></div>

          <p className="text-center text-[#050B1D] font-be-vietnam text-[15px] md:text-4xl md:font-bold leading-[200%] tracking-[-0.9px]">
            This knowledge guides cleanup strategies and informs policies,
            leading to more effective and targeted solutions.
          </p>

          <MyLink
            to=""
            className="mx-auto uppercase mb-[20px] md:mb-[48.62px] md:mb-[0px] px-[17px] py-[11px] bg-gpgp-blue text-white hover:text-white text-[12px] md:text-[16px] w-[120px] md:w-56 tracking-[3.3px] h-[38px] md:h-16 md:text-base leading-[147.51%]"
          >
            Join Us
          </MyLink>
        </div>
      </div>
    </>
  );
};

export default Section4;
