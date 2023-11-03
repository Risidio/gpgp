import MyLink from "./base/MyLink";
import gpgpMapImage from "../assets/images/gpgp-map-mobile.png";

const Hero = () => {
  return (
    <>
      {/* <div className="sm:flex hidden w-full bg-hero-back bg-no-repeat lg:bg-[length:749px_459px] sm:bg-[length:500px_600px] m-0 p-0">
        <div className="flex flex-col justify-center items-start uppercase xl:px-0 sm:px-5 h-[500px]">
          <h1 className="md:text-[1.2rem] text-[1rem] font-semibold">
            The great pacific garbage patch art project
          </h1>
          <h2 className="text-[1rem] font-semibold py-1">
            Enviromental artist john dahlsen & infinart
          </h2>
          <h4 className="text-[1rem] font-semibold mt-20">
            The art inspiring global action
          </h4>
          <div className="w-full flex justify-start gap-x-2 py-5 mt-20">
            <MyLink to="" className="uppercase py-2 w-44">
              gallery
            </MyLink>
            <MyLink
              to=""
              className="uppercase py-2 bg-gpgp-blue text-white hover:bg-white hover:text-gpgp-blue w-44"
            >
              join us
            </MyLink>
          </div>
        </div>
      </div> */}

      <div className="sm:flex hidden w-full m-0 px-[64.5px] pb-[20px]">
        <div className="flex flex-col uppercase xl:px-0 sm:px-5">
          <h1 className="text-[40px] font-bold">
            The great pacific garbage patch art project
          </h1>
          <h2 className="text-[24px] font-semibold">
            Enviromental artist john dahlsen & infinart
          </h2>
          <div className="flex flex-row">
            <div className="w-full flex flex-col">
              <h4 className="text-[24px] font-semibold my-auto">
                The art inspiring global action
              </h4>
              <div className="w-[40%] flex justify-start gap-x-2">
                <MyLink to="" className="uppercase py-2 w-44">
                  gallery
                </MyLink>
                <MyLink
                  to=""
                  className="uppercase py-2 bg-gpgp-blue text-white hover:bg-white hover:text-gpgp-blue w-44"
                >
                  join us
                </MyLink>
              </div>
            </div>

            <div className="w-full flex items-center pl-[71px]">
              <img
                src={gpgpMapImage}
                alt={"GPGP Map"}
                className="w-[1280px] h-[459px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col justify-center items-center px-10 uppercase">
        <h1 className="text-center text-[1rem] font-semibold pt-10">
          The great pacific garbage patch art project
        </h1>
        <h2 className="text-[1rem] py-1 text-center">John Dahlsen & InfinArt</h2>
        <img
          src={require("../assets/images/gpgp-map-mobile.png")}
          alt="gpgp map"
          className="object-center py-3 w-[282px] h-[175px]"
        />
        <h4 className="text-[1rem] font-semibold text-center mt-[20px]">
          The art <br /> inspiring global action
        </h4>
        <div className="w-full flex justify-center gap-x-2 mt-[48px]">
          <MyLink to="" className="uppercase py-2 w-48">
            explore
          </MyLink>
          <MyLink
            to=""
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
