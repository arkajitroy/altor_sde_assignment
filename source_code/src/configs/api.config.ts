import axios, { AxiosResponse } from "axios";
import { IApiResponse, TResponseData } from "../@types/TAPI.types";

export const API_ROUTE = "http://20.121.141.248:5000/assignment/feb/sde_fe";

// Function to make the API call
export const fetchData = async (): Promise<TResponseData[] | undefined> => {
  try {
    const response: AxiosResponse<IApiResponse> = await axios.get(API_ROUTE);
    const {
      data: { data },
      status,
    } = response;
    return status ? data : undefined;
  } catch (error) {
    throw error;
  }
};
