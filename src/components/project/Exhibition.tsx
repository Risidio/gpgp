import GalleryImage from "../../assets/images/gallery_image.jpg";
// import GalleryImageWeb from "../../assets/images/gallery_image_web.jpg";
import { IExhibitionSectionProps } from "../../types/project";
import MyLink from "../base/MyLink";

const Exhibition = ({ contents }: IExhibitionSectionProps) => {
  return (
    <>
      <div className="w-[100%] h-[100%]">
        <h1 className="md:hidden text-center text-[16px] mt-[30px] md:mt-[64px] leading-[48px] uppercase font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px] md:leading-[48px]">
          {contents?.title[0].text}
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px]">
          <div className="order-2 md:order-1 ">
            <h1 className="hidden md:block px-[40px] md:px-[80px] text-[16px] md:mt-[64px] leading-[48px] font-[be-vietnam-semibold] md:text-[40px] md:leading-[48px]">
              {contents?.title[0].text}
            </h1>
            <div className="w-[100%] md:py-[60px] px-[15px] md:px-[80px] flex flex-col gap-y-[40px]">
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
          <div className="h-[200px] mx-[20px] md:mx-0 md:w-[100%] md:h-[100%] order-1 md:order-2 mb-[30px] md:mb-0">
            <img
              className="w-[100%] h-[100%] hidden md:block"
              src={GalleryImage}
              alt={contents?.image.alt}
            />
            <img
              className="w-[100%] h-[100%] md:hidden"
              src={GalleryImage}
              alt={contents?.image.alt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
