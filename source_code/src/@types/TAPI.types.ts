export type TResponseData = {
  device_brand: string;
  model: string;
  processor: string;
  sdk_int: number;
  username: string;
  vehicle_brand: string;
  vehicle_cc: string;
  vehicle_type: string;
  zone: string;
};

export interface IApiResponse {
  data: TResponseData[];
  status: boolean;
  msg: string;
}
