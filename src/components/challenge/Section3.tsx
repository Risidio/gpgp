import FlatLayComposition from "../../assets/images/flat-lay-composition-different-colored-plastic-bags.png";

const Section3 = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center"></div>
        <div className="grid md:grid-cols-2">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <div className="hidden md:block md:ml-[64px] md:mt-[80px]">
              <h1 className="text-[#050B1D] font-[be-vietnam-bold] md:text-4xl font-bold leading-[147.51%]">
                Heading in the right direction
              </h1>
            </div>
            <div className="flex flex-col items-center gap-y-[20px] mt-[30px] md:mt-[35px] mx-[23px] justify-center md:ml-[64px] md:mr-[87px] md:pb-[40px]">
              <p className="text-center md:text-left text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                The progress achieved in addressing the issue of plastic
                pollution demonstrates a positive trajectory toward
                environmental sustainability and conservation efforts.
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                <b>The Project GPGP will inspire researchers and engineers to
                develop innovative solutions</b> to efficiently remove plastic from
                oceans, implementing policies to reduce plastic usage which
                enables local communities and organizations to actively
                participate in raising awareness, and educating people about the
                importance of adopting sustainable choices.
              </p>
            </div>
          </div>
          <div className="w-full md:h-full order-1 md:order-2 bg-[length:100%_100%] md:bg-none md:border-y-[0px] border-gpgp-blue">
          <div className="md:hidden md:w-0 w-full mt-[100px] mb-[30px]">
              <div className="md:hidden w-full h-full flex flex-col justify-center items center">
                <h1 className="text-center text-black text-[16px] uppercase font-bold leading-[32px]">
                  Heading in the right direction
                </h1>
              </div>
            </div>

            <img
              src={FlatLayComposition}
              className="md:block w-full h-[196px] md:h-[100%] md:w-[740px] lg:w-full"
              alt="Flat Lay Composition Different Colored"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
