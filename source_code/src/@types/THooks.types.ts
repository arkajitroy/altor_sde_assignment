import { IApiResponse } from "./TAPI.types";

export type TStorageKey = "localStorage" | "sessionStorage";

export type TUseWebStorageProps = {
  key: string;
  initialValue: any;
  storageType: TStorageKey;
};

export type TUseFetchProps = {
  url: string;
};

export type TUseFetchResponse = {
  result: IApiResponse | null;
  isLoading: boolean;
  error: string;
};
