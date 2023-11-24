import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  classes: string;
  onPageChange: (newPage: number) => void;
}

const NewPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  classes,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <>
      <div className={`gap-x-[8px] ${classes}`}>
        <span
          onClick={()=>handlePageChange(currentPage - 1)}
          className={`flex justify-center items-center hover:bg-gpgp-blue hover:text-white border-[1px] border-[#DFE3E8] text-[#0A2471] font-[be-vietnam-bold] rounded-[4px] text-[14px] leading-[20px] w-[32px] h-[32px] ${
            currentPage > 1
              ? "bg-gpgp-blue text-white inline"
              : "bg-[#919EAB] text-white hover:bg-[#919EAB] hover:text-white"
          }`}
        >
          <FaChevronLeft />
        </span>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <span
              onClick={() => handlePageChange(page)}
              key={page}
              className={`flex justify-center items-center hover:bg-gpgp-blue hover:text-white border-[1px] border-[#DFE3E8] text-[#0A2471] font-[be-vietnam-bold] rounded-[4px] text-[14px] leading-[20px] w-[32px] h-[32px] ${
                currentPage === page ? "bg-gpgp-blue text-white" : ""
              }`}
            >
              {page}
            </span>
          )
        )}
        <span
          onClick={()=>handlePageChange(currentPage + 1)}
          className={`flex justify-center items-center hover:bg-gpgp-blue hover:text-white border-[1px] border-[#DFE3E8] text-[#0A2471] font-[be-vietnam-bold] rounded-[4px] text-[14px] leading-[20px] w-[32px] h-[32px] ${
            currentPage < totalPages
              ? "bg-gpgp-blue text-white inline"
              : "bg-[#919EAB] text-white hover:bg-[#919EAB] hover:text-white"
          }`}
        >
          <FaChevronRight />
        </span>
      </div>
    </>
  );
};

export default NewPagination;
