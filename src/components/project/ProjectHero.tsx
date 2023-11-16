import gpgpMapImage from "../../assets/images/new_gpgp_hero.jpg";

const ProjectHero = () => {
  return (
    <>
      <div className="py-[30px]">
        <div className="flex flex-col gap-y-[20px] md:gap-y-[10px]">
          <div className="text-center flex flex-col">
            <h1 className="uppercase font-[be-vietnam-xbold] font-bold text-[20px] leading-[29.5px] md:text-[36px] md:leading-[53.1px]">The Great Pacific Garbage Patch Art Project</h1>
            <p className="hidden md:block uppercase font-[be-vietnam-semibold] text-[20px] leading-[30px] tracking-normal">Contribute to the global effort</p>
          </div>
          <div className="px-[15px]">
            <div className="flex flex-col justify-center items-center md:pt-[40px]">
              <img src={gpgpMapImage} alt="GPGP Map"/>
            </div>
          </div>
          <p className="md:hidden text-center font-[be-vietnam-semibold] text-[16px] leading-[23.6px] md:text-[20px] md:leading-[30px] tracking-normal">Contribute To The Global Effort<br/> Create a better world</p>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
