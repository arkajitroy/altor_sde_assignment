import { useEffect, useState } from "react";
import { TUseFetchProps, TUseFetchResponse } from "../@types/THooks.types";
import { IApiResponse } from "../@types/TAPI.types";
import axios, { AxiosResponse } from "axios";

const useFetch = ({ url }: TUseFetchProps): TUseFetchResponse => {
  const [result, setResult] = useState<IApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<IApiResponse> = await axios.get(url);
        const { data } = response;
        setResult(data);
        setError("");
      } catch (error: any) {
        setError(error.message || "An error occurred");
      }
      setIsLoading(false);
    };
    fetchDataFromApi();

    return () => setResult(null);
  }, [url]);

  return { result, isLoading, error };
};

export default useFetch;
