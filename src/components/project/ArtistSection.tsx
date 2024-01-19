import JD from "../../assets/images/JD.png";
import { IHomeArtistProp } from "../../types/home";
import Wrapper from "../layout/Wrapper";
import Artist from "./Artist";

const ArtistSection = ({contents}:IHomeArtistProp) => {

  return (
    <>
      <Wrapper>
        <section className="hidden lg:flex lg:mt-[258px] justify-center gap-x-[124px]">
          {/* Image Column */}
          <div className="lg:order-1 flex flex-col ">
            {/* Home header Title */}
            <div className="lg:hidden lg:w-0 lg:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam-600] leading-[48px] tracking-[0.32px] text-center">
              <h1>The Artist</h1>
            </div>

            {/* Image */}
            <div className="h-full">
              <img
                src={JD}
                alt="John Dahlsen"
                className="w-[293px]  lg:w-[579px] h-full lg:rounded-[20px] mt-[36px] lg:mt-0 object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="mx-auto lg:mx-0 text-center lg:text-left lg:flex lg:flex-col w-[293px] lg:w-[485.638px] lg:order-2 lg:mt-[37.97px]">
            <h1 className="hidden lg:block font-[be-vietnam] bold-600 text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">
              The Artist
            </h1>
            <div className="lg:w-[485.638px] leading-[200%]">
              <p className="text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] mt-[33px] lg:mt-[48px]">
                <b>Dr. John Dahlsen</b> stands as a globally recognised figure
                in the realm of environmental artistry and scholarly authorship.
              </p>
              <p className="hidden lg:block mt-[48px] text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D]">
                His accolades encompass prestigious distinctions such as the
                2000 Wynne Prize. His artistic oeuvre prominently revolves
                around the thematic resonance of oceanic detritus, particularly
                plastic waste.
              </p>
              <p className="hidden lg:block mt-[48px] text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D]">
                Through adroitly controlling discarded marine materials, John
                Dahlsen crafts visually captivating compositions imbued with
                profound commentary on the pervasive concern of plastic
                pollution, invoking notions of equilibrium and harmony.
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
      <div className="block lg:hidden mt-[124px]">
        <Artist contents={contents}/>
      </div>
    </>
  );
};

export default ArtistSection;
