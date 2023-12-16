import About from "../components/project/Abouts";
import ArtistSection from "../components/project/ArtistSection";
import Attention from "../components/project/Attention";
import GpgpSection from "../components/project/GpgpSection";
import JoinUs from "../components/project/JoinUs";
import { useSinglePrismicDocument } from "@prismicio/react";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";
import Exhibition from "../components/project/Exhibition";

const Project = () => {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.project);
  return (
    <>
      <div className="xxl:w-[1440px] xxl:mx-auto">
        <GpgpSection contents={document?.data["body"][2].primary} />

        <Attention contents={document?.data["body"][3].primary} />

        <Exhibition contents={document?.data["body"][4].primary} />

        <ArtistSection />

        <JoinUs contents={document?.data["body"][6].primary} />

        <About contents={document?.data["body"][1].primary} />
      </div>
    </>
  );
};

export default Project;
