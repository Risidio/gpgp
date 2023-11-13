import challengeImage from "../../assets/images/challenge.jpg";
import challengeImageWeb from "../../assets/images/challenge-web.jpg";
import MyLink from "../base/MyLink";

const GpgpSection = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] mt-[30px] md:mt-[0px]">
        <h1 className="md:hidden text-center text-[16px] md:mt-[64px] leading-[48px] uppercase font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px] md:leading-[48px]">
          What is GPGP?
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px]">
          <div className="order-2 md:order-1 ">
            <h1 className="hidden md:block px-[40px] md:px-[80px] text-[16px] md:mt-[64px] leading-[48px] font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
              What is the GPGP?
            </h1>
            <div className="w-[100%] md:py-[60px] px-[15px] md:px-[80px] flex flex-col gap-y-[40px]">
              <p className="font-[be-vietnam] text-center md:text-left text-[16px] lg:text-[18px] xl:text-[25px] xxxl:text-[28px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px]">
                <b>The Great Pacific Garbage Patch</b> is a massive accumulation
                of plastic waste and marine debris that has been swirling in the
                North Pacific Ocean for decades.
              </p>

              <p className="font-[be-vietnam] text-justified hidden md:block md:text-left text-[16px] lg:text-[18px] xl:text-[25px] xxxl:text-[28px] leading-[32px] lg:leading-[35px] font-[400]">
                Contrary to the common perception of a vast floating garbage
                island, the Great Pacific Garbage Patch mainly comprises
                dispersed microscopic plastic particles, or microplastics,
                interspersed with larger debris. This creates a cloudy
                appearance in the upper water column rather than a solid surface
                mass.
              </p>

              <MyLink
                to=""
                className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[17px] py-[11px] md:bg-white text-white md:text-gpgp-blue md:w-56 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
              >
                <p className="font-[be-vietnam] text-[15px] md:text-[16px]">
                  {" "}
                  Learn more
                </p>
              </MyLink>
            </div>
          </div>
          <div className="h-[200px] mx-[20px] md:mx-0 md:w-[100%] md:h-[100%] order-1 md:order-2 mb-[30px] md:mb-0">
            <img
              className="w-[100%] h-[100%] hidden md:block"
              src={challengeImageWeb}
              alt={"The Challenge Web Picture"}
            />
            <img
              className="w-[100%] h-[100%] md:hidden"
              src={challengeImage}
              alt={"The Challenge Mobile Picture"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GpgpSection;
