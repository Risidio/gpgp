import ContributeCarousel from "../components/contribute/ContributeCarousel";
import ContributeHero from "../components/contribute/ContributeHero";

export default function Contribute() {
  const HeroContent = {
    heading: "Contribute",
    // subheading: "",
    HeroLegend: [
      ` The Great Pacific Garbage Patch Art Project is an exciting
      initiative that welcomes both artists and investors to join us in
      making a profound impact on the environment.`,
      ` Together, we can create a harmonious blend of creativity and capital
      to tackle one of the planet's most pressing environmental
      challenges.`,
      `Join us on this remarkable journey to combat the Great Pacific
      Garbage Patch through the transformative power of art and
      investment.`,
    ],
  };

  return (
    <div>
      <ContributeHero
        HeroContent={HeroContent}
        classes={{
          container: "mb-[-70px] xsm:mb-[-150px]",
          image: "opacity-40 md:z-[-2px] z-[-4px] hidden",
          heading: " sm:text-[2.2rem] lg:text-[2.4rem] xxl:text-[3rem] mb-9 sm:mb-16 ",
          paragraph: "w-[148%] leading-[1rem] sm:leading-6 xxl:text-[1.5rem] xxl:leading-[2rem]",
        }}
      />

      <div className="relative mt-14 xsm:mt-[-150px] lg:min-h-[750px] sm:min-h-[700px] ">
        <ContributeCarousel />
      </div>
    </div>
  );
}
