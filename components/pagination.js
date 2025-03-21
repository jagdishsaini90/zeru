import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-6 md:float-end">
      <button
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={18} />
      </button>

      {pageNumbers.map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`w-8 h-8 cursor-pointer rounded-full text-sm font-medium flex items-center justify-center transition ${
              page === currentPage
                ? "bg-purple-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
