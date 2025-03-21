export const formatNumber = (num, format = "comma", decimalPlaces = 2) => {
  if (isNaN(num)) return "-";

  if (format === "comma") {
    return num.toLocaleString("en-US");
  }

  if (format === "compact") {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: decimalPlaces,
    }).format(num);
  }

  return num;
};
