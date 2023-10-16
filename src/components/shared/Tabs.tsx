import { twMerge } from "tailwind-merge";

interface TabsProps {
   items: string[],
   currentCategory: string;
   onCategoryChange: (category: string) => void;
}

const Tabs = ({
     items,
     currentCategory,
     onCategoryChange}: TabsProps) => {
  const generalStyle = "text-gpgp-blue inline-block px-4 py-3 rounded-lg hover:bg-gray-100 hover:text-black border border-gpgp-blue font-normal"
  const selectedStyle = twMerge(generalStyle, "font-bold bg-white/80 shadow-md text-black");
  return (
        <div className="w-full flex justify-around flex-wrap items-center text-[0.9rem] sm:space-y-0 space-y-2 font-medium text-centertext-white py-10 px-5">
          <button
                onClick={() => onCategoryChange("All")}
                className={`${currentCategory === "All" ? selectedStyle : generalStyle}`}
          >
           All
          </button>
      
         {items.map((item) => (
            <button 
                   key={item as string} 
                   onClick={() => onCategoryChange(item as string)}
                   className={`${currentCategory === item ? selectedStyle : generalStyle}`}
            >
               {item as string}
            </button>
           ))}
      </div>  
  )
}

export default Tabs
