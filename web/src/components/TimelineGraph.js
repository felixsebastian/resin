import React from "react";
import { TimeSeries, Index } from "pondjs";
import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  styler
} from "react-timeseries-charts";

const TimelineContinuous = ({ color, data }) => {
  console.log(data);
  const style = styler([
    {
      key: "precip",
      color,
      selected: "#2CB1CF"
    }
  ]);

  const series = new TimeSeries({
    name: "hilo_rainfall",
    columns: ["index", "precip"],
    points: data.map(([d, value]) => [
      Index.getIndexString("1h", new Date(d)),
      value
    ])
  });

  return (
    <Resizable>
      <ChartContainer timeRange={series.range()} showGrid={true}>
        <ChartRow height="100">
          <YAxis
            id="rain"
            label="Rainfall (inches/hr)"
            min={0}
            max={2}
            format=".2f"
            width="0"
            type="linear"
          />
          <Charts>
            <LineChart
              axis="rain"
              style={style}
              spacing={1}
              interpolation="curveBasis"
              columns={["precip"]}
              series={series}
              minBarHeight={1}
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

const TimelineBoolean = ({ color, data }) =>
  null;
  //  <ResponsiveContainer>
  //    <LineChart width={300} data={[{a:5},{a:1},{a:3}]}>
  //      <Line type="monotone" dataKey="a" stroke={color} strokeWidth={2} isAnimationActive={false} />
  //    </LineChart>
  //  </ResponsiveContainer>

export default ({ type, color, data }) => {
  switch (type) {
    case "CONTINUOUS":
      return <TimelineContinuous color={color} data={data} />;
    case "BOOLEAN":
      return <TimelineBoolean color={color} data={data} />;
    default:
      return null;
  }
};
