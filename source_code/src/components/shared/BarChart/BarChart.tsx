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
      // legends={[
      //   {
      //     dataFrom: "keys",
      //     anchor: "bottom",
      //     direction: "column",
      //     justify: false,
      //     translateX: 160,
      //     translateY: 0,
      //     itemsSpacing: 2,
      //     itemWidth: 100,
      //     itemHeight: 20,
      //     itemDirection: "left-to-right",
      //     itemOpacity: 0.9,
      //     symbolSize: 20,
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
};

export default BarChart;
