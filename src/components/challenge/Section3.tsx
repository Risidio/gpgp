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
            <div className="flex flex-col items-center gap-y-[20px] mt-[35px] mx-[23px] justify-center md:ml-[64px] md:mr-[87px] md:pb-[40px]">
              <p className="text-center md:text-left text-[#050B1D] font-[be-vietnam] text-[15px] lg:text-[22px] xl:text-[24px] xxl:text-[25px] xxxxl:text-[35px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.32px]">
                The progress achieved in addressing the issue of plastic
                pollution demonstrates a positive trajectory toward
                environmental sustainability and conservation efforts.
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-[be-vietnam] text-[15px] lg:text-[22px] xl:text-[24px] xxl:text-[25px] xxxxl:text-[35px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.65px]">
                The Project GPGP will inspire researchers and engineers to
                develop innovative solutions to efficiently remove plastic from
                oceans, implementing policies to reduce plastic usage which
                enables local communities and organizations to actively
                participate in raising awareness, and educating people about the
                importance of adopting sustainable choices.
              </p>
            </div>
          </div>
          <div className="w-full h-[200px] md:h-full order-1 md:order-2 bg-[length:100%_100%] bg-flat-lay-composition md:bg-none md:border-y-[0px] border-gpgp-blue">
            <img
              src={FlatLayComposition}
              className="hidden md:block w-full h-[100%] md:w-[740px] lg:w-full"
              alt="Flat Lay Composition Different Colored"
            />
            <div className="md:hidden md:w-0 w-full h-full inset-0 bg-black bg-opacity-30">
              <div className="md:hidden w-full h-full flex flex-col justify-center items center">
                <h1 className="text-center text-white text-[32px] uppercase font-bold leading-[32px]">
                  Heading in <br />
                  the right direction
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
