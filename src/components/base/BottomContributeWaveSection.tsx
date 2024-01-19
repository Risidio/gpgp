import { IGalleryWaveProp } from "../../types/gallery";

const BottomContributeWaveSection = ({contents}:IGalleryWaveProp) => {
  return (
    <div className="w-[100%] xl:w-[100%] pt-[103px] pb-[61px] md:pt-[300px] lg:pt-[600px] xl:pt-[376px] xl:pb-[105px] placeholder:h-[100%] bg-mobile-button-wave xl:bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center font-[be-vietnam-bold]">
      <div className="">
        <h1 className="font-[be-vietnam] text-[16px] xl:text-[36px] md:font-[700] uppercase leading-[23.602px] xl:leading-[53.104px] text-white text-center flex flex-col">
          <span className="order-2 lg:order-1">
            {contents?.heading1[0]?.text}
          </span>
          <span className="order-1 lg:order-2">{contents?.heading2[0]?.text}</span>
        </h1>
      </div>
    </div>
  );
};

export default BottomContributeWaveSection;
