import { useSinglePrismicDocument } from "@prismicio/react";
import ImgCarousel from "./ImgCarousel";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";


const NftCarousel = () => {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.gallery);
  const images = document?.data["body"][2].items;
  return (
    <div className="w-[100%]">
      <ImgCarousel contents={images} />
    </div>
  );
};

export default NftCarousel;
