import { IChallengePlasticRevolutionProp } from "../../types/challenge";

const PlasticRevolution = ({ contents }: IChallengePlasticRevolutionProp) => {
  return (
    <>
      <section className="w-full bg-challenge-plastic-rev-mobile-wave md:bg-challenge-plastic-rev-wave bg-cover bg-no-repeat pt-[132px] md:pt-[200px] xl:pt-[381px] pb-[66.5px] xl:pb-[194px] mt-[29px] xl:mt-[38px]">
        <h1 className="text-[20px] xl:text-[36px] leading-[147.51%] uppercase xl:normal-case font-[be-vietnam-700] text-center text-white">
          Plastic revolution
        </h1>
        <div className="mt-[31px] xl:mt-[70px] w-[293px] xl:w-[542px] mx-auto flex flex-col gap-y-[18px] xl:gap-y-[45px] text-[15px] xl:text-[16px] leading-[140%] xl:leading-[200%] tracking-[0.3px] xl:tracking-[-0.32px] flex-shrink-0 font-[be-vietnam] bold-[500] text-white text-center">
          <p>{contents?.description[0]?.text}</p>
          <p>
            {contents?.description2[0]?.text}{" "}
            <b>{contents?.description2[1]?.text}</b>
            {contents?.description2[2]?.text}{" "}
            <b>{contents?.description2[3]?.text}</b>{" "}
            {contents?.description2[4]?.text}
          </p>
          <p>
            {contents?.description3[0]?.text}{" "}
            <b>{contents?.description3[1]?.text}</b>{" "}
            {contents?.description3[2]?.text}{" "}
            <b>{contents?.description3[3]?.text}</b>{" "}
            {contents?.description3[4]?.text}
          </p>
        </div>
      </section>
    </>
  );
};

export default PlasticRevolution;
