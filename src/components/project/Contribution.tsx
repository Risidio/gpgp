const ContributionSection = () => {
  return (
    <>
      <div className="hidden md:block w-[100%] xxl:w-[100%] xxxxl:w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[50px] sm:pt-[90px] md:pt-[200px] md:pb-[100px] md:mt-[70px] xl:pt-[220px] xxl:pt-[300px] xxxl:pt-[440px] xxxxl:pt-[560px] xxxl:pb-[200px] xxxxl:pb-[200px]">
        <h1 className="text-[16px] xxl:text-[25px] md:font-[700] uppercase text-white text-center">
          contribute to the global effort
        </h1>
        <h3 className="text-[16px] xxl:text-[25px] md:font-[700] uppercase text-white text-center">
          Create a better world
        </h3>
      </div>
      <div className="md:hidden bg-project-page-mobile-wave bg-cover bg-no-repeat pt-[80px] lg:pt-[120px] h-[250px] lg:h-[250px] flex flex-col justify-center w-[100%]">
        <div className="font-[be-vietnam-semibold] text-white text-[16px] xl:text-[20px] xxxl:text-[25px] text-center uppercase">
          <p className="">Create a better world</p>
          <p>contribute to the global effort</p>
        </div>
      </div>
    </>
  );
};

export default ContributionSection;
