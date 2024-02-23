import { ResponsivePie } from "@nivo/pie";
import React from "react";

const PieChart = ({ pieData }: any): JSX.Element => {
  // const pieData = [
  //   {
  //     id: "Samsung",
  //     label: "Samsung",
  //     value: 170,
  //     color: "hsl(157, 70%, 50%)",
  //   },
  //   {
  //     id: "Realme",
  //     label: "Realme",
  //     value: 196,
  //     color: "hsl(220, 70%, 50%)",
  //   },
  //   {
  //     id: "Oppo",
  //     label: "Oppo",
  //     value: 425,
  //     color: "hsl(71, 70%, 50%)",
  //   },
  //   {
  //     id: "Xiaomi",
  //     label: "Xiaomi",
  //     value: 254,
  //     color: "hsl(5, 70%, 50%)",
  //   },
  //   {
  //     id: "Vivo",
  //     label: "Vivo",
  //     value: 358,
  //     color: "hsl(237, 70%, 50%)",
  //   },
  //   {
  //     id: "Oneplus",
  //     label: "Oneplus",
  //     value: 358,
  //     color: "hsl(237, 70%, 50%)",
  //   },
  //   {
  //     id: "Motorola",
  //     label: "Motorola",
  //     value: 358,
  //     color: "hsl(237, 70%, 50%)",
  //   },
  //   {
  //     id: "Asus",
  //     label: "Asus",
  //     value: 358,
  //     color: "hsl(237, 70%, 50%)",
  //   },
  //   {
  //     id: "Infinix",
  //     label: "Infinix",
  //     value: 358,
  //     color: "hsl(237, 70%, 50%)",
  //   },
  // ];

  // const pieFill = [
  //   {
  //     match: {
  //       id: "ruby",
  //     },
  //     id: "dots",
  //   },
  //   {
  //     match: {
  //       id: "c",
  //     },
  //     id: "dots",
  //   },
  //   {
  //     match: {
  //       id: "go",
  //     },
  //     id: "dots",
  //   },
  //   {
  //     match: {
  //       id: "python",
  //     },
  //     id: "dots",
  //   },
  //   {
  //     match: {
  //       id: "scala",
  //     },
  //     id: "lines",
  //   },
  //   {
  //     match: {
  //       id: "lisp",
  //     },
  //     id: "lines",
  //   },
  //   {
  //     match: {
  //       id: "elixir",
  //     },
  //     id: "lines",
  //   },
  //   {
  //     match: {
  //       id: "javascript",
  //     },
  //     id: "lines",
  //   },
  //   {
  //     match: {
  //       id: "javascript",
  //     },
  //     id: "lines",
  //   },
  //   {
  //     match: {
  //       id: "javascript",
  //     },
  //     id: "lines",
  //   },
  // ];

  return (
    <ResponsivePie
      data={pieData}
      margin={{ top: 30, right: 60, bottom: 110, left: 40 }}
      padAngle={0.1}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
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
