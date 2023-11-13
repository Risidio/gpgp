import React from 'react'
import { Link } from 'react-router-dom';

interface GalleryItemProps {
    title: string;
    imageUrl: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
    title,
    imageUrl
}) => {
  return (
          <Link to={imageUrl}>
            <img
                  src={imageUrl}
                  className="w-full rounded-md shadow-sm"
                  alt={title}
              />
              <div className="font-[be-vietnam] text-base md:text-[20px] lg:text-[22px] lg:text-[24px] xl:text-[28px] xxl:text-[30px] py-5 text-center text-gpgp-darkblue">
                 {title}
              </div>
           </Link>
  )
}
