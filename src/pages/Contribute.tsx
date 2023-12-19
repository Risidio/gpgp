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
    <div className="mb-[-10px] xxxxl:w-[1440px] xxxxl:mx-auto">
      
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

      <div className="">
        <ContributeCarousel contents1={artist} contents2={sponosr} />
      </div>
    </div>
  );
}
