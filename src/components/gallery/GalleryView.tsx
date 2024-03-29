import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

//import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useCallback, useEffect, useState } from "react";
import {
  IGalleryArtWorkImageData,
  IGalleryArtworksProps,
} from "../../types/gallery";
import { GalleryItem } from "./GalleryItem";
import NewPagination from "../shared/NewPagination";
import Wrapper from "../layout/Wrapper";

const GalleryView = ({ contents }: IGalleryArtworksProps) => {
  const [artworks, setArtworks] = useState<IGalleryArtWorkImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = contents?.length;
  const itemsPerPage = 20;

  // useEffect(() => {
  //   handleArtWorksDisplay();
  // }, [currentPage, contents]);
  

  // const handleArtWorksDisplay = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   const intialArtworks = contents?.slice(startIndex, endIndex);
  //   setArtworks(intialArtworks);
  // };

  const handleArtWorksDisplay = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const intialArtworks = contents?.slice(startIndex, endIndex);
    setArtworks(intialArtworks);
  }, [currentPage, contents]);
  
  useEffect(() => {
    handleArtWorksDisplay();
  }, [handleArtWorksDisplay]);
  

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    handleArtWorksDisplay();
  };

  return (
    <Wrapper>
      <div className="px-[20px] lg:px-[120px] pb-[30px]">
        <div className="flex flex-col gap-y-[30px] lg:gap-y-[80px]">
          {/* Pagination */}
          <NewPagination
            classes="flex justify-end mr-[9px]"
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
                  {artworks?.map((gallery, index) => (
                    <GalleryItem
                      key={index}
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
            classes="flex justify-end mr-[9px]"
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default GalleryView;
