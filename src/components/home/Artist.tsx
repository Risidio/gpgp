import MyLink from "../base/MyLink";

const Artist = ({...props}) => {
  return (
    // <div className="flex flex-col justify-center items-center py-5 md:py-[40px] xl:pt-[120px] px-10 w-full sm:mx-auto sm:text-black">
    //   {/* <div className="bg-artist-back bg-no-repeat w-[300px] h-[300px] bg-[length:300px_300px] rounded-full p-12">
    //     <div className="bg-white rounded-full w-full flex flex-col pt-4 pb-[20px]">
    //       <img
    //         src={require("../../assets/images/JD-mobile.png")}
    //         alt="Dr John Dahlsen"
    //         className="w-[200px] h-[150px] mt-[10px] rounded-[50%]"
    //       />
    //     </div>
    //   </div> */}
    //   <div className="flex flex-col justify-center items-center bg-artist-back bg-no-repeat bg-cover w-[230px] h-[230px] p-12">
    //     <div className="bg-[white] w-[150px] h-[150px] mt-[-9px] rounded-full pb-[10px] pt-[23px] px-[10px]">
    //       <img
    //         src={require("../../assets/images/john-dahlsen.png")}
    //         alt="Dr John Dahlsen"
    //         className="w-[220px] h-[120px] mt-[-1px] rounded-tr-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-bl-[50%]"
    //       />
    //     </div>
    //   </div>

    //   <div>
    //     <h1 className="sm:text-[#050B1D] text-center text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] xxl:text-[35px] xxxl:text-[64px] font-[be-vietnam-bold]">
    //       John Dahlsen
    //     </h1>

    //     <p className="sm:text-[#050B1D] text-center font-[be-vietnam-xbold] text-[15px] xl:text-[20px] xxxl:text-[25px] font-bold uppercase mt-[5px] lg:mt-[10px]">
    //       The Artist
    //     </p>
    //   </div>

    //   <div className="w-[310px] md:w-[522px] mx-auto py-[35px] mt-[-15px]">
    //     <p className="text-center sm:text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
    //       Dr. John Dahlsen is an internationally renowned environmental artist
    //       and author. His art features ocean debris, specifically plastic waste
    //       he uses the ocean debris to create visually stunning compositions
    //       evoking harmony and balance on the plastic pollution.
    //     </p>
    //   </div>

    //   <div className="">
    //     <MyLink to="" className="w-[187px] bg-gpgp-blue">
    //       <p className="px-[10px] py-[9px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.13px] uppercase text-white text-[15px]">
    //         Find out more
    //       </p>
    //     </MyLink>
    //   </div>
    // </div>

    <div className={`flex flex-col justify-center items-center w-[289px] xl:w-[522px] mx-auto`}>
      {/* <div className="bg-artist-back bg-no-repeat w-[300px] h-[300px] bg-[length:300px_300px] rounded-full p-12">
  <div className="bg-white rounded-full w-full flex flex-col pt-4 pb-[20px]">
    <img
      src={require("../../assets/images/JD-mobile.png")}
      alt="Dr John Dahlsen"
      className="w-[200px] h-[150px] mt-[10px] rounded-[50%]"
    />
  </div>
</div> */}
      <div className="flex flex-col justify-center items-center bg-artist-back bg-no-repeat bg-cover w-[230px] h-[230px]">
        <div className="bg-[white] w-[150px] h-[150px] mt-[-9px] rounded-full pb-[10px] pt-[23px] px-[10px]">
          <img
            src={require("../../assets/images/john-dahlsen.png")}
            alt="Dr John Dahlsen"
            className="w-[220px] h-[120px] mt-[-1px] rounded-tr-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-bl-[50%]"
          />
        </div>
      </div>

      <div className="">
        <h1 className="text-[#050B1D] text-center font-[be-vietnam-600] text-[16px] xl:text-[40px] leading-[48px] tracking-[0.32px] xl:tracking-[0.8px]">
          John Dahlsen
        </h1>

        <p className="text-[#050B1D] text-[16px] text-center font-[be-vietnam-600] xl:mt-[8px] xl:font-[be-vietnam-700] uppercase leading-[23.602px] tracking-[0.32px] xl:tracking-[4.4px]">
          The Artist
        </p>
      </div>

      <p className="w-full mt-[28px] xl:mt-[60px] text-center text-[#050B1D] text-[15px] xl:text-[1rem] font-[be-vietnam-400] leading-[30px] xl:leading-[32px] xl:tracking-[0.5px]">
        Dr. John Dahlsen is an internationally renowned environmental artist and
        author. His art features ocean debris, specifically plastic waste he
        uses the ocean debris to create visually stunning compositions evoking
        harmony and balance on the plastic pollution.
      </p>

      <div className="">
        {/* <MyLink to="" className="w-[187px] bg-gpgp-blue">
          <p className="px-[10px] py-[9px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.13px] uppercase text-white text-[15px]">
            Find out more
          </p>
        </MyLink> */}

        <MyLink
          to=""
          className="w-[234px] xl:w-[332px] h-[40px] xl:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mt-[36px] xl:mt-[70px]"
        >
          <p className="text-white text-center text-[15px] text-[16px] uppercase font-[be-vietnam-700] leading-[22.126px] xl:leading-[23.602px] tracking-[4.125px] xl:tracking-[4.4px]">
            Find out more
          </p>
        </MyLink>
      </div>
    </div>
  );
};

export default Artist;
