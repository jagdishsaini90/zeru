import React, { useState, useEffect } from "react";
import Image from "next/image";
import Select from "./select";
import TextBox from "./textbox";
import Pagination from "./pagination";

export default function Table({
  title = "Assets",
  showSelect = true,
  data = [],
  placeholder = "Search asset",
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredAssets = data.filter((asset) =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [searchTerm, filteredAssets.length]);

  const paginatedAssets = filteredAssets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

  return (
    <div className="flex-1 mx-auto p-4 sm:p-6 bg-white rounded-[30px] border-[2px] border-[#F6F6F6] max-w-full">
      <h2 className="text-xl sm:text-2xl font-extrabold mb-4">{title}</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4 mb-6">
        <TextBox
          placeholder={placeholder}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {showSelect && <Select cls="sm:ml-4" />}
      </div>

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
            {paginatedAssets.map((asset, idx) => (
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

      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
