"use client";

import React, { useMemo, useState } from "react";
import StatsCardRow from "../../components/cardRow";
import BarChart from "../../components/chart";
import AssetTable from "../../components/assests";
import {
  ASSETS_DATA,
  CHAINS_DATA,
  LIQUIDATIONS,
  LOAN_SIZES,
  OVERVIEW,
} from "../../utils/contants";
import Select from "../../components/select";
import Tabs from "../../components/tabs";

const tabs = ["Overview", "Liquidations", "Loan Sizes"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Loan Sizes");

  return (
    <div className="px-5 md:px-16 py-6 space-y-6">
      <h1 className="text-3xl font-bold">Global Stats</h1>
      <div className="h-[2px] w-full bg-[#F6F6F6] mt-8 mb-7"></div>
      <StatsCardRow />

      <div className="p-6 border-[2px] border-[#F6F6F6] rounded-4xl">
        <div className="flex flex-wrap justify-between mb-4 gap-2">
          <Select />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </div>
        {activeTab === "Loan Sizes" && <BarChart data={LOAN_SIZES} />}
        {activeTab === "Overview" && (
          <BarChart barColor="#9F62FF" data={OVERVIEW} />
        )}
        {activeTab === "Liquidations" && (
          <BarChart barColor="#E960EC" data={LIQUIDATIONS} />
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <AssetTable assetData={ASSETS_DATA} />
        <AssetTable title="Chains" showSelect={false} assetData={CHAINS_DATA} />
      </div>
    </div>
  );
}
