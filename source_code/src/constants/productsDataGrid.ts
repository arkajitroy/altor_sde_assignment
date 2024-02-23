import { GridColDef } from "@mui/x-data-grid";
import { TProductDataGrid } from "../@types/TGrid.types";

export const productsDataGridAttributesOld: GridColDef<TProductDataGrid>[] = [
  {
    field: "device_brand",
    headerName: "Device Name",
    flex: 1,
  },
  {
    field: "model",
    headerName: "Model Name",
    flex: 1,
  },
  {
    field: "processor",
    headerName: "Processor",
    flex: 1,
  },
  {
    field: "sdk_int",
    headerName: "SDK",
    flex: 0.5,
  },
  {
    field: "username",
    headerName: "Username",
    flex: 1,
  },
  {
    field: "vehicle_brand",
    headerName: "Vehicle Brand",
    flex: 1,
  },
  {
    field: "vehicle_cc",
    headerName: "Vehicle CC",
    flex: 1,
  },
  {
    field: "vehicle_type",
    headerName: "Vehicle Type",
    flex: 1,
  },
  {
    field: "zone",
    headerName: "Zone",
    flex: 1,
  },
];

export const productsDataGridAttributes: GridColDef<TProductDataGrid>[] = [
  {
    field: "username",
    headerName: "Username",
    flex: 1,
  },
  {
    field: "zone",
    headerName: "Zone",
    flex: 1,
  },
  {
    field: "vehicle_brand",
    headerName: "Vehicle Brand",
    flex: 1,
  },
  {
    field: "sdk_int",
    headerName: "SDK",
    flex: 1,
  },
  {
    field: "vehicle_brand",
    headerName: "Vehicle Brand",
    flex: 1,
  },
  {
    field: "vehicle_cc",
    headerName: "Vehicle CC",
    flex: 1,
  },
];
