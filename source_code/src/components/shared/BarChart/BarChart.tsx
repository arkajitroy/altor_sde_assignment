import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ data }: any) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="category"
      margin={{ top: 40, right: 20, bottom: 120, left: 50 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      colors="#5D3FD3"
      labelTextColor="white"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      axisBottom={{
        tickRotation: -58,
      }}
    />
  );
};

export default BarChart;
