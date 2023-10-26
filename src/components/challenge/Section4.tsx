import MyLink from "../base/MyLink";

const Section4 = () => {
  return (
    <>
      <div className="flex flex-col items-center pb-[200px]">
        <div className="mt-[150px] flex flex-col items-center gap-y-[65px]">
          <p className="text-center text-[#050B1D] text-center font-be-vietnam text-4xl font-bold leading-[200%] tracking-[-0.64px]">
            The project GPGP contributes to ongoing research <br />
            of plastic in marine environments.
          </p>
          <div className="w-[698px] h-[10px] flex-shrink-0 rounded-[40px] bg-gpgp-blue"></div>

          <p className="text-center text-[#050B1D] text-center font-be-vietnam text-4xl font-bold leading-[200%] tracking-[-0.64px]">
            This knowledge guides cleanup strategies and informs policies,
            <br />
            leading to more effective and targeted solutions.
          </p>

          <MyLink
            to=""
            className="uppercase mb-[48.62px] md:mb-[0px] px-[17px] py-[11px] md:bg-gpgp-blue text-white hover:text-white text-[12px] md:text-[16px]  md:w-56 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base"
          >Join Us</MyLink>
        </div>
      </div>
    </>
  );
};

export default Section4;
