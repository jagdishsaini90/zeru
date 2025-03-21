"use client";
import React from "react";

export default function Tabs({ tabs = [], activeTab, setActiveTab }) {
  return (
    <div className="flex justify-between w-full md:w-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`whitespace-nowrap cursor-pointer px-3 md:px-6 py-1.5 rounded-full text-sm font-medium transition shrink-0 ${
            activeTab === tab
              ? "bg-gray-100 text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
