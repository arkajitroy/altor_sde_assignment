import { TBarChartDistribution } from "../../@types/TCharts.type";

type TGetCategoryCountByZone = {
  category: string;
  zone: string;
};

export const getCategoryCountBarChart = (data: TGetCategoryCountByZone[], zone: string): TBarChartDistribution[] => {
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
  const result: TBarChartDistribution[] = [];
  for (const brand in brandCounts) {
    result.push({ category: brand, value: brandCounts[brand] });
  }

  return result;
};
