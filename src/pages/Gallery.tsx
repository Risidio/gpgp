import { useSinglePrismicDocument } from "@prismicio/react";
import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryView from "../components/gallery/GalleryView";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";

const Gallery = () => {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.gallery);
  console.log("Gallery Document:", document?.data["body"][2]);

  return (
    <>
      <div className="max-w-[2560px] mx-auto">
        <GalleryHeader />
        <GalleryView contents={document?.data["body"][2].items} />
        <div className="w-[100%] xxl:w-[100%] xxxxl:w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[100px] sm:pt-[190px] md:pt-[200px] md:pb-[100px] md:mt-[70px] xl:pt-[240px] xxl:pt-[300px] xxxl:pt-[440px] xxxxl:pt-[560px] pb-[30px] xxxl:pb-[200px] xxxxl:pb-[200px] font-[be-vietnam-bold]">
          <h1 className="font-[be-vietnam] text-[16px] xxl:text-[36px] md:font-[700] uppercase text-white text-center">
            contribute to the global effort <br />
            Create a better world
          </h1>
        </div>
      </div>
    </>
  );
};

export default Gallery;
