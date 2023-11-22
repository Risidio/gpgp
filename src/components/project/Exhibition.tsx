import GalleryImage from "../../assets/images/gallery_image.jpg";
import GalleryImageWeb from "../../assets/images/gallery_image_web.jpg";
import { IExhibitionSectionProps } from "../../types/project";
import MyLink from "../base/MyLink";

const Exhibition = ({ contents }: IExhibitionSectionProps) => {
  return (
    <>
      <div className="w-[100%] h-[100%] mt-[60px] lg:mt-[200px]">
        <h1 className="md:hidden text-center text-[16px] md:mt-[64px] leading-[48px] uppercase font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px] md:leading-[48px]">
          {contents?.title[0].text}
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] lg:mt-[70px] md:px-[30px]">
          <div className="order-2 md:order-1 xxxxl:flex xxxxl:flex-col xxxxl:justify-center">
            <div className="pl-[30px]">
              <h1 className="hidden md:block text-[16px] md:mt-[64px] leading-[48px] text-xl font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
                {contents?.title[0].text}
              </h1>
            </div>
            <div className="w-[100%] md:py-[50px] px-[30px] flex flex-col gap-y-[30px]">
              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.firstparagraph[0].text,
                }}
                className="font-[be-vietnam] text-center md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: contents?.secondparagraph[0].text,
                }}
                className="font-[be-vietnam] text-justified hidden md:block md:text-left text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]"
              ></p>

              <MyLink
                to="/gallery"
                className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[17px] py-[11px] md:bg-white text-white md:text-gpgp-blue md:w-56 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
              >
                <p className="font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                  {contents?.button}
                </p>
              </MyLink>
            </div>
          </div>
          <div className="flex flex-col justify-center xxxxl:justify-end items-center xxxxl:items-end h-[200px] px-[50px] md:px-[0px] xxxxl:pr-[50px] md:w-[100%] md:h-[100%] order-1 md:order-2 mb-[30px] md:mb-0">
            <img
              className="w-[630px] xxxxl:w-[90%] h-[630px] xxxxl:h-[100%] hidden md:block rounded-[20px]"
              src={GalleryImageWeb}
              alt={"The Challenge Web"}
            />
            <img
              className="w-[100%] h-[100%] md:hidden"
              src={GalleryImage}
              alt={"The Challenge Mobile"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
