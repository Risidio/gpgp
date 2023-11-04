import Rectange251 from "../../assets/images/Rectangle251.jpg";
import MyLink from "../base/MyLink";

const Exhibition = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center uppercase text-[white] md:text-[black] font-[600] font-[600] md:text-[40px] md:leading-[48px] md:mt-[64px]">
          Exhibition
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px] md:border-y-[1px] md:border-black">
          <div className="w-[100%] order-2 md:order-1 mt-[23px] md:mt-[0px] md:pt-[60px] md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
            <div className="hidden md:block w-[260px] h-[20px] bg-gpgp-blue rotate-90 absolute left-[-120px] mt-[130px] rounded-tl-[40px] rounded-tr-[40px]"></div>
            <p className="md:text-[black] text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              <b>The GPGP exhibition</b> comprises 2,450 physical art pieces,
              thoughtfully organised to replicate the satellite depiction of the
              Great Pacific Garbage Patch.{" "}
              <span className="hidden md:block">
                Within this presentation, 888 of these physical art pieces,
                referred to as 'tiles,' collectively constitute the central
                element of the Garbage Patch's satellite representation.
              </span>
            </p>
            <p className="text-center block md:hidden text-[15px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              Within this presentation, 888 of these physical art pieces,
              referred to as 'tiles,' collectively constitute the central
              element of the Garbage Patch's satellite representation.
            </p>
            <p className="hidden md:block text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[32px] lg:leading-[35px]">
              Each tile embodies a unique artistic expression, serving as a
              poignant and evocative symbol of the expansive scope and critical
              implications associated with plastic pollution.
            </p>
            <MyLink
              to=""
              className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[17px] py-[11px] md:bg-white text-white text-[12px] md:text-[16px] md:text-gpgp-blue md:w-56 tracking-[3.3px] md:tracking-[.35em] text-base mx-auto md:mx-0"
            >
              Explore
            </MyLink>
          </div>
          {/* <div className="h-[200px] w-[315px] md:w-[100%] mx-auto md:mx-0 md:h-[100%] order-1 md:order-2 mb-[15px] md:mb-[0px]">
            <img
              className="w-[100%] max-h-[100%]"
              alt="Exhibition"
              src={Rectange251}
            />
          </div> */}
          <div className="w-full h-[200px] w-[315px] mx-auto md:mx-0 md:w-[100%] md:h-[100%] order-1 md:order-2 mb-[30px] md:mb-0">
            <img
              className="w-[100%] h-[100%]"
              src={Rectange251}
              alt={"The Challenge"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
