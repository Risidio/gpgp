import SaveOceanCampaignImage from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media 1.png";

const Attention = () => {
  return (
    <>
      <div className="w-full bg-gpgp-blue md:bg-[white]">
        <h1 className="text-center text-[white] pt-[30px] uppercase md:text-[black] md:mt-[64px] md:pt-[0px] font-[600] font-[600] md:text-[40px] md:leading-[48px]">
          Why does it need attention?
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px] md:border-y-[1px] md:border-black">
          <div className="h-[200px] md:w-[100%] mx-auto md:mx-0 md:h-[100%] order-1 md:mb-0">
            <img
              className="w-[100%] h-[100%]"
              src={SaveOceanCampaignImage}
              alt={"The Challenge"}
            />
          </div>

          <div className="w-[100%] order-2 md:order-1 mt-[26px] md:mt-[60px] md:pt-[0px] md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
            <p className="text-white md:text-[black] text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              The Great Pacific Garbage Patch is a pressing environmental issue
              that requires immediate attention. It has already caused
              significant harm to marine life and the ecosystem, and its impact
              will only worsen if we do nothing.
            </p>
            <p className="hidden md:block text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              The research conducted by oceanographers and ecologists suggests
              that a significant proportion of the marine debris, approximately
              70%, sinks to the ocean's bottom.{" "}
              <b>This makes the case of the GPGP even more alarming</b>.
            </p>
            <p className="mb-[25px] md:mb-[0px] text-white md:text-[black] text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              It's time to take responsibility for our actions and work towards
              a sustainable future.
            </p>
            <div className="hidden md:block w-[260px] h-[20px] bg-gpgp-blue rotate-90 absolute right-[-120px] mt-[130px] rounded-br-[40px] rounded-bl-[40px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attention;
