import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from 'tailwind-merge';

interface NewsCardProps {
  title: string;
  href: string;
  imageUrl: string;
  classes?: string;
}

export const NewsCards = ({
  title,
  href,
  imageUrl,
  classes
}: NewsCardProps) => {


  return (
    <div className="relative">
      <Link to={href}>
        <img
          src={imageUrl}
          alt={title}
          className="hover:opacity-90  transition  object-cover h-[120px]  xsm:h-auto xsm:max-w-[100%] duration-300 ease-in-out rounded-md xsm:rounded-[22px]"
        />
      </Link>
      <p className={twMerge("py-3 sm:text-base absolute bottom-[2px] left-[3px] text-[12px] text-white z-50  xxsm:text-[0.6rem] xxsm:bottom-[2px] xxsm:left-[4px] lg:bottom-[6px] lg:left-[12px] md:text-[1.2rem] xlg:text-[1.5rem] font-semibold xxsm:tracking-[2px]", classes)}>
        {title}
      </p>
    </div>
  );
};