import { useSinglePrismicDocument } from "@prismicio/react";
import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryView from "../components/gallery/GalleryView";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";
import BottomContributeWaveSection from "../components/base/BottomContributeWaveSection";

const Gallery = () => {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.gallery);
  return (
    <>
      <div className="xxxxl:w-[1440px] xxxxl:mx-auto">
        <GalleryHeader />
        <GalleryView contents={document?.data["body"][2].items} />
        <BottomContributeWaveSection/>
      </div>
    </>
  );
};

export default Gallery;
