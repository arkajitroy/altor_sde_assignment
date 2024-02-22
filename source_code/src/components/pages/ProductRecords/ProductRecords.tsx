import { Box, Button, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { TProductDataGrid } from "../../../@types/TGrid.types";
import { productsDataGridAttributes } from "../../../constants/productsDataGrid";
import { fetchData } from "../../../configs/api.config";
import FlexBetween from "../../../globalStyles/FlexBetween";
import { DownloadOutlined } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

const CustomExportToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const ProductRecords: React.FC = (): JSX.Element => {
  const [productRecordsData, setProductRecordsData] = useState<TProductDataGrid[]>([]);
  const theme = useTheme();
  const uniqueId = uuidv4();

  const getProductsRecordsData = useCallback(async () => {
    const getData = await fetchData();
    if (getData) setProductRecordsData(getData);
  }, []);

  useEffect(() => {
    getProductsRecordsData();
  }, [getProductsRecordsData]);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Product Records" subtitle="All the products are listed accordingly" />

        <Box>
          {/* <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Records
          </Button> */}
        </Box>
      </FlexBetween>

      <Box></Box>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
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
            backgroundColor: theme.palette.primary.light,
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
          getRowId={(row) => row.username + uniqueId}
          rows={productRecordsData || []}
          columns={productsDataGridAttributes}
          slots={{
            toolbar: CustomExportToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductRecords;
