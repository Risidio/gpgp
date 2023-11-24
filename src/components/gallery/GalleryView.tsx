import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

//import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useEffect, useState } from "react";
import {
  IGalleryArtWorkImageData,
  IGalleryArtworksProps,
} from "../../types/gallery";
import { GalleryItem } from "./GalleryItem";
import NewPagination from "../shared/NewPagination";

const GalleryView = ({ contents }: IGalleryArtworksProps) => {
  const [artworks, setArtworks] = useState<IGalleryArtWorkImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = contents?.length;
  const itemsPerPage = 12;

  useEffect(function () {
    handleArtWorksDisplay();
  });

  const handleArtWorksDisplay = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const intialArtworks = contents?.slice(startIndex, endIndex);
    setArtworks(intialArtworks);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    handleArtWorksDisplay();
  };

  return (
    <>
      <div className="px-[20px] lg:px-[120px] pb-[30px]">
        <div className="flex flex-col gap-y-[30px] lg:gap-y-[80px]">
          {/* Pagination */}
          <NewPagination
            classes="flex justify-center lg:justify-end"
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />

          {/* Artworks */}
          <div className="">
            <div className="w-full">
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
            </div>
          </div>

          {/* Pagination */}
          <NewPagination
            classes="flex justify-center lg:justify-end"
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default GalleryView;
