import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Pagination from "../shared/Pagination";
import { GalleryItem } from "./GalleryItem";
import { useState, useEffect } from "react";
import {
  IGalleryArtWorkImageData,
  IGalleryArtworksProps,
} from "../../types/gallery";

const Slides = ({ contents }: IGalleryArtworksProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [artworks, setArtworks] = useState<IGalleryArtWorkImageData[]>([]);
  const totalItems = contents?.length;
  const itemsPerPage = 10;

  useEffect(function () {
    handleArtWorksDisplay();
  });

  const handleArtWorksDisplay = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const intialArtworks = contents?.slice(startIndex, endIndex);
    setArtworks(intialArtworks);
  };

  // Pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    handleArtWorksDisplay();
  };

  return (
    <div className="p-10 w-full">
      <h1 className="font-[be-vietnam-bold] w-full text-center sm:text-[1.2rem] md:text-[1.2rem] lg:text-[2rem] xl:text-[2.5rem] xxl:text-[45px] text-base uppercase py-10">
        the Tiles
      </h1>
      <div className="w-full py-5">
        <LightGallery
          speed={500}
          elementClassNames="custom-wrapper-gallery"
          plugins={[lgThumbnail, lgZoom]}
        >
          {artworks?.map((gallery) => (
            <GalleryItem
              key={gallery.image.alt}
              title={gallery.imagetitle}
              imageUrl={gallery.image.url}
            />
          ))}
        </LightGallery>
      </div>

      {totalItems > itemsPerPage && (
        <div className="flex justify-center max-w-screen-xl m-auto py-5">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Slides;
