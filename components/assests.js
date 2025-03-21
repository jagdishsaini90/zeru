import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import Select from "./select";
import TextBox from "./textbox";
import Pagination from "./pagination";

export default function AssetTable({
  title = "Assets",
  showSelect = true,
  assetData = [],
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAssets = assetData.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 mx-auto p-4 sm:p-6 bg-white rounded-[30px] border-[2px] border-[#F6F6F6] max-w-full">
      <h2 className="text-xl sm:text-2xl font-extrabold mb-4">{title}</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4 mb-6">
        <TextBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {showSelect && <Select cls="sm:ml-4" />}
      </div>

      {/* Table Wrapper with scroll */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full text-left">
          <thead className="text-[#7D7D7D] text-sm whitespace-nowrap">
            <tr>
              <th className="py-2 px-4 font-medium">Assets</th>
              <th className="py-2 px-4 font-medium">Borrow Volume</th>
              <th className="py-2 px-4 font-medium">Collateral Volume</th>
              <th className="py-2 px-4 font-medium">Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, idx) => (
              <tr key={idx} className="whitespace-nowrap">
                <td className="py-4 px-4 flex items-center gap-3">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt={asset.name}
                    className="rounded-3xl"
                  />
                  <span className="font-medium text-gray-900">
                    {asset.name}
                  </span>
                </td>
                <td className="py-4 px-4 font-medium text-gray-800">
                  {asset.borrow}
                </td>
                <td className="py-4 px-4 font-medium text-gray-800">
                  {asset.collateral}
                </td>
                <td className="py-4 px-4 font-medium text-gray-800">
                  {asset.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}
