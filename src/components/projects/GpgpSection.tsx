import challengeImage from "../../assets/images/challenge.jpg";
import MyLink from "../base/MyLink";

const GpgpSection = () => {
  return (
    <>
      <div className="w-[100%]">
        <h1 className="text-center text-[16px] leading-[48px] uppercase font-[600] md:font-[600] md:text-[40px] md:leading-[48px] md:mt-[100.5px]">
          What is GPGP?
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px] md:border-y-[1px] md:border-black">
          <div className="w-[100%] order-2 md:order-1 md:pt-[60px] md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
            <p className="text-center md:text-left text-[11px] md:text-[16px]">
              <b>The Great Pacific Garbage Patch</b> is a massive accumulation
              of plastic waste and marine debris that has been swirling in the
              North Pacific Ocean for decades.
            </p>

            <p className="text-justified hidden md:block">
              Contrary to the common perception of a vast floating garbage
              island, the Great Pacific Garbage Patch mainly comprises dispersed
              microscopic plastic particles, or microplastics, interspersed with
              larger debris. This creates a cloudy appearance in the upper water
              column rather than a solid surface mass.
            </p>

            <MyLink
              to=""
              className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[17px] py-[11px] md:bg-white text-white text-[12px] md:text-[16px] md:text-gpgp-blue md:w-56 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
            >
              Learn more
            </MyLink>
          </div>
          <div className="h-[200px] w-[250px] md:w-[100%] mx-auto md:mx-0 md:h-[100%] order-1 md:order-2">
            <img className="w-[100%] max-h-[100%]" src={challengeImage} alt={"The Challeng Image"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default GpgpSection;
