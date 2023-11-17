import JD from "../../assets/images/john-dahlsen.png";
import Artist from "../home/Artist";

const ArtistSection = () => {
  return (
    <>
      {/* <div className="w-full hidden xxl:block bg-gpgp-blue xl:bg-[white]">
        <h1 className="font-[be-vietnam-xbold] uppercase text-center md:pt-[0px] font-[600] lg:font-[600] md:font-[600] lg:text-[40px] lg:leading-[48px] lg:mt-[64px]">
          The Artist
        </h1>

        <div className="w-[100%] md:h-[481px] grid md:grid-cols-2 mt-[15px] md:mt-[90px] md:border-y-[1px] md:border-black">
          <div className="md:ml-[66px] h-[100%] md:w-[578px] relative">
            <svg
              viewBox="0 0 538 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute mx-auto w-[520px] h-[538px] left-[30px] rounded-tl-[40px] rounded-tr-[40px] mt-[-41px] hidden md:block"
            >
              <path
                d="M498 -1.74846e-06C520.091 -7.82811e-07 538 17.9086 538 40L538 520L-2.27299e-05 520L-1.74846e-06 40C-7.8281e-07 17.9086 17.9086 -2.27339e-05 40 -2.17683e-05L498 -1.74846e-06Z"
                fill="#0A2471"
              />
            </svg>
            <div>
              <img src={JD} alt={JD} className="md:absolute bottom-[0px]" />
            </div>
          </div>

          <div className="py-[60px] px-[40px] md:px-[10px] xxl:pl-[0px] xxl:pr-[20px] flex flex-col gap-y-6">
            <p className="text-white md:text-[black] text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px]">
              <b>Dr. John Dahlsen</b> stands as a globally recognised figure in
              the realm of environmental artistry and scholarly authorship.
            </p>

            <p className="text-justified hidden md:block text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px] xxxl:text-[28px]">
              His accolades encompass prestigious distinctions such as the 2000
              Wynne Prize. His artistic oeuvre prominently revolves around the
              thematic resonance of oceanic detritus, particularly plastic
              waste.
            </p>

            <p className="hidden md:block text-center md:text-left text-[15px] lg:text-[20px] xxxl:text-[28px] leading-[30px] md:leading-[32px] lg:leading-[35px] md:text-[16px] xxxl:text-[28px]">
              Through adroitly controlling discarded marine materials, John
              Dahlsen crafts visually captivating compositions imbued with
              profound commentary on the pervasive concern of plastic pollution,
              invoking notions of equilibrium and harmony.
            </p>
            <p className="block md:hidden text-white md:text-[black] text-center md:text-left text-[11px] md:text-[16px]">
              Dr. John Dahlsen is an internationally renowned environmental
              artist and author. His art features ocean debris, specifically
              plastic waste he uses the ocean debris to create visually stunning
              compositions evoking harmony and balance on the plastic pollution.
            </p>
            <div className="hidden md:block w-[260px] h-[20px] bg-gpgp-blue rotate-90 absolute right-[-120px] mt-[130px] rounded-br-[40px] rounded-bl-[40px]"></div>
          </div>
        </div>
        
      </div> */}
      <div className="hidden xxl:block w-[100%] h-[100%]">
        <h1 className="md:hidden text-center text-[16px] md:mt-[64px] leading-[48px] uppercase font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px] md:leading-[48px]">
          The Artist
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px]">
          <div className="h-[200px] w-[315px] mx-auto md:mx-0 md:w-[100%] md:h-[100%] mb-[30px] md:mb-0">
            <div className="py-[20px]">
              <div className="flex pl-[20px] mt-[20px]">
                <svg
                  viewBox="0 0 538 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-[590px] w-[820px] rounded-tl-[40px] rounded-tr-[40px] hidden md:block"
                >
                  <path
                    d="M498 -1.74846e-06C520.091 -7.82811e-07 538 17.9086 538 40L538 520L-2.27299e-05 520L-1.74846e-06 40C-7.8281e-07 17.9086 17.9086 -2.27339e-05 40 -2.17683e-05L498 -1.74846e-06Z"
                    fill="#0A2471"
                  />
                </svg>
              </div>
              <div className="flex pl-[60px] mt-[10px]">
                <img src={JD} alt={JD} className="absolute w-[720px]" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="px-[40px] md:px-[80px] text-[16px] md:mt-[64px] leading-[48px] font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
              The Artist
            </h1>
            <div className="w-[100%] order-2 md:order-1 md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-[40px]">
              <p className="font-[be-vietnam] text-center md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                <b>Dr. John Dahlsen</b> stands as a globally recognised figure
                in the realm of environmental artistry and scholarly authorship.
              </p>

              <p className="font-[be-vietnam] text-justified hidden md:block md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                His accolades encompass prestigious distinctions such as the
                2000 Wynne Prize. His artistic oeuvre prominently revolves
                around the thematic resonance of oceanic detritus, particularly
                plastic waste.
              </p>

              <p className="font-[be-vietnam] text-justified hidden md:block md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                Through adroitly controlling discarded marine materials, John
                Dahlsen crafts visually captivating compositions imbued with
                profound commentary on the pervasive concern of plastic
                pollution, invoking notions of equilibrium and harmony.
              </p>
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
