import { ResponsivePie } from "@nivo/pie";
import React from "react";

const PieChart = ({ pieData }: any): JSX.Element => {
  return (
    <ResponsivePie
      data={pieData}
      // colors={pieData.map((data: any) => data.color)}
      colors={{ scheme: "red_yellow_blue" }}
      margin={{ top: 30, right: 60, bottom: 110, left: 40 }}
      padAngle={0.1}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={0.2}
      borderColor={{
        from: "#00008B",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "black" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "black",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 60,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
