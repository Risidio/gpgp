import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface TabsProps {
   items: string[],
   currentCategory: string;
   onCategoryChange: (category: string) => void;
   redirectTo?: boolean,
   showAllLabel?: boolean
}

const Tabs = ({
     items,
     currentCategory,
     onCategoryChange,
     redirectTo,
     showAllLabel= true }: TabsProps) => {
  const generalStyle = "text-gpgp-blue block px-4 py-1 rounded-lg hover:bg-gray-100 hover:text-black m-[5px] sm:mr-[30px] border border-gpgp-blue sm:font-normal text-sm transition"
  const selectedStyle = twMerge(generalStyle, "font-bold bg-gpgp-blue text-white shadow-md");
  return (
        <div className="w-full flex  flex-row flex-wrap  items-start  ml-[20px] md:ml-[35px] sm:mt-[100px] mb-[15px] ">
         {showAllLabel && (
          <button
              key="all"
              onClick={() => onCategoryChange("All")}
              className={`${currentCategory === "All" ? selectedStyle : generalStyle}`}
             >
             All
          </button>
         )}
         {items.map((item) => (
            <button 
                   key={item as string} 
                   onClick={() => onCategoryChange(item as string)}
                   className={`${currentCategory.toLocaleLowerCase() === item.toLocaleLowerCase() ? selectedStyle : generalStyle}`}
            >
               {redirectTo ? (
                  <Link to={`/news/category/${item}`}>
                      {item}
                   </Link>
               ) : item }
            </button>
           ))}
      </div>  
  )
}

export default Tabs
