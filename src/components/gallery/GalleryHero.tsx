import { IGalleryHeroProps } from "../../types/gallery";

const ProjectHero = ({ contents }: IGalleryHeroProps) => {
  return (
    <>
      <div className="py-[30px]">
        <div className="flex flex-col gap-y-[20px] md:gap-y-[10px]">
          <div className="text-center flex flex-col">
            <h1 className="uppercase font-[be-vietnam-xbold] font-bold text-[20px] leading-[29.5px] md:text-[36px] md:leading-[53.1px]">
              {contents?.title[0].text}
            </h1>
            <p className="hidden md:block uppercase font-[be-vietnam-semibold] text-[20px] leading-[30px] tracking-normal">
              {contents?.subtitle[0].text}
            </p>
          </div>
          <div className="px-[15px]">
            <div className="flex flex-col justify-center items-center md:pt-[40px]">
              <img src={contents?.image.url} alt={contents?.image.alt} />
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: contents?.subtitle2[0].text,
            }}
            className="md:hidden text-center font-[be-vietnam-semibold] text-[16px] leading-[23.6px] md:text-[20px] md:leading-[30px] tracking-normal"
          ></p>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
