import GalleryImage from "../../assets/images/gpgp_gallery_art.jpg";
import { IExhibitionSectionProps } from "../../types/project";
import MyLink from "../base/MyLink";

const Exhibition = ({ contents }: IExhibitionSectionProps) => {
  return (
    <>
      <section className="xl:grid xl:grid-cols-2 xl:px-[60px] xxl:px-[120px] mt-[118px] xl:mt-[258px]">
        {/* Image Column */}
        <div className="xl:order-2 flex flex-col items-center xl:justify-center">
          {/* Home header Title */}
          <div className="xl:hidden xl:w-0 xl:h-0 text-[#050B1D] uppercase text-[16px] font-[be-vietnam-600] leading-[48px] tracking-[0.32px] text-center">
            {contents?.title[0].text}
          </div>

          {/* Image */}
          <div className="">
            <img
              src={GalleryImage}
              alt="The Challenge"
              className="w-[293px] xl:w-[585.281px] xl:h-[434px] h-auto xl:rounded-[20px] mt-[36px] xl:mt-0"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="mx-auto xl:mx-0 text-center xl:text-left w-[293px] xl:w-[522px]">
          <h1 className="hidden xl:block font-[be-vietnam-600] text-[#050B1D] text-[40px] leading-[48px] tracking-[0.8px]">
            {contents?.title[0].text}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: contents?.firstparagraph[0].text,
            }}
            className="text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] tracking-[1px] mt-[33px] xl:mt-[67px]"
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: contents?.secondparagraph[0].text,
            }}
            className="hidden xl:block mt-[50px] text-[15px] xl:text-[16px] font-[be-vietnam] text-[#050B1D] leading-[30px] font-[be-vietnam] bold"
          ></p>
          <MyLink
            to=""
            className="w-[187px] xl:w-[223px] h-[40px] xl:h-[63px] bg-gpgp-blue xl:bg-white rounded-[2px] shrink-0 mt-[35px] xl:mt-[74px] mx-auto xl:mx-0"
          >
            <p className="text-white xl:text-gpgp-blue text-center text-[15px] xl:text-[16px] uppercase font-[be-vietnam-700] leading-[normal] xl:leading-[23.602px] xl:tracking-[4.4px] tracking-[4.125px]">
              {contents?.button}
            </p>
          </MyLink>
        </div>
      </section>
    </>
  );
};

export default Exhibition;
