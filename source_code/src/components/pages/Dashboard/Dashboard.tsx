import React, { useCallback, useEffect, useState } from "react";
import { fetchData } from "../../../configs/api.config";

import "./dashboard.scss";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "../../../globalStyles/FlexBetween";
import Header from "../../layouts/Header/Header";
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import { BarChart, PieChart, StackedBarChart } from "../..";
import { productsDataGridAttributes } from "../../../constants/productsDataGrid";
import { TProductDataGrid } from "../../../@types/TGrid.types";

const CustomExportToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const Dashboard: React.FC = (): JSX.Element => {
  const [productRecordsData, setProductRecordsData] = useState<TProductDataGrid[]>([]);
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();
  const columns: GridColDef[] = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (params.value as any[]).length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  const getProductsRecordsData = useCallback(async () => {
    const getData = await fetchData();
    if (getData) setProductRecordsData(getData);
  }, []);

  useEffect(() => {
    getProductsRecordsData();
  }, []);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          {/* <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button> */}
        </Box>
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
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="1rem"
          component={""}
        >
          <PieChart />
        </Box>
        {/* ====================== BAR-CHART ========================*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          borderRadius="1rem"
          component={""}
        >
          <BarChart />
        </Box>
        {/* ====================== PIE-CHART ========================*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="1rem"
          component={""}
        >
          <PieChart />
        </Box>

        {/* ================================================= ROW 2 =====================================================*/}
        {/* ====================== PIE-CHART ========================*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="1rem"
          component={""}
        >
          <PieChart />
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
        {/* ====================== DATA-GRID ========================*/}
        <Box
          gridColumn="span 6"
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
