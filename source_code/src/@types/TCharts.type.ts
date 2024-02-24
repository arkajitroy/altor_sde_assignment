export type TZoneFilter = "Zone_1" | "Zone_2" | "Zone_3" | "Zone_4";

export type TPieChartDistribution = {
  id: string;
  label: string;
  value: number;
  color: string;
};

export type TBarChartDistribution = {
  category: string;
  value: number;
};

export type TStackedBarChartDistribution = {
  id: number;
  zone_name: string;
  vehicle_cc: number;
  sdk_int: number;
};
