import { getDeviceBrandCountByZone } from "./filteration/getDeviceBrandCountByZone";
import { getRandomColor } from "./utility/getRandomColor";

export const services = {
  utility: {
    getRandomColor: getRandomColor,
  },
  filteration: {
    getDeviceBrandCountByZone: getDeviceBrandCountByZone,
  },
};
