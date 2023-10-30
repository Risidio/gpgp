import gpgpMapImage from "../../assets/images/gpgp-map-mobile.png";

const ProjectHero = () => {
  return (
    <>
      <div className="sm:flex w-[100%] md:pt-[30px] md:mb-[-150px]">
        <div className="h-[100%] w-[100%] z-[4px] opacity-[1] md:z-[400] z-[400]">
          <div className="flex flex-col w-[100%] items-center justify-center md:min-h-[556px] md:w-[1194px] mx-auto uppercase font-[700] md:leading-[59px] md:text-[40px]">
          <img
          src={require("../../assets/images/contributeHero.png")}
          alt="GPGP-map"
          className={`hidden md:block absolute p-16 filter blur-sm opacity-30 md:z-[-2px] z-[-4px]`}
        />
            <div className="mt-[44.21px] mb-[31.96px] md:mb-[109px] md:mt-[118px]">
              <h1 className="leading-[29.5px] text-[20px] md:leading-[29.5px] font-bold md:font-[600px] md:text-[30px] lg:text-[40px] text-center lg:leading-[59px] md:leading-[55px]">
                The Great Pacific Garbage Patch Art Project{" "}
              </h1>
            </div>
            <img
              src={gpgpMapImage}
              alt={"GPGP Map"}
              className="md:hidden w-[316px] h-[194px] mb-[20px] mx-auto sm:mb-[14.3px]"
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
