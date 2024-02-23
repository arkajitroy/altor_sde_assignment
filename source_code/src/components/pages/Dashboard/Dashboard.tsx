import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { API_ROUTE } from "../../../configs/api.config";
import FlexBetween from "../../../globalStyles/FlexBetween";
import Header from "../../layouts/Header/Header";
import { BarChart, PieChart, StackedBarChart } from "../..";
import { productsDataGridAttributes } from "../../../constants/productsDataGrid";
import { TProductDataGrid } from "../../../@types/TGrid.types";
import useWebStorage from "../../../hooks/useWebStorage";
import useFetch from "../../../hooks/useFetch";
import { TBrandDistributionPieState } from "../../../@types/TDashboard.types";
import { zoneLists } from "../../../constants/dataProperties";

import "./dashboard.scss";
import { services } from "../../../services";
import { TPieChartDistribution, TZoneFilter } from "../../../@types/TCharts.type";

const Dashboard: React.FC = (): JSX.Element => {
  const [productRecordsData, setProductRecordsData] = useState<TProductDataGrid[]>([]);
  // ================================== (DATA RENDER STATE) =====================================
  const [deviceBrandRenderData, setDeviceBrandRenderData] = useState<TPieChartDistribution[]>([]);
  // ================================== (DATA FILTER STATE) =====================================
  const [deviceBrandDST, setDeviceBrandDST] = useState<TBrandDistributionPieState>({
    filter: "Zone_1",
    dataSet: [],
  });

  const [storedData, setStoredData] = useWebStorage({
    key: "apiData",
    initialValue: [],
    storageType: "sessionStorage",
  });
  const { result, error } = useFetch({ url: API_ROUTE });

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();

  const getProductsRecordsData = useCallback(async () => {
    try {
      if (!error && result) {
        const { data } = result;
        setProductRecordsData(data);
        setStoredData(data);
      }
    } catch (error) {
      console.error("Something went wrong while fetching!");
    }
  }, [setStoredData]);

  // ======================================= (Handle Change for Filters) ====================================
  const handleFilterChange = useCallback(
    (event: SelectChangeEvent, pieFilter: "device_brand" | "vehicle_brand" | "vehicle_cc") => {
      const { value } = event.target;
      pieFilter === "device_brand" ? setDeviceBrandDST(Object.assign({}, deviceBrandDST, { filter: value })) : null;
    },
    [deviceBrandDST]
  );
  // ======================================= (Handle Change { Initial } Data to Charts) ======================
  const handleSetInitialDatastoPieChart = useCallback(
    (pieFilter: "device_brand" | "vehicle_brand" | "vehicle_cc") => {
      if (pieFilter === "device_brand") {
        const _parsedData = productRecordsData.map(({ device_brand, zone }) => {
          return { device_brand, zone };
        });
        setDeviceBrandDST(Object.assign([], deviceBrandDST, { dataSet: _parsedData }));
        handleSetFilteredDataToPieChart(pieFilter, _parsedData, "Zone_1");
      }
    },
    [productRecordsData, deviceBrandDST]
  );

  // ======================================= (Handle Change { Filtered } Data to Charts) ======================

  const handleSetFilteredDataToPieChart = useCallback(
    (
      pieFilter: "device_brand" | "vehicle_brand" | "vehicle_cc",
      dataSet: { device_brand: string; zone: string }[],
      zone: TZoneFilter
    ) => {
      if (pieFilter === "device_brand") {
        const _filteredData = services.filteration.getDeviceBrandCountByZone(dataSet, zone);
        setDeviceBrandRenderData(_filteredData);
      }
    },
    []
  );

  // Fetching Data from API & LocalStorage
  useEffect(() => {
    storedData && storedData.length > 0 ? setProductRecordsData(storedData) : getProductsRecordsData();
  }, [getProductsRecordsData, storedData, setProductRecordsData]);

  // Setting Initial Datas for the Pie Chart
  useEffect(() => {
    if (deviceBrandDST.dataSet.length === 0 && productRecordsData) handleSetInitialDatastoPieChart("device_brand");
  }, [deviceBrandDST.dataSet, productRecordsData, handleSetInitialDatastoPieChart]);

  // Setting Filtered Datas into the Pie Chart
  useEffect(() => {
    if (deviceBrandDST.filter) handleSetFilteredDataToPieChart("device_brand", deviceBrandDST.dataSet, deviceBrandDST.filter);
  }, [deviceBrandDST.filter, handleSetFilteredDataToPieChart]);

  console.log("deviceBrandRenderData", deviceBrandRenderData);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ================================================= ROW 1 ( 2 PIE AND 1 BAR GRAPH)=====================================================*/}

        {/* ====================== PIE-CHART ========================*/}
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="1rem"
          component={""}
        >
          <FlexBetween>
            <Typography variant="h4" sx={{ color: theme.palette.secondary[200] }}>
              Device Brand
            </Typography>
            <FormControl sx={{ width: "40%" }}>
              <InputLabel id="demo-simple-select-label">Zone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deviceBrandDST.filter}
                label="Zone"
                onChange={(event: SelectChangeEvent) => handleFilterChange(event, "device_brand")}
              >
                {zoneLists.map(({ label, value }, index) => {
                  return (
                    <MenuItem key={index} value={value}>
                      {label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </FlexBetween>
          <PieChart pieData={deviceBrandRenderData} />
        </Box>
        {/* ====================== BAR-CHART ========================*/}
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          borderRadius="1rem"
          p="1rem"
          component={""}
        >
          <FlexBetween>
            <Typography variant="h4" sx={{ color: theme.palette.secondary[200] }}>
              Device Brand
            </Typography>
            <FormControl sx={{ width: "40%" }}>
              <InputLabel id="demo-simple-select-label">Zone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deviceBrandDST.filter}
                label="zonalDistribution"
                onChange={handleFilterChange}
              >
                {zoneLists.map(({ label, value }, index) => {
                  return <MenuItem value={value}>{label}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </FlexBetween>
          <BarChart />
        </Box>
        {/* ====================== PIE-CHART ========================*/}
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="1rem"
          component={""}
        >
          <FlexBetween>
            <Typography variant="h4" sx={{ color: theme.palette.secondary[200] }}>
              Device Brand
            </Typography>
            <FormControl sx={{ width: "40%" }}>
              <InputLabel id="demo-simple-select-label">Zone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deviceBrandDST.filter}
                label="zonalDistribution"
                onChange={handleFilterChange}
              >
                {zoneLists.map(({ label, value }, index) => {
                  return <MenuItem value={value}>{label}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </FlexBetween>
          <PieChart pieData={deviceBrandRenderData} />
        </Box>

        {/* ================================================= ROW 2 =====================================================*/}
        {/* ====================== PIE-CHART ========================*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem 2rem"
          borderRadius="1rem"
          component={""}
        >
          <FlexBetween>
            <Typography variant="h4" sx={{ color: theme.palette.secondary[200] }}>
              Vehicle CC
            </Typography>
            <FormControl sx={{ width: "40%" }}>
              <InputLabel id="demo-simple-select-label">Zone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deviceBrandDST.filter}
                label="zonalDistribution"
                onChange={handleFilterChange}
              >
                {zoneLists.map(({ label, value }, index) => {
                  return <MenuItem value={value}>{label}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </FlexBetween>
          <PieChart pieData={deviceBrandRenderData} />
        </Box>

        {/* ====================== STACKED-BAR-CHART ========================*/}
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
          component={""}
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Sales By Category
          </Typography>
          <StackedBarChart />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          borderRadius="1rem"
          p="1rem"
          component={""}
        >
          <FlexBetween>
            <Typography variant="h4" sx={{ color: theme.palette.secondary[200] }}>
              Device Brand
            </Typography>
            <FormControl sx={{ width: "40%" }}>
              <InputLabel id="demo-simple-select-label">Zone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deviceBrandDST.filter}
                label="zonalDistribution"
                onChange={handleFilterChange}
              >
                {zoneLists.map(({ label, value }, index) => {
                  return <MenuItem value={value}>{label}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </FlexBetween>
          <BarChart />
        </Box>

        {/* ================================================= ROW 3 =====================================================*/}
        {/* ====================== DATA-GRID ========================*/}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid<TProductDataGrid>
            // loading={isLoading || !data}
            getRowId={(row) => row.username}
            rows={productRecordsData || []}
            columns={productsDataGridAttributes}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
