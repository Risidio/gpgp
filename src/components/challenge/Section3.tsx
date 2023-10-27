import FlatLayCompotion from "../../assets/images/flat-lay-composition-different-colored-plastic-bags.jpg";

const Section3 = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center md:p-[100px]">
          <h1 className="text-[#050B1D] text-center font-be-vietnam md:text-4xl font-bold md:leading-[147.51%]">
            Heading in the right direction
          </h1>
        </div>
        <div className="grid md:grid-cols-2 md:border-y-[1px] md:border-gpgp-blue">
          <div className="order-2">
            <div className="flex flex-col items-center gap-y-[20px] mt-[35px] mx-[23px] md:mt-[80px] justify-center md:ml-[64px] md:mr-[87px]">
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] md:text-base leading-[200%] tracking-[-0.32px]">
                The progress achieved in addressing the issue of plastic
                pollution demonstrates a positive trajectory toward
                environmental sustainability and conservation efforts.
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] md:text-base leading-[200%] tracking-[-0.65px]">
                The Project GPGP will inspire researchers and engineers to
                develop innovative solutions to efficiently remove plastic from
                oceans, implementing policies to reduce plastic usage which
                enables local communities and organizations to actively
                participate in raising awareness, and educating people about the
                importance of adopting sustainable choices.
              </p>
            </div>
          </div>
          <div className="w-full h-[200px] md:h-[602px] order-1">
            <img
              src={FlatLayCompotion}
              className="w-full h-[100%] md:w-[740px] md:h-[100%]"
              alt="Flat Lay Composition Different Colored"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
