import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6 md:float-end">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <ChevronLeft size={18} />
      </button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`w-8 h-8 cursor-pointer rounded-full text-sm font-medium flex items-center justify-center ${
            page === currentPage
              ? "bg-purple-500 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <span className="text-gray-400 px-1">...</span>
      <button className="w-8 h-8 rounded-full text-sm text-gray-700 hover:bg-gray-100">
        10
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
