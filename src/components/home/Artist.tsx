import MyLink from "../base/MyLink";

const Artist = ({ ...props }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-[140px] px-10 w-full sm:mx-auto sm:text-black">
      <div className="bg-artist-back bg-no-repeat w-[300px] h-[300px] bg-[length:300px_300px] rounded-full p-12">
        <div className="bg-white rounded-full w-full flex flex-col pt-4 pb-[20px]">
          <img
            src={require("../../assets/images/john-dahlsen.png")}
            alt="Dr John Dahlsen"
            className="w-[200px] h-[150px] mt-[10px] rounded-[50%]"
          />
        </div>
      </div>

      <h1 className="sm:text-[#050B1D] text-center text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] xxl:text-[35px] xxxl:text-[64px] font-[be-vietnam-bold] leading-[48px] tracking-[-1.29px]">
        John Dahlsen
      </h1>

      <span className="sm:text-[#050B1D] text-center font-[be-vietnam-xbold] text-[15px] xl:text-[20px] xxxl:text-[25px] font-bold leading-[147.51%] uppercase mt-[20px]">
        The Artist
      </span>

      <div className="px-[10px] lg:px-[280px] py-[35px]">
        <p className="text-center sm:text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
          Dr. John Dahlsen is an internationally renowned environmental artist
          and author. His art features ocean debris, specifically plastic waste
          he uses the ocean debris to create visually stunning compositions
          evoking harmony and balance on the plastic pollution.
        </p>
      </div>

      <div className="">
        {/* <MyLink
          className="uppercase py-5 w-52 lg:w-64 xxxl:w-80 mx-auto h-12 xxxl:h-16 ml-0 text-base sm:bg-gpgp-blue bg-white sm:text-white text-gpgp-blue sm:hover:text-white/80 hover:text-gpgp-blue"
          to="#"
        >
          <p className="text-[#1F2D5A] sm:text-white text-center font-[be-vietnam-bold] text-[20px] xxxl:text-[1.5rem] font-bold leading-[147.51%] tracking-[9.9px] uppercase">
            Find out more
          </p>
        </MyLink> */}
        <MyLink
                to="/contribute"
                className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[10px] py-[11px] text-white tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
              >
                <p className="font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                  Find out more
                </p>
              </MyLink>
      </div>
    </div>
  );
};

export default Artist;
