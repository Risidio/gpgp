import { IArtistInvitationProp } from "../../types/contribute";
import MyLink from "../base/MyLink";

const ArtistCarousel = ({ content }: IArtistInvitationProp) => {
  const Invitation = [
    {
      heading: content?.artistheading[0]?.text,
      description: {
        head: content?.contentsubheading1[0]?.text,
        body: content?.artistcontent[0]?.text,
        secondParagraph: content?.artistsecondcontent[0]?.text,
      },
      Img: content?.artistimage.url,
      Btn: {
        heading: "Submit Your Work",
        link: "/contribute/inviteArtist",
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

        <div className="mt-[17.43px] xl:mt-[113px] w-[293px] xl:w-[519px] text-center flex flex-col items-center leading-[200%]">
          <h3 className="font-[be-vietnam-400] text-[1rem] xl:text-[20px] xl:font-[be-vietnam-600]">
            {Invitation[0].description?.head}
          </h3>

          <div className="xl:hidden">
            <p className="font-[be-vietnam] text-center text-[16px] mt-[20px]">
              {Invitation[0].description?.body}
            </p>

            <p className="font-[be-vietnam] text-center text-[16px] mt-[20px]">
              {Invitation[0].description?.secondParagraph}
            </p>
          </div>

          <div className="hidden xl:block mt-[20px] xl:mt-[72px]">
            <p className="font-[be-vietnam] text-center text-[16px] leading-[32px]">
              Are you an artist passionate about environmental conservation and
              sustainable living? We invite you to submit your artwork,whether
              it's paintings, sculptures, photographs, or any other medium, to
              be featured in our awareness campaignsand fundraising initiatives.
              Your creativity can help us inspire change and bring attention to
              this critical cause.
            </p>
          </div>

          <MyLink
            to={Invitation[0].Btn?.link}
            className={`flex items-center w-[270px] xl:w-[292px] mt-[44px] xl:mt-[83px] h-[48px] xl:h-[62px] bg-white uppercase`}
          >
            <p className="text-[15px] xl:text-[16px] xl:leading-[23.602px] xl:tracking-[4.4px] font-[be-vietnam-700] leading-[22.126px] tracking-[4.125px]">
              {Invitation[0].Btn?.heading}
            </p>
          </MyLink>
        </div>
      </div>
    </>
  );
};

export default ArtistCarousel;
