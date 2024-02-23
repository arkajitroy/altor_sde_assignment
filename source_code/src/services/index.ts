import { getCategoryCountBarChart } from "./filteration/getCategoryCountBarChart";
import { getCategoryCountByZone } from "./filteration/getCategoryCountByZone";
import { getRandomColor } from "./utility/getRandomColor";

export const services = {
  utility: {
    getRandomColor: getRandomColor,
  },
  filteration: {
    getCategoryCountByZone: getCategoryCountByZone,
    getCategoryCountBarChart: getCategoryCountBarChart,
  },
};
