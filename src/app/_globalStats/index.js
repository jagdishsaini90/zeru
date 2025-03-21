import React, { useState } from "react";
import BarChart from "../../../components/chart";
import AssetTable from "../../../components/assests";
import Select from "../../../components/select";
import Tabs from "../../../components/tabs";
import { useSelector } from "react-redux";
import { Globe, Wallet, UploadCloud, LinkIcon } from "lucide-react";
import Card from "../../../components/card";
import { STAT_TABS, STATS_CARDS } from "../../../utils/contants";

const GlobalStats = () => {
  const [activeTab, setActiveTab] = useState("Loan Sizes");
  const { assets, chains, stats, statsCharts } = useSelector((state) => state);

  const getIcon = (key) => {
    switch (key) {
      case "wallets":
        return <Wallet className="text-[#a277f3]" size={28} />;
      case "transactions":
        return <UploadCloud className="text-[#ff70db]" size={28} />;
      case "chains":
        return <LinkIcon className="text-[#00baff]" size={28} />;
      case "zkScores":
        return <Globe className="text-[#33d1b5]" size={28} />;
      default:
        return null;
    }
  };

  return (
    <div className="px-5 md:px-16 py-6 space-y-6">
      <h1 className="text-3xl font-bold">Global Stats</h1>
      <div className="h-[2px] w-full bg-[#F6F6F6] mt-8 mb-7"></div>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {STATS_CARDS.map((stat, index) => {
          return (
            <Card
              key={index}
              stat={{
                ...stat,
                icon: getIcon(stat.key),
              }}
              stats={stats}
            />
          );
        })}
      </div>

      <div className="p-3 md:p-6 border-[2px] border-[#F6F6F6] rounded-4xl">
        <div className="flex flex-wrap justify-between mb-4 gap-2">
          <Select />
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={STAT_TABS}
          />
        </div>
        {activeTab === "Loan Sizes" && <BarChart data={statsCharts.loan} />}
        {activeTab === "Overview" && (
          <BarChart barColor="#9F62FF" data={statsCharts.overview} />
        )}
        {activeTab === "Liquidations" && (
          <BarChart barColor="#E960EC" data={statsCharts.liquidations} />
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <AssetTable assetData={assets?.assetsList} />
        <AssetTable
          title="Chains"
          showSelect={false}
          assetData={chains?.chainList}
          placeholder="Search chains"
        />
      </div>
    </div>
  );
};

export default GlobalStats;
