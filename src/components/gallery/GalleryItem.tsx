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
          <Link to={imageUrl} className=''>
            <img
                  src={imageUrl}
                  className="bg-[#f1f1f1] w-full rounded-md shadow-sm"
                  alt={title}
              />
              <div className="flex flex-col py-[10px]">
                 <small className='text-center lg:text-left text-[13px] lg:text-[16px] text-[#050B1D] leading-[23.38px] font-[be-vietnam-bold]'>{title}</small>
                 <small className='hidden lg:block text-[16px] text-[#5F5F5F] leading-[23.38px] font-[be-vietnam-bold]'>Artwork Info here</small>
              </div>
           </Link>
  )
}
