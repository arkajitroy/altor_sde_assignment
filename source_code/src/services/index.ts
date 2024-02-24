import { getCategoryCountBarChart } from "./filteration/getCategoryCountBarChart";
import { getCategoryCountByZone } from "./filteration/getCategoryCountByZone";
import { getVehicleAndSDKCountByZone } from "./filteration/getVehicleAndSDKCountByZone";
import { getRandomColor } from "./utility/getRandomColor";

export const services = {
  utility: {
    getRandomColor: getRandomColor,
  },
  filteration: {
    getCategoryCountByZone: getCategoryCountByZone,
    getCategoryCountBarChart: getCategoryCountBarChart,
    getVehicleAndSDKCountByZone: getVehicleAndSDKCountByZone,
  },
};
