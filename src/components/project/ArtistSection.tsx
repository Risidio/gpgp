import JD from "../../assets/images/john-dahlsen.png";
import Artist from "../home/Artist";

const ArtistSection = () => {
  return (
    <>
      <div className="hidden xxl:block w-[100%] h-[100%] pt-[20px] md:pt-[70px] xxl:pt-0">
        {/* Contents */}
        <div className="w-[100%] grid xxl:grid-cols-2 px-[40px] sm:px-[65px] py-[30px] xxxxl:py-[50px] md:pt-[55px] xxxl:px-[300px]">
          {/* Text */}
          <div className="order-2 xxl:order-2 xxxxl:flex xxxxl:flex-col xxxxl:justify-center">
            <div className="hidden xxl:block">
              <h1 className="text-[16px] md:mt-[64px] leading-[48px] text-xl font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
                The Artist
              </h1>
            </div>
            <div className="flex flex-col w-[100%] gap-y-[30px] md:py-[50px] md:w-[585px] xxl:w-full md:mx-auto xxl:mx-0">
              <p className="font-[be-vietnam] text-center text-[16px] xl:text-[20px] xxl:text-left xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                <b>Dr. John Dahlsen</b> stands as a globally recognised figure
                in the realm of environmental artistry and scholarly authorship.
              </p>

              <p className="font-[be-vietnam] text-justified hidden md:block text-center text-[16px] xl:text-[20px] xxl:text-left xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                His accolades encompass prestigious distinctions such as the
                2000 Wynne Prize. His artistic oeuvre prominently revolves
                around the thematic resonance of oceanic detritus, particularly
                plastic waste.
              </p>

              <p className="font-[be-vietnam] text-justified hidden md:block text-center text-[16px] xl:text-[20px] xxl:text-left xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                Through adroitly controlling discarded marine materials, John
                Dahlsen crafts visually captivating compositions imbued with
                profound commentary on the pervasive concern of plastic
                pollution, invoking notions of equilibrium and harmony.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-col justify-center items-center order-1 h-[196px] md:h-[438px] xxl:h-[100%] md:px-[0px] md:w-[100%] md:h-[100%] xxl:order-1 mb-[30px] md:mb-0 xl:items-start">
            <div className="">
              <img
                className="rounded-[20px] w-[585px] md:block xxxxl:w-[882px] xxxxl:h-[530px]"
                src={JD}
                alt={"JD"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block xxl:hidden">
        <Artist />
      </div>
    </>
  );
};

export default ArtistSection;
