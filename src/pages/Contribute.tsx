import { useSinglePrismicDocument } from "@prismicio/react";
import ContributeCarousel from "../components/contribute/ContributeCarousel";
import ContributeHero from "../components/contribute/ContributeHero";
import NewContributeHero from "../components/contribute/NewContributeHero";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";

export default function Contribute() {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.contribute);
  console.log(document);

  const artist = document?.data["body"][1]?.primary;
  const sponosr = document?.data["body"][2]?.primary;

  // Create an object with both properties
  const combinedProps = { artist,sponosr};

  return (
    <div>
      {/* <ContributeHero
        HeroContent={HeroContent}
        classes={{
          container: "mb-[-70px] xsm:mb-[-150px]",
          image: "opacity-40 md:z-[-2px] z-[-4px] hidden",
          heading: " sm:text-[2.2rem] lg:text-[2.4rem] xxl:text-[3rem] mb-9 sm:mb-16 ",
          paragraph: "w-[148%] leading-[1rem] sm:leading-6 xxl:text-[1.5rem] xxl:leading-[2rem]",
        }}
      /> */}
      <NewContributeHero
        contents={document?.data["body"][0].primary}
        classes={{
          container: undefined,
          image: undefined,
          heading: undefined,
          subheading: undefined,
          paragraph: undefined,
        }}
      />

      <div className="relative mt-14 xsm:mt-[150px] lg:min-h-[750px] sm:min-h-[700px] ">
        <ContributeCarousel contents1={artist} contents2={sponosr} />
      </div>
    </div>
  );
}
