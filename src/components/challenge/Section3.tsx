import FlatLayComposition from "../../assets/images/flat-lay-composition-different-colored-plastic-bags-mobile.jpg";

const Section3 = () => {
  return (
    <>
      {/* <section className="mt-[100px] xl:mt-[432px] xl:flex  xl:gap-x-[125.25px] xl:ml-[80px] bg-purple-500"> */}
      {/* <section className="mt-[100px] xl:mt-[432px] xl:flex  xl:gap-x-[90.25px] xl:ml-[80px]"> */}
      <section className="mt-[100px] xl:mt-[432px] xl:flex  xl:gap-x-[90.25px] xl:w-[1440px] xl:mx-[auto]">
        <div className="xl:order-2">
          <h3 className="xl:hidden w-[257px] text-[#050B1D] text-center font-[be-vietnam-700] uppercase mx-auto text-[16px]">
            Heading in the right direction
          </h3>
          {/* Image */}
          <div className="mt-[39px] xl:mt-[5px] flex flex-col items-center xl:items-start">
            <img
              src={FlatLayComposition}
              alt="Trashed Plastic Objects"
              className="w-[293px] h-[199px] xl:w-[630px] xl:rounded-[20px] xl:h-[630px]"
            />
          </div>
        </div>

        {/* Contents */}
        <div className="mt-[36px] xl:mt-0 w-[293px] xl:w-[556px] text-center xl:text-left text-[#050B1D] mx-auto xl:mx-0 font-[be-vietnam] bold-400 xl:flex ">
          <div>
            <h3 className="hidden xl:block text-[36px] leading-[53.104px] text-[#050B1D] font-[be-vietnam-700] xl:mt-[85.5px]">
              Heading in the right direction
            </h3>
            <div className="xl:mt-[88.5px] xl:w-[522px]">
            <p className="tracking-[0.5px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] font-[500]">
              The progress achieved in addressing the issue of plastic pollution
              demonstrates a positive trajectory toward environmental
              sustainability and conservation efforts.
            </p>
            <p className="mt-[25px] xl:mt-[35px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] tracking-[0.2px] xl:tracking-[-0.32px]">
              The Project GPGP will inspire researchers and engineers to develop
              innovative solutions to efficiently remove plastic from oceans,
              implementing policies to reduce plastic usage which enables local
              communities and organizations to actively participate in raising
              awareness, and educating people about the importance of adopting
              sustainable choices.
            </p>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
