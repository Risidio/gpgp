import { useSinglePrismicDocument } from "@prismicio/react";
import ContributeCarousel from "../components/contribute/ContributeCarousel";
import NewContributeHero from "../components/contribute/NewContributeHero";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";

export default function Contribute() {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.contribute);
  console.log(document);

  const artist = document?.data["body"][1]?.primary;
  const sponosr = document?.data["body"][2]?.primary;


  return (
    <div className="mb-[-10px]">
      
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
