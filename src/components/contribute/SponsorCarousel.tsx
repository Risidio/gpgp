import { ISponsorInvitationProp } from "../../types/contribute";
import MyLink from "../base/MyLink";

const SponsorCarousel = ({ content }: ISponsorInvitationProp) => {
  const Invitation = [
    {
      heading: content?.sponsorheading[0].text,
      description: {
        head: content?.contentsubheading2[0].text,
        body: content?.sponsorcontent[0].text,
      },
      Img: content?.sponsorimage.url,
      Btn: {
        heading: "Become a Sponsor",
        link: "/contribute/inviteSponsor",
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-[be-vietnam] bold-600 text-[20px] xl:text-[36px] leading-normal xl:leading-[48px] xl:tracking-[-0.72px] tracking-[-0.4px] uppercase text-center">
          {Invitation[0]?.heading}
        </h1>

        <img
          src={Invitation[0]?.Img}
          alt="gpgpTile"
          className="w-[404px] mt-[19px] xl:mt-[34px] h-[202px] xl:w-[836px] xl:h-[418px] object-contain"
        />

        <div className="text-center flex flex-col items-center mt-4 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-white w-[95%] xl:w-[50%] lg:w-[69%] md:w-[75%]">
          <h3 className="font-[be-vietnam-400] text-[1rem] xl:text-[20px] xl:font-[be-vietnam-600]">
            {Invitation[0]?.description?.head}
          </h3>

          <p className="font-[be-vietnam] text-center text-[1rem] xl:text-[16px] xl:leading-[32px] tracking-[0.35px] xl:tracking-0 mt-[20px] xl:mt-[72px]">
            {Invitation[0]?.description?.body}
          </p>
          <MyLink
            to={Invitation[0]?.Btn?.link}
            className={`flex items-center w-[270px] xl:w-[292px] mt-[44px] xl:mt-[83px] h-[48px] xl:h-[62px] bg-white uppercase`}
          >
            <p className="text-[15px] xl:text-[16px] xl:leading-[23.602px] xl:tracking-[4.4px] font-[be-vietnam-700] leading-[22.126px] tracking-[4.125px]">
              {Invitation[0]?.Btn?.heading}
            </p>
          </MyLink>
        </div>
      </div>
    </>
  );
};

export default SponsorCarousel;
