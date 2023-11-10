import gpgpMapImage from "../../assets/images/gpgp-map-mobile.png";

const ProjectHero = () => {
  return (
    <>
      <div className="sm:flex w-[100%] mb-[-20px] md:mb-[-10px] lg:mb-[-200px] xl:mb-[-100px] xxl:mb-[-80px] xxxl:mb-[-320px] xxxxl:mb-[-220px]">
        <div className="h-[100%] w-[100%] z-[4px] opacity-[1] md:z-[400] z-[400]">
          <div className="flex flex-col w-[100%] items-center justify-center mx-auto uppercase font-[700] md:leading-[59px] md:text-[40px] lg:gap-y-[0px]">
            <div className="mt-[44.21px] lg:mt-[35px]">
              <h1 className="text-[20px] mb-[20px] md:leading-[29.5px] font-bold md:font-[600px] md:text-[30px] lg:text-[35px] xxxxl:text-[64px] text-center lg:leading-[59px] xxxxl:leading-[94.41px] md:leading-[55px]">
                The Great Pacific Garbage Patch Art Project{" "}
              </h1>
            </div>
            <img
              src={gpgpMapImage}
              alt={"GPGP Map"}
              className="w-[300px] h-[185px] mb-[20px] mx-auto md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[380px] xl:w-[700px] lg:h-[380px] xxxl:w-[1243px] xxxl:h-[762px]"
            />
            <div className="lg:px-[]">
              <h6 className="font-[500] font-bold text-[15px] md:text-[18px] lg:text-[28px] xxxxl:text-[64px] text-center xxxxl:leading-[94.41px]">
                contribute to the global effort<br/>
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
