import React from "react";
import { Search } from "lucide-react";

const TextBox = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <div className="flex items-center relative w-full h-11">
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border-[2px] border-[#F6F6F6] rounded-xl placeholder-gray-400 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default TextBox;
