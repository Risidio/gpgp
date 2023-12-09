import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { INewsStoriesData } from "../../types/news";
import { NewsCards } from "./NewsCards";

interface NewsCategoryProps {
  category: {
    title: string;
    description: string;
  };
  primary?: {
    newsheading?: Array<{ text: string }>;
  };
  prismicItems: Array<INewsStoriesData>;
}
const NewsCategory = ({
  category,
  primary = {},
  prismicItems,
}: NewsCategoryProps) => {
  // Access newsheading correctly based on its structure
  const primaryHeading =
    primary.newsheading &&
    Array.isArray(primary.newsheading) &&
    primary.newsheading.length
      ? primary.newsheading[0].text
      : "";

  // Check if contents is defined before calling filter
  const matchingItems = prismicItems;

  return (
    <div className="w-full flex flex-col sm:p-9 md:p-10 p-5">
      <div className="flex justify-between items-center pb-5">
        <h2 className="text-[1rem] md:text-[2rem] tracking-[3px] font-semibold uppercase">
          {primaryHeading}
        </h2>
        <div className="group flex justify-between items-center uppercase hover:text-black/60 hover:cursor-pointer">
          <Link to={`/news/${category.description}`}>
            <span className="text-[1rem] font-semibold uppercase">
              See more
            </span>
          </Link>
          <HiChevronRight className="w-7 h-7" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {matchingItems &&
          matchingItems.map((newsData, index) => (
            <NewsCards
              key={index}
              title={newsData.newscaption[0]?.text || ""}
              href={`/news/${category.description}`}
              imageUrl={newsData.newsimage.url}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsCategory;
