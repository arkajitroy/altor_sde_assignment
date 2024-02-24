import { services } from "..";
import { TStackedBarChartDistribution } from "../../@types/TCharts.type";
import { TProductDataGrid } from "../../@types/TGrid.types";
import { ZONES } from "../../constants/dataProperties";
import { getCountByZone } from "../utility/getCountByZone";

export const getVehicleAndSDKCountByZone = (productData: TProductDataGrid[]): TStackedBarChartDistribution[] => {
  const result: TStackedBarChartDistribution[] = [];
  // Creating a filteredData
  const vehicleCCFilterData = productData.map(({ vehicle_cc, zone }) => {
    return { category: vehicle_cc, zone };
  });
  const sdkFilterData = productData.map(({ sdk_int, zone }) => {
    return { category: String(sdk_int), zone };
  });

  // Getting the total count of both the categories
  const total_vehicle_cc_count: any[] = ZONES.map((data) => {
    return services.filteration.getCategoryCountByZone(vehicleCCFilterData, data);
  });
  const total_sdk_count: any[] = ZONES.map((data) => {
    return services.filteration.getCategoryCountByZone(sdkFilterData, data);
  });

  // Getting count for each arrays
  const vehicle_cc_collection: any = getCountByZone(total_vehicle_cc_count);
  const sdk_count_collection: any = getCountByZone(total_sdk_count);

  Object.keys(vehicle_cc_collection).forEach((zone, index) => {
    result.push({
      id: index,
      zone_name: zone,
      vehicle_cc: vehicle_cc_collection[zone],
      sdk_int: sdk_count_collection[zone],
    });
  });

  return result;
};
