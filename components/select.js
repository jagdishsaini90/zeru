"use client";
import { useState } from "react";

const chains = ["All Chains", "Ethereum", "Polygon", "Binance Smart Chain"];

export default function Select({ cls }) {
  const [selected, setSelected] = useState(chains[0]);

  return (
    <div className={`relative ${cls}`}>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="appearance-none w-full h-11 bg-[#F9F9F9] text-black px-4 py-2 pr-8 rounded-full text-sm hover:bg-gray-200 transition truncate"
      >
        {chains.map((chain) => (
          <option key={chain} value={chain} className="truncate">
            {chain}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
