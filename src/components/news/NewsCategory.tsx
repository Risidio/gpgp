import { HiChevronRight } from "react-icons/hi"

interface NewsCategoryProps {
   category: {
      title: string,
      description: string,      
   }
}

export const NewsCategory = ({ category} : NewsCategoryProps) => {
  return (
    <div className="w-full flex flex-col sm:p-9 md:p-10 p-5">
        <div className="flex justify-between items-center pb-5">
           <h2 className="font-semibold text-lg uppercase">
                {category.title}
          </h2>
          <div className="group flex justify-between items-center uppercase hover:text-black/60 hover:cursor-pointer">
             <span className="font-semibold text-lg uppercas">
               See more
             </span>
             <HiChevronRight className="w-7 h-7"/>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
             <div>
                <img
                   src={require("../../assets/images/news.png")}
                   alt={category.title}
                   className="hover:opacity-90 transition duration-300 ease-in-out rounded-md"
                />
                <p className="py-3 sm:text-base text-sm">
                   {category.description}
                </p>
             </div>
            
             <div>
                <img
                   src={require("../../assets/images/news.png")}
                   alt={category.title}
                   className="hover:opacity-90 transition duration-300 ease-in-out rounded-md"
                />
                <p className="py-3 sm:text-base text-sm">
                   {category.description}
                </p>
             </div>

              <div>
                <img
                   src={require("../../assets/images/news.png")}
                   alt={category.title}
                   className="hover:opacity-90 transition duration-300 ease-in-out rounded-md"
                />
                <p className="py-3 sm:text-base text-sm">
                   {category.description}
                </p>
             </div>
        </div>
     </div>
  )
}
