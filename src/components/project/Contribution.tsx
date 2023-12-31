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
      <div
        className={`w-[100%] xxl:w-[100%] xxxxl:w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover md:h-[694.37px] pt-[50px] sm:pt-[90px] md:pt-[73px] md:mt-[73px] xl:pt-[100px] xxl:pt-[100px] xxxl:pt-[200px] xxxxl:pt-[300px] xxxl:pb-[650px] xxxxl:pb-[640px] ${container} md:hidden`}
      >
        <h1
          className={`text-[16px] md:text-[40px] md:font-[700] uppercase text-white mt-[100.2px] md:mt-[400px] text-center ${heading}`}
        >
          contribute to the global effort
        </h1>
        <h3
          className={`text-[16px] md:text-[40px] md:font-[700] uppercase text-white text-center ${subheading}`}
        >
          Create a better world
        </h3>
      </div>
    </>
  );
};

export default ContributionSection;
