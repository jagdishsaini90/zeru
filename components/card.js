import { formatNumber } from "../utils/helper";

const Card = ({ stat, stats }) => {
  return (
    <div className={`p-6 rounded-[40px] ${stat.bgColor} w-full max-w-sm`}>
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
        {stat.icon}
      </div>
      <div className={`text-4xl mt-10 font-bold ${stat.textColor}`}>
        {formatNumber(stats[stat.key], stat?.formatType)}
      </div>
      <div className={`text-sm font-medium mt-2 ${stat.textColor}`}>
        {stat.title}
      </div>
    </div>
  );
};

export default Card;
