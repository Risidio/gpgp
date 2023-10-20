import  { useState } from "react";
import ContributeHero from "../components/contribute/ContributeHero";
import ContributeInvitation from "../components/contribute/ContributeInvitation";

const Contribute = () => {
  const [currentSection, setCurrentSection] = useState("section1");

  const HeroContent = {
    heading: "Contribute",
    HeroLegend: [
      `The Great Pacific Garbage Patch Art Project is an exciting
      initiative that welcomes both artists and investors to join us in
      making a profound impact on the environment.`,
      `Together, we can create a harmonious blend of creativity and capital
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
           container: "",
           image: "opacity-50 z-[-4px]",
           heading: "mb-9 sm:mb-16",
           paragraph: "",
        }}
       />

        <div className="relative lg:min-h-[450px] sm:min-h-[400px]">
          <ContributeInvitation
              setCurrentSection={setCurrentSection}
              currentSection={currentSection}
          />
      </div>
    </div>
  );
}

export default Contribute;
