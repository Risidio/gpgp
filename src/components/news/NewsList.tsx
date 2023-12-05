import Pagination from "../shared/Pagination";
import Tabs from "../shared/Tabs";
import LatestNews from "./LatestNews";
import NewsCategory from "./NewsCategory";
import { useState } from "react";
import { useSinglePrismicDocument } from "@prismicio/react";
import prismicDocumentTypes from "../../utility/prismicDocumentTypes";

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("All");

  const [document] = useSinglePrismicDocument(prismicDocumentTypes.news);
  // console.log(document);

  const categories = [
    {
      title: "GPGP news",
      description: "The Tide of Plastic A Growing Threat",
      primary :document?.data["body"][1].primary,
      prismicItems : document?.data["body"][1].items,
    },
    {
      title: "Plastic pollution",
      description: "The Tide of Plastic A Growing Threat",
      primary :document?.data["body"][2].primary,
      prismicItems : document?.data["body"][2].items,
    },
    {
      title: "ENVIRonmental art",
      description: "The Tide of Plastic A Growing Threat",
      primary :document?.data["body"][3].primary,
      prismicItems : document?.data["body"][3].items,
    },
    {
      title: "Events",
      description: "The Tide of Plastic A Growing Threat",
      primary :document?.data["body"][4].primary,
      prismicItems : document?.data["body"][4].items,
    },
    {
      title: "Test",
      description: "The Tide of Plastic A Growing Threat",
      primary :document?.data["body"][5].primary,
      prismicItems : document?.data["body"][5].items,
    },
  ];


  const itemsPerPage = 1;
  let items = categories ?? [];

  // Get the category of items
  const tabCategories: string[] = [];
  categories.map((item) => tabCategories.push(item.title.toUpperCase()));

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  // Pagination
  const totalItems = items.length;
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen w-full">
      <LatestNews contents={document?.data["body"][0].primary} />
      <Tabs
        items={[...tabCategories]}
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
      />
      {items.map((category, index) => (
        <NewsCategory
          key={index}
          category={category}
          primary={categories[index].primary}
          prismicItems={categories[index].prismicItems}
        />
      ))}

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

export default NewsList;
