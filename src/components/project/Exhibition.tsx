import GalleryImage from "../../assets/images/gpgp_gallery_art.jpg";
import { IExhibitionSectionProps } from "../../types/project";
import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";

const Exhibition = ({ contents }: IExhibitionSectionProps) => {
  return (
    <>
    <Wrapper>
    <section className="lg:flex mt-[118px] lg:mt-[258px] justify-center gap-x-[129px]">
        {/* Image Column */}
        <div className="lg:order-2 flex flex-col items-center lg:justify-center">
          {/* Home header Title */}
          <div className="lg:hidden lg:w-0 lg:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam-600] leading-[48px] tracking-[0.32px] text-center">
            {contents?.title[0].text}
          </div>

          {/* Image */}
          <div className="">
            <img
              src={GalleryImage}
              alt="The Challenge"
              className="w-[293px] h-[170.917px] lg:w-[585.281px] lg:h-[434px] lg:rounded-[20px] mt-[36px] lg:mt-0"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="mx-auto lg:mx-0 text-center lg:text-left w-[293px] lg:w-[484px]">
          <h1 className="hidden lg:block font-[be-vietnam] bold-600 text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">
            {contents?.title[0].text}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: contents?.firstparagraph[0].text,
            }}
            className="text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] tracking-[1px] mt-[33px] lg:mt-[67px]"
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: contents?.secondparagraph[0].text,
            }}
            className="hidden lg:block mt-[50px] text-[15px] lg:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] font-[be-vietnam] bold"
          ></p>
          <MyLink
            to="/gallery"
            className="w-[187px] lg:w-[223px] h-[40px] lg:h-[63px] bg-gpgp-blue lg:bg-white rounded-[2px] shrink-0 mt-[35px] lg:mt-[74px] mx-auto lg:mx-0"
          >
            <p className="text-white lg:text-gpgp-blue text-center text-[15px] lg:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] lg:leading-[23.602px] lg:tracking-[4.4px] tracking-[4.125px]">
              {contents?.button}
            </p>
          </MyLink>
        </div>
      </section>
    </Wrapper>
      
    </>
  );
};

export default Exhibition;
