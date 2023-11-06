import MyLink from "../base/MyLink";

const Artist = ({ ...props }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-5 w-full sm:w-[500px] sm:mx-auto sm:bg-white bg-gpgp-blue sm:text-black text-white">
      <div className="bg-artist-back bg-no-repeat w-[300px] h-[300px] bg-[length:300px_300px] rounded-full p-12">
        <div className="bg-white rounded-full w-full p-3">
          <img
            src={require("../../assets/images/john-dahlsen.png")}
            alt="Dr John Dahlsen"
            className="w-44 h-44 rounded-[50%]"
          />
        </div>
      </div>

      <h1 className="text-white sm:text-[#050B1D] text-center font-BeVietnam text-4xl font-semibold leading-[75%] tracking-[-1.28px]">
        John Dahlsen
      </h1>

      <span className="text-white sm:text-[#050B1D] text-center font-Inter text-[18px] font-bold leading-[147.51%] tracking-[4px] uppercase">
        The Artist
      </span>

      <p className="text-white text-center mt-9 sm:text-[#050B1D] font-BeVietnam text-[16px] md:text-[16px] lg:text-[20px] xl:text-[26px] font-normal font-hairline leading-[32px] lg:leading-[35px] xl:leading-[45px] my-[50px]">
        Dr. John Dahlsen is an internationally renowned environmental artist and
        author. His art features ocean debris, specifically plastic waste he
        uses the ocean debris to create visually stunning compositions evoking
        harmony and balance on the plastic pollution.
      </p>

      <div className="mt-12">
        <MyLink
          className="uppercase py-5 w-52 lg:w-64 xxxl:w-80 mx-auto h-12 xxxl:h-16 ml-0 text-base sm:bg-gpgp-blue bg-white sm:text-white text-gpgp-blue sm:hover:text-white/80 hover:text-gpgp-blue"
          to="#"
        >
          <p className="text-[#1F2D5A] sm:text-white text-center font-Inter text-[20px] xxxl:text-[1.5rem] font-bold leading-[147.51%] tracking-[0.5px]  uppercase">
            Find out more
          </p>
        </MyLink>
      </div>
    </div>
  );
};

export default Artist;
