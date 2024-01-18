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
  const [document2] = useSinglePrismicDocument(prismicDocumentTypes.homePage);
  
  return (
    <>
      <div className="">
        <GpgpSection contents={document?.data["body"][2].primary} />

        <Attention contents={document?.data["body"][3].primary} />

        <Exhibition contents={document?.data["body"][4].primary} />

        <ArtistSection contents={document2?.data?.body[4]?.primary}/>

        <JoinUs contents={document?.data["body"][6].primary} />

        <About contents={document?.data["body"][1].primary} />
      </div>
    </>
  );
};

export default Project;
