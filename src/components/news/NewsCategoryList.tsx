import { useParams } from "react-router-dom";
import Tabs from "../shared/Tabs";
import { useState } from "react"
import Pagination from "../shared/Pagination";
import NewsBoard from "./NewsBoard";
import { NewsCards } from "./NewsCards";

const categories = [
   {
       title: "GPGP news",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
       title: "Plastic pollution",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
       title: "ENVIRonmental art",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
       title: "Events",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
    title: "Test",
    description: "The Tide of Plastic A Growing Threat"
   },
];

const NewsCategoryList = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(params.categoryId!);
  const fakeData = new Array(12).fill(1);

  // Get the category of items
  const tabCategories: string[] = [];
  categories.map(item => tabCategories.push(item.title.toUpperCase()));

  const handleCategoryChange = (category: string) => {
      setCurrentCategory(category);
      setCurrentPage(1)
  };

    // Pagination
    const itemsPerPage = 1; 
    const totalItems = categories.length;
    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen w-full mt-[15px]">
        <Tabs
             items={[...tabCategories]} 
             currentCategory={currentCategory}
             onCategoryChange={handleCategoryChange}
             redirectTo
             showAllLabel={false}
         /> 
      <div className="w-full flex flex-col p-5">
         <h2 className="font-semibold text-center text-[1rem] md:text-[1.5rem]  xxxl:text-[2rem] xxxxl:text-[2.2rem] uppercase py-5">
             {params.categoryId}
         </h2>
         <NewsBoard/>
         <div className="grid grid-cols-3 gap-5">
             {fakeData.map((item, index) => (
                 <NewsCards
                     key={index}
                     title="The Tide of Plastic: A Growing Threat"
                     href={`/news/${params.categoryId}`}
                     imageUrl="news.png"
                  />
              ))}
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
    </div>
    )
}

export default NewsCategoryList;