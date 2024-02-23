import { services } from "..";
import { TPieChartDistribution } from "../../@types/TCharts.type";

type TGetDeviceBrandCountByZone = {
  category: string;
  zone: string;
};

export const getDeviceBrandCountByZone = (data: TGetDeviceBrandCountByZone[], zone: string): TPieChartDistribution[] => {
  const filteredData = data.filter((item) => item.zone === zone);
  const brandCounts: { [key: string]: number } = {};

  // Count occurrences of each device brand in the filtered data
  filteredData.forEach((item) => {
    if (brandCounts[item.category]) {
      brandCounts[item.category]++;
    } else {
      brandCounts[item.category] = 1;
    }
  });

  // Convert brandCounts object to array of BrandData objects
  const result: TPieChartDistribution[] = [];
  for (const brand in brandCounts) {
    const color = services.utility.getRandomColor();
    result.push({ id: brand, label: brand, value: brandCounts[brand], color });
  }

  return result;
};
