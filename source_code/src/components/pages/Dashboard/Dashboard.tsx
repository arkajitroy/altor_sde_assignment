import React, { useCallback, useEffect } from "react";
import { fetchData } from "../../../configs/api.config";

import "./dashboard.scss";

const Dashboard: React.FC = (): JSX.Element => {
  const getFetchedData = useCallback(async () => {
    const getData = await fetchData();
    console.log("getData", getData);
  }, []);

  useEffect(() => {
    getFetchedData();
  }, []);

  return <div>index</div>;
};

export default Dashboard;
