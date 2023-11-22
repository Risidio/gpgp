import { IGalleryAboutProps } from "../../types/gallery";

const Information = ({ contents }: IGalleryAboutProps) => {
  return (
    <>
      <div className="w-full bg-h-[100%] bg-w-[100%] bg-project-page-wave bg-no-repeat bg-cover md:pb-[50px] xl:pb-[80px] xxxl:pb-[80px]">
        <div className="xxsm:pb-[30px]">
          <div className="flex flex-col text-white pt-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[250px] xl:pt-[400px] xxl:pt-[400px] xxxl:pt-[380px] xxxxl:pt-[700px]">
            <h1 className="hidden md:block text-center text-[16px] md:mt-[64px] leading-[48px] font-[be-vietnam-xbold] font-[600] md:font-[600] md:text-[40px] md:leading-[48px]">
              {contents?.title[0].text}
            </h1>
            <div className="py-[10px] lg:py-[20px] lg:py-[50px] xxxl:py-[60px] xl:py-[30px] px-[39px] sm:px-[39px] md:px-[150px] lg:px-[210px] xl:px-[200px] xxl:px-[380px] xxxl:px-[600px] xxxxl:px-[800px]">
              <p className="text-center text-[15px] md:text-[16px] lg:text-[19px] xl:text-[20px] xxxxl:text-[30px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                {contents?.firstparagraph[0].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
