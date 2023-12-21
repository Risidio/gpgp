import JD from "../../assets/images/JD.png";
import Artist from "../home/Artist";
import Wrapper from "../layout/Wrapper";
import Wrapper from "../layout/Wrapper";

const ArtistSection = () => {
  return (
    <>
      <section className="hidden xl:block xl:grid xl:grid-cols-2 xl:px-[60px] xxl:px-[120px] xl:mt-[258px]">
        {/* Image Column */}
        <div className="xl:order-1 flex flex-col xl:justify-center">
          {/* Home header Title */}
          <div className="xl:hidden xl:w-0 xl:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam-600] leading-[48px] tracking-[0.32px] text-center">
            <h1>The Artist</h1>
          </div>

            {/* Image */}
            <div className="">
              <img
                src={JD}
                alt="John Dahlsen"
                className="w-[293px] xl:ml-[-35px] xl:w-[579px] h-auto xl:rounded-[20px] mt-[36px] xl:mt-0"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="mx-auto xl:mx-0 xl:ml-[50px] xxl:ml-[30px] text-center xl:text-left xl:flex xl:flex-col w-[293px] xl:w-full xl:order-2">
            <h1 className="hidden xl:block font-[be-vietnam] bold-600 text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">
              The Artist
            </h1>
            <div className="xl:w-[500px] xxl:w-[560px]">
              <p className="text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] tracking-[1px] mt-[33px] xl:mt-[67px]">
                <b>Dr. John Dahlsen</b> stands as a globally recognised figure
                in the realm of environmental artistry and scholarly authorship.
              </p>
              <p className="hidden xl:block mt-[50px] text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] font-[be-vietnam] bold">
                His accolades encompass prestigious distinctions such as the
                2000 Wynne Prize. His artistic oeuvre prominently revolves
                around the thematic resonance of oceanic detritus, particularly
                plastic waste.
              </p>
              <p className="hidden xl:block mt-[50px] text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] font-[be-vietnam] bold">
                Through adroitly controlling discarded marine materials, John
                Dahlsen crafts visually captivating compositions imbued with
                profound commentary on the pervasive concern of plastic
                pollution, invoking notions of equilibrium and harmony.
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
      <div className="block xl:hidden mt-[118px]">
        <Artist />
      </div>
    </Wrapper>
     
    </>
  );
};

export default ArtistSection;
