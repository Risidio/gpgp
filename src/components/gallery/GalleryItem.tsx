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
              <div className="font-[be-vietnam] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400] py-5 text-center text-gpgp-darkblue">
                 {title}
              </div>
           </Link>
  )
}
