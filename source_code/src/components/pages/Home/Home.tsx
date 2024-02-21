import React, { useCallback, useEffect } from "react";
import "./home.scss";
import { fetchData } from "../../../configs/api.config";

const HomePage: React.FC = (): JSX.Element => {
  const getFetchedData = useCallback(async () => {
    const getData = await fetchData();
    console.log("getData", getData);
  }, []);

  useEffect(() => {
    getFetchedData();
  }, []);

  return <div>index</div>;
};

export default HomePage;
