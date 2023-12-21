import MyLink from "../base/MyLink";
import JDFrame from "../../assets/images/JD-Frame.png";
import Wrapper from "../layout/Wrapper";

const Artist = ({ ...props }) => {
  return (
    <Wrapper>
      <div
        className={`flex flex-col justify-center items-center w-[289px] xl:w-[522px] mx-auto`}
      >
        <div className="p-0 m-0">
          <img
            src={JDFrame}
            alt="John Dahlsen"
            className="w-[163.64px] md:w-[299px] h-auto"
          />
        </div>

        <div className="">
          <h1 className="text-[#050B1D] text-center font-[be-vietnam] bold-600 text-[16px] xl:text-[40px] leading-[48px] tracking-[0.32px] xl:tracking-[0.8px]">
            John Dahlsen
          </h1>

          <p className="text-[#050B1D] text-[16px] text-center font-[be-vietnam] bold-700 xl:mt-[8px] xl:font-[be-vietnam-700] uppercase leading-[23.602px] tracking-[0.32px] xl:tracking-[4.4px]">
            The Artist
          </p>
        </div>

        <p className="w-full mt-[28px] xl:mt-[60px] text-center text-[#050B1D] text-[15px] xl:text-[1rem] font-[be-vietnam-normal-400] leading-[30px] xl:leading-[32px] xl:tracking-[0.5px]">
          Dr. John Dahlsen is an internationally renowned environmental artist
          and author. His art features ocean debris, specifically plastic waste
          he uses the ocean debris to create visually stunning compositions
          evoking harmony and balance on the plastic pollution.
        </p>

        <div className="">
          <MyLink
            to="/project"
            className="w-[234px] xl:w-[332px] h-[40px] xl:h-[63px] bg-gpgp-blue rounded-[2px] shrink-0 mt-[36px] xl:mt-[70px]"
          >
            <p className="text-white text-center text-[15px] text-[16px] uppercase font-[be-vietnam] bold-700 leading-[22.126px] xl:leading-[23.602px] tracking-[4.125px] xl:tracking-[4.4px]">
              Find out more
            </p>
          </MyLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Artist;
