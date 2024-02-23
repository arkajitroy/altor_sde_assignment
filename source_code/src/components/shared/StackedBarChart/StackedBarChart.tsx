import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const StackedBarChart: React.FC = (): JSX.Element => {
  const stackedBarChartData = [
    {
      country: "AD",
      "hot dog": 164,
      "hot dogColor": "hsl(177, 70%, 50%)",
      burger: 136,
      burgerColor: "hsl(3, 70%, 50%)",
      sandwich: 88,
      sandwichColor: "hsl(171, 70%, 50%)",
      kebab: 152,
      kebabColor: "hsl(86, 70%, 50%)",
      fries: 129,
      friesColor: "hsl(282, 70%, 50%)",
      donut: 158,
      donutColor: "hsl(217, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 88,
      "hot dogColor": "hsl(163, 70%, 50%)",
      burger: 91,
      burgerColor: "hsl(293, 70%, 50%)",
      sandwich: 0,
      sandwichColor: "hsl(224, 70%, 50%)",
      kebab: 94,
      kebabColor: "hsl(314, 70%, 50%)",
      fries: 185,
      friesColor: "hsl(1, 70%, 50%)",
      donut: 175,
      donutColor: "hsl(107, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 58,
      "hot dogColor": "hsl(175, 70%, 50%)",
      burger: 108,
      burgerColor: "hsl(315, 70%, 50%)",
      sandwich: 34,
      sandwichColor: "hsl(340, 70%, 50%)",
      kebab: 22,
      kebabColor: "hsl(111, 70%, 50%)",
      fries: 86,
      friesColor: "hsl(72, 70%, 50%)",
      donut: 40,
      donutColor: "hsl(342, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 92,
      "hot dogColor": "hsl(359, 70%, 50%)",
      burger: 79,
      burgerColor: "hsl(8, 70%, 50%)",
      sandwich: 15,
      sandwichColor: "hsl(332, 70%, 50%)",
      kebab: 69,
      kebabColor: "hsl(204, 70%, 50%)",
      fries: 149,
      friesColor: "hsl(57, 70%, 50%)",
      donut: 90,
      donutColor: "hsl(282, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 134,
      "hot dogColor": "hsl(101, 70%, 50%)",
      burger: 41,
      burgerColor: "hsl(258, 70%, 50%)",
      sandwich: 42,
      sandwichColor: "hsl(211, 70%, 50%)",
      kebab: 194,
      kebabColor: "hsl(306, 70%, 50%)",
      fries: 164,
      friesColor: "hsl(244, 70%, 50%)",
      donut: 81,
      donutColor: "hsl(254, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 191,
      "hot dogColor": "hsl(96, 70%, 50%)",
      burger: 10,
      burgerColor: "hsl(344, 70%, 50%)",
      sandwich: 142,
      sandwichColor: "hsl(201, 70%, 50%)",
      kebab: 140,
      kebabColor: "hsl(78, 70%, 50%)",
      fries: 190,
      friesColor: "hsl(218, 70%, 50%)",
      donut: 133,
      donutColor: "hsl(33, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 180,
      "hot dogColor": "hsl(253, 70%, 50%)",
      burger: 63,
      burgerColor: "hsl(2, 70%, 50%)",
      sandwich: 158,
      sandwichColor: "hsl(167, 70%, 50%)",
      kebab: 136,
      kebabColor: "hsl(150, 70%, 50%)",
      fries: 99,
      friesColor: "hsl(34, 70%, 50%)",
      donut: 129,
      donutColor: "hsl(225, 70%, 50%)",
    },
  ];

  return (
    <ResponsiveBar
      data={stackedBarChartData}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
    />
  );
};

export default StackedBarChart;
