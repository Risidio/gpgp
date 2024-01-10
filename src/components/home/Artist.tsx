// import MyLink from "../base/MyLink";
import JDFrame from "../../assets/images/JD-Frame.png";
import Wrapper from "../layout/Wrapper";

const Artist = ({ ...props }) => {
  return (
    <Wrapper>
      <div
        className={`flex flex-col justify-center items-center max-w-[289px] lg:w-[522px] mx-auto`}
      >
        <div className="text-[#050B1D] text-[16px] text-center font-[be-vietnam] font-semibold uppercase leading-[48px] tracking-[0.32px]">
          {/* <h1 className="text-[#050B1D] text-center font-[be-vietnam] bold-600 text-[16px] lg:text-[40px] leading-[48px] tracking-[0.32px] lg:tracking-[0.8px]">
            John Dahlsen
          </h1> */}
            The Artist
        </div>

        <div className="p-0 m-0">
          <img
            src={JDFrame}
            alt="John Dahlsen"
            className="w-[163.64px] md:w-[299px] h-auto"
          />
        </div>


        <p className="w-full mt-[28px] text-center text-[#050B1D] text-[15px] font-[be-vietnam-normal-400] leading-[30px]">
          Dr. John Dahlsen is an internationally renowned environmental artist
          and author. His art features ocean debris, specifically plastic waste
          he uses the ocean debris to create visually stunning compositions
          evoking harmony and balance on the plastic pollution.
        </p>

        {/* <div className="">
          <MyLink
            to="/project"
            className="w-[234px] lg:w-[332px] h-[40px] lg:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mt-[36px] lg:mt-[70px]"
          >
            <p className="text-white text-center text-[15px] text-[16px] uppercase font-[be-vietnam] bold-700 leading-[22.126px] lg:leading-[23.602px] tracking-[4.125px] lg:tracking-[4.4px]">
              Find out more
            </p>
          </MyLink>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default Artist;
