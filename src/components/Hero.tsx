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

      <div className="md:flex hidden w-full m-0 px-[64.5px] xxxl:px-[0px] xxxxl:justify-center xxxxl:items-center md:px-[20px] pb-[20px]">
        <div className="flex flex-col uppercase xl:px-0 sm:px-5">
          <h1 className="text-[40px] md:text-[20px] lg:text-[30px] xl:text-[35px] xxl:text-[40px] xxxl:text-[60px] font-bold">
            The great pacific garbage patch art project
          </h1>
          <h2 className="text-[24px] md:text-[18px] lg:text-[22px] xl:text-[25px] xxl:text-[30px] xxxl:text-[50px] font-semibold">
            Enviromental artist john dahlsen & infinart
          </h2>
          <div className="flex flex-row">
            <div className="w-[30%] lg:w-[50%] md:w-[25%] flex flex-col">
              <h4 className="text-[24px] md:text-[18px] lg:text-[20px] xl:text-[22px] xxl:text-[24px] xxxl:text-[40px] font-semibold my-auto">
                The art inspiring global action
              </h4>
              <div className="flex justify-start gap-x-2 xxxl:gap-x-4">
                <MyLink to="/gallery" className="uppercase w-44 py-2 xxxl:w-[450px]">
                <p className="lg:text-[20px]">gallery</p>
                </MyLink>
                <MyLink
                  to=""
                  className="uppercase py-2 w-44 bg-gpgp-blue text-white hover:bg-white hover:text-gpgp-blue xxxl:w-[450px]"
                >
                  <p className="lg:text-[20px]">join us</p>
                </MyLink>
              </div>
            </div>

            <div className="w-full flex items-center pl-[71px] sm:pl-[100px] md:pl-[40px] lg:pl-[50px] xl:pl-[100px] xxl:pl-[120px] xxxl:pl-[140px] xxxxl:pl-[200px]">
              <img
                src={gpgpMapImage}
                alt={"GPGP Map"}
                className="sm:h-[300px] w-[1280px] md:w-[1200px] xxxl:w-[1700px] xxxxl:w-[2560px]  h-[459px] md:h-[300px] xxl:h-[400px] xxxl:h-[600px] xxxxl:h-[700px] xxxl:object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col justify-center items-center px-10 uppercase">
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
