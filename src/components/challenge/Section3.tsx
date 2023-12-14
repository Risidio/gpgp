// import FlatLayComposition from "../../assets/images/flat-lay-composition-different-colored-plastic-bags.png";
import FlatLayCompositionMobile from "../../assets/images/flat-lay-composition-different-colored-plastic-bags-mobile1.png";

const Section3 = () => {
  return (
    <>
      <div className="">
        {/* <div className="flex flex-col items-center justify-center"></div> */}
        <div className="flex flex-col md:flex-row mt-[unset] md:mt-[360px] md:max-w-[1400px] md:mx-auto md:item md:gap-[125.25px] justify-center">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <div className="hidden md:block  md:mt-[80px]">
              <h1 className="text-[#050B1D] font-[be-vietnam-bold] md:text-4xl font-bold leading-[147.51%]">
                Heading in the right direction
              </h1>
            </div>
            <div className="flex flex-col items-center w-[293px] md:w-[522px]  mx-auto md:mx-[unset] gap-y-[20px] mt-[30px] md:mt-[80px]  justify-center md:pb-[40px]">
              <p className="text-center md:text-left text-[#050B1D] font-[be-vietnam] text-[15px] md:text-[16px] leading-[200%] md:leading-[200%] lg:leading-[200%] font-[500]">
                The progress achieved in addressing the issue of plastic
                pollution demonstrates a positive trajectory toward
                environmental sustainability and conservation efforts.
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-[be-vietnam] text-[15px] md:text-[16px] leading-[200%] md:leading-[200%] lg:leading-[200%] font-[500]">
                <b>The Project GPGP will inspire researchers and engineers to
                develop innovative solutions</b> to efficiently remove plastic from
                oceans, implementing policies to reduce plastic usage which
                enables local communities and organizations to actively
                participate in raising awareness, and educating people about the
                importance of adopting sustainable choices.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[630px] md:h-[630px] md:bg-gray-500 order-1 md:order-2 md:bg-flat-lay-composition-mobile md:rounded-[20px] bg-no-repeat bg-cover">
          <div className="md:hidden md:w-0 w-full mt-[100px] mb-[30px]">
              <div className="md:hidden w-full h-full flex flex-col justify-center items center">
                <h1 className="text-center text-black text-[16px] uppercase font-bold leading-[32px]">
                  Heading in the right direction
                </h1>
              </div>
            </div>

            {/* <img
              src={FlatLayComposition}
              className="hidden md:block md:w-[full] md:h-[100%] object-contain bg-blue-500 "
              alt="Flat Lay Composition Different Colored"
            /> */}
            <img
              src={ FlatLayCompositionMobile}
              className="md:hidden w-[293px] h-[200px] mx-auto md:h-[100%] md:w-[740px] lg:w-full"
              alt="Flat Lay Composition Different Colored"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
