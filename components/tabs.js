"use client";
import React from "react";

export default function Tabs({ tabs = [], activeTab, setActiveTab }) {
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-1.5 rounded-full cursor-pointer text-sm font-medium transition ${
            activeTab === tab
              ? "bg-gray-100 text-black font-medium"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
