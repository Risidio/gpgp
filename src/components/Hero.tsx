import MyLink from "./base/MyLink";
import gpgpMapImage from "../assets/images/new_gpgp_hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="hidden lg:block px-[80px] py-[60px]">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-[7px]">
              <h3 className="text-[16px] uppercase font-[be-vietnam-xbold] leading-24 tracking-normal text-left">
                The Great Pacific Garbage Patch
              </h3>
              <h1 className="uppercase text-[36px] font-[be-vietnam-xbold] leading-53 tracking-normal text-left">
                Art Project by Environmental
                <br /> artist john Dahlsen & InfinArt{" "}
              </h1>
              <p className="font-[be-vietnam] text-[16px] font-normal leading-24 tracking-normal text-left">
                The Art Inspiring Global Action
              </p>
            </div>
            <div className="flex flex-row gap-x-[19px] py-[16px]">
              {/* <MyLink
                to="/gallery"
                className="px-[50px] py-[15px] border border-[1px] border-gpgp-blue"
              >
                <p className="uppercase text-[16px] font-[be-vietnam-bold] leading-[23.6px] tracking-[3px]">
                  Gallery
                </p>
              </MyLink> */}
             <MyLink
                to="/gallery"
                className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[10px] py-[11px] md:bg-white text-white md:text-gpgp-blue md:w-60 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
              >
                <p className="font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                 Gallery
                </p>
              </MyLink>
              <MyLink
                to="/contribute"
                className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[10px] py-[11px] text-white md:w-60 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
              >
                <p className="font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                  Join
                </p>
              </MyLink>
            </div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img src={gpgpMapImage} alt="GPGP" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col justify-center items-center px-10 uppercase">
        <h1 className="text-center text-[1rem] font-[be-vietnam-xbold] pt-10">
          The great pacific garbage patch art project
        </h1>
        <h2 className="text-[1rem] py-1 text-center">
          John Dahlsen & InfinArt
        </h2>
        <img
          src={require("../assets/images/gpgp-map-mobile.png")}
          alt="gpgp map"
          className="object-center py-3 w-[282px] h-[175px]"
        />
        <h4 className="text-[1rem] font-semibold text-center mt-[20px]">
          The art <br /> inspiring global action
        </h4>
        <div className="w-full flex justify-center gap-x-2 mt-[48px]">
          <MyLink to="/gallery" className="uppercase py-2 w-48">
            explore
          </MyLink>
          <MyLink
            to="/contribute"
            className="uppercase py-2 bg-gpgp-blue text-white hover:bg-white hover:text-gpgp-blue w-48"
          >
            join us
          </MyLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
