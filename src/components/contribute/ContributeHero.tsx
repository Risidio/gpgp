interface ContributeHeroProps {
  HeroContent: {
    heading: string;
    subheading?: string;
    HeroLegend?: string[];
  };
  classes: {
    container?: string;
    image?: string;
    heading?: string;
    subheading?: string;
    paragraph?: string;
  };
}

export default function ContributeHero({
  HeroContent,
  classes: {
    container = "",
    image = "",
    heading = "",
    subheading = "",
    paragraph = "",
  },
}: ContributeHeroProps) {
  return (
    <div className={`w-[100%] flex justify-center items-center px-8 sm:p-16 relative ${container}`}>
      <div className={`flex flex-col justify-center items-center text-center w-[80%] text-black`}>
        <img
          src={require("../../assets/images/contributeHero.png")}
          alt="GPGP-map"
          className={`p-16 filter blur-sm ${image}`}
        />

        <h1 className={`z-2 md:z-10 opacity-100 font-[be-vietnam] font-bold text-[1.5rem] xsm:text-[2rem]  uppercase ${heading}`}>
          {HeroContent.heading}
        </h1>
       {HeroContent.subheading 
          ? <h3 
              className={`xsm:text-[1.2rem] text-[16px] xl:text-[20px] xxxl:text-[25px] font-[be-vietnam] font-bold mb-2 sm:mb-5 z-2 md:z-10 opacity-100 ${subheading} `}>
              {HeroContent.subheading}
           </h3>
        : ""}

        {HeroContent && HeroContent?.HeroLegend?.map((item, index) => (
          <p
            className={` text-[0.8rem]  w-[140%] sm:text-[1.2rem] xsm:w-[120%] sm:w-[96%] font-be-vietnam mb-3 tracking-normal sm:tracking-wide z-8 md:z-10 opacity-100 ${paragraph}`}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
