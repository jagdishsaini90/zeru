import { Globe, Wallet, UploadCloud, LinkIcon } from "lucide-react";

const statsData = [
  {
    title: "Total Wallets Scored",
    value: "12,750",
    icon: <Wallet className="text-[#a277f3]" size={28} />,
    bgColor: "bg-[#f3edff]",
    textColor: "text-[#a277f3]",
  },
  {
    title: "Total Transactions Tracked",
    value: "40.12K",
    icon: <UploadCloud className="text-[#ff70db]" size={28} />,
    bgColor: "bg-[#ffeefd]",
    textColor: "text-[#ff70db]",
  },
  {
    title: "Total Chains Scored",
    value: "110",
    icon: <LinkIcon className="text-[#00baff]" size={28} />,
    bgColor: "bg-[#f4f8ff]",
    textColor: "text-[#00baff]",
  },
  {
    title: "zkTLS Real world scores generated",
    value: "8,654",
    icon: <Globe className="text-[#33d1b5]" size={28} />,
    bgColor: "bg-[#e9fdf7]",
    textColor: "text-[#33d1b5]",
  },
];

const StatsCardRow = () => {
  return (
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`p-6 rounded-[40px] ${stat.bgColor} w-full max-w-sm`}
        >
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
            {stat.icon}
          </div>
          <div className={`text-4xl mt-10 font-bold ${stat.textColor}`}>
            {stat.value}
          </div>
          <div className={`text-sm font-medium mt-2 ${stat.textColor}`}>
            {stat.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCardRow;
