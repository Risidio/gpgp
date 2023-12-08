import { IProjectHeroProps } from './../../types/project/index';
const ProjectHero = ({ contents }: IProjectHeroProps) => {
  return (
    <>
      <div className="py-[30px]">
        <div className="flex flex-col gap-y-[20px] md:gap-y-[10px]">
          <div className="text-center flex flex-col px-[20px] md:px-[0px]">
            <h1 className="uppercase font-[be-vietnam-xbold] font-bold text-[20px] leading-[29.5px] md:text-[36px] md:leading-[53.1px]">
              {contents?.project_title[0].text}
            </h1>
            <p className="hidden md:block uppercase font-[be-vietnam-semibold] text-[20px] leading-[30px] tracking-normal">
              {contents?.project_subtitle[0].text}
            </p>
          </div>
          <div className="px-[15px]">
            <div className="flex flex-col justify-center items-center md:pt-[40px]">
              <img src={contents?.gpgp_image.url} alt="GPGP Map" />
            </div>
          </div>
          {/* <p className="md:hidden text-center font-[be-vietnam-semibold] text-[16px] leading-[23.6px] md:text-[20px] md:leading-[30px] tracking-normal">Contribute To The Global Effort<br/> Create a better world</p> */}
          <p
            dangerouslySetInnerHTML={{
              __html: contents?.project_subtitle2[0].text,
            }}
            className="md:hidden text-center font-[be-vietnam-semibold] text-[16px] leading-[23.6px] md:text-[20px] md:leading-[30px] tracking-normal"
          ></p>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
