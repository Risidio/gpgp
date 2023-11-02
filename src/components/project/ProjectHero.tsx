import gpgpMapImage from "../../assets/images/gpgp-map-mobile.png";

const ProjectHero = () => {
  return (
    <>
      <div className="sm:flex w-[100%] mb-[-20px] md:mb-[-10px] lg:mb-[-100px] xl:mb-[-80px] xxl:mb-[-80px] xxxl:mb-[-220px]">
        <div className="h-[100%] w-[100%] z-[4px] opacity-[1] md:z-[400] z-[400]">
          <div className="flex flex-col w-[100%] items-center justify-center mx-auto uppercase font-[700] md:leading-[59px] md:text-[40px] lg:gap-y-[30px]">
            <div className="mt-[44.21px] mb-[31.96px]">
              <h1 className="leading-[29.5px] text-[20px] md:leading-[29.5px] font-bold md:font-[600px] md:text-[30px] lg:text-[40px] text-center lg:leading-[59px] md:leading-[55px]">
                The Great Pacific Garbage Patch Art Project{" "}
              </h1>
            </div>
            <img
              src={gpgpMapImage}
              alt={"GPGP Map"}
              className="w-[300px] h-[185px] mb-[20px] mx-auto md:w-[680px] md:h-[493px] lg:w-[804px] lg:h-[493px]"
            />
            <div className="">
              <h6 className="font-[500] text-[16px] md:text-[32px] text-center">
                contribute to the global effort
              </h6>
              <h6 className="font-[500] text-[16px] md:text-[32px] text-center">
                Create a better world
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
