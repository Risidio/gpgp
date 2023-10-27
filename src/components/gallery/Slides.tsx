import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Pagination from "../shared/Pagination";
import { GalleryItem } from "./GalleryItem";
import { useState } from "react";

const items = [
      {
          "title": "Yellow tile 1",
          "img": "https://images.prismic.io/gpgp/d44043ad-32cd-4c08-9cf5-a732a66384e2_red-2.png?auto=compress,format&w=300",
          "category": "yellow"
      },
      {
          "title": "Yellow tile 2",
          "img": "https://images.prismic.io/gpgp/ecf5fd55-59da-4ff5-8cc8-58b4db98118c_red-13.png?auto=compress,format&w=300",
          "category": "yellow"
      },
      {
          "title" : "Yellow tile 3",
          "img": "https://images.prismic.io/gpgp/ebe78fb6-494b-47ef-bc11-9645b9fef978_yellow-3.png?auto=compress,format&w=300",
          "category": "yellow"
      },
      {
          "title": "Yellow tile 4",
          "img": "https://images.prismic.io/gpgp/678274a1-b629-4716-8d55-6e3536089f9e_red-15.png?auto=compress,format&w=300",
          "category": "yellow"
      },
      {
        "title": "Yellow tile 7",
        "img": "https://images.prismic.io/gpgp/bbc2c727-7188-4f26-ad61-31dd3feab420_red-2.png?auto=compress,format&w=300",
        "category": "yellow"
      },
     {
        "title" : "Yellow tile 333",
        "img": "https://images.prismic.io/gpgp/59b41e3e-aa19-46ea-99c8-e02b14b704e9_yellow-10.png?auto=compress,format&w=300",
        "category": "yellow"
     },
     {
        "title": "Yellow tile 8",
        "img": "https://images.prismic.io/gpgp/97b2ce8f-bfed-4bb3-a5cb-72148777d13d_yellow-8.png?auto=compress,format&w=300",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 9",
        "img": "https://images.prismic.io/gpgp/1a108347-68ba-4120-b070-a38148ccdcae_yellow-8.png?auto=compress,format&w=300",
        "category": "yellow"
    },
    {
        "title" : "Yellow tile 10",
        "img": "https://images.prismic.io/gpgp/16a5ef59-be49-4771-a38f-9d6305d1449f_yellow-5.png?auto=compress,format&w=300",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 11",
        "img": "https://images.prismic.io/gpgp/30c520a3-aaea-45c7-800f-b5aa12cd1824_red-45.png?auto=compress,format&w=300",
        "category": "yellow"
    },
    {
      "title": "Yellow tile 14",
      "img": "https://images.prismic.io/gpgp/3d7d72a6-84fb-40db-a289-34d53a763396_red-48.png?auto=compress,format&w=300",
      "category": "yellow"
    },
   {
      "title" : "Yellow tile 15",
      "img": "https://images.prismic.io/gpgp/43878cdb-35f7-476e-b92b-532685a7df63_yellow-5.png?auto=compress,format&w=300",
      "category": "yellow"
   },
   {
    "title": "Yellow tile 16",
    "img": "https://images.prismic.io/gpgp/2c90b4ce-f273-4545-9da1-1feaac878168_yellow-2.png?auto=compress,format&w=300",
    "category": "yellow"
   },
    {
        "title" : "Yellow tile 17",
        "img": "https://images.prismic.io/gpgp/4fdc06de-105c-475e-b59a-640b1b7f310e_yellow-9.png?auto=compress,format&w=300",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 18",
        "img": "https://images.prismic.io/gpgp/75cea883-1e00-4835-81a0-df1aceabdf0b_red-50.png?auto=compress,format&w=300",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 19",
        "img": "https://images.prismic.io/gpgp/f688cb41-f3e4-4146-a040-b6147bedcadc_yellow-10.png?auto=compress,format&w=300",
        "category": "yellow"
    },
  ];

const Slides = () => {
 const itemsPerPage = 12; 
 const [currentPage, setCurrentPage] = useState(1);

 // Pagination
  const totalItems = items.length;
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="p-10 w-full">
        <h1 className="font-semibold w-full text-center sm:text-[1.2rem] text-base uppercase py-10">the Tiles</h1>
        <div className="w-full py-5">
            <LightGallery
                    speed={500} 
                    elementClassNames="custom-wrapper-gallery"
                    plugins={[lgThumbnail, lgZoom]}
                 >
                 {items.slice(0, 20).map(gallery => 
                     <GalleryItem 
                         key={gallery.title}
                         title={gallery.title} 
                         imageUrl={gallery.img}
                      />
                )}
            </LightGallery>
        </div>

        {totalItems > itemsPerPage &&  (
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
    )
}

export default Slides;
