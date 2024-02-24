import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import { Box, Button, IconButton, InputBase, useTheme } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";

import Header from "../../layouts/Header/Header";
import { TProductDataGrid } from "../../../@types/TGrid.types";
import { productsDataGridAttributes } from "../../../constants/productsDataGrid";
import { API_ROUTE } from "../../../configs/api.config";
import FlexBetween from "../../../globalStyles/FlexBetween";
import { Search } from "@mui/icons-material";
import useWebStorage from "../../../hooks/useWebStorage";
import useFetch from "../../../hooks/useFetch";

const CustomMenuToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const ProductRecords: React.FC = (): JSX.Element => {
  const [productRecordsData, setProductRecordsData] = useState<TProductDataGrid[]>([]);
  const [filtereRecordsData, setFilteredRecordsData] = useState<TProductDataGrid[]>([]);
  const [searchFilterQuery, setSearchFilterQuery] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });
  const [storedData, setStoredData] = useWebStorage({
    key: "apiData",
    initialValue: [],
    storageType: "sessionStorage",
  });
  const theme = useTheme();
  const uniqueId = uuidv4();
  const { result, error } = useFetch({ url: API_ROUTE });

  const handleSearchFilterChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchFilterQuery((prevFilter: SetStateAction<string>) => value);
  }, []);

  const handleFilterDataGridChange = useCallback(() => {
    const filteredData = productRecordsData.filter(({ username }) => {
      const _filterdUsername = username.toLowerCase().includes(searchFilterQuery.toLowerCase());
      return _filterdUsername;
    });
    setFilteredRecordsData(filteredData);
  }, [searchFilterQuery, productRecordsData]);

  const getProductsRecordsData = useCallback(async () => {
    try {
      if (!error && result) {
        const { data } = result;
        setProductRecordsData(data);
        setFilteredRecordsData(data);
        setStoredData(data);
      }
    } catch (error) {
      console.error("Something went wrong while fetching!");
    }
  }, [setStoredData]);

  // For filteration of data
  useEffect(() => {
    searchFilterQuery.length === 0 ? setFilteredRecordsData(storedData) : handleFilterDataGridChange();
  }, [searchFilterQuery.length, storedData, handleFilterDataGridChange]);

  // For fetching the initial data for the data grid
  useEffect(() => {
    storedData && storedData.length > 0 ? setProductRecordsData(storedData) : getProductsRecordsData();
  }, [getProductsRecordsData, storedData]);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Product Records" subtitle="All the products are listed accordingly" />

        <FlexBetween backgroundColor="yellow" flexDirection="column" alignItems="flex-end !important">
          <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
            <InputBase
              name="search"
              value={searchFilterQuery}
              onChange={handleSearchFilterChange}
              placeholder="Search by username ..."
            />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => null}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Records
          </Button>
        </Box> */}
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
          getRowId={(row) => row.username + uniqueId}
          rows={filtereRecordsData || []}
          disableColumnMenu
          columns={productsDataGridAttributes}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          slots={{
            toolbar: CustomMenuToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductRecords;
