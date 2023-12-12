interface ContributeSectionProps {
  classes: {
    container?: string;
    heading?: string;
    subheading?: string;
  };
}

const ContributionSection = ({
  classes: { container = "", heading = "", subheading = "" },
}: ContributeSectionProps) => {
  return (
    <>
      {/* Mobile Version */}
      <div className=" w-[100%] xxl:w-[100%] xxxxl:w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[120px] sm:pt-[190px] md:pt-[200px] md:pb-[90px] md:mt-[70px] lg:pt-[100px] xl:pt-[250px] xxl:pt-[300px] xxxl:pt-[440px] xxxxl:pt-[560px] pb-[70px] xxxl:pb-[200px] xxxxl:pb-[200px] font-[be-vietnam-bold]">
        <h1 className=" text-[1rem] sm:text-[2rem] xxl:text-[2.5rem] md:font-[700] uppercase text-white text-center">
          Create a better world
        </h1>
        <h3 className=" text-[1rem] sm:text-[2rem] xxl:text-[2.5rem] md:font-[700] uppercase text-white text-center">
          contribute to the global effort
        </h3>
      </div>
    </>
  );
};

export default ContributionSection;
