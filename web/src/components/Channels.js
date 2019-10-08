import React from "react";
import ChartContainer from "./ChartContainer";
import ChartRow from "./ChartRow";
import Charts from "./Charts";
import YAxis from "./YAxis";
import LineChart from "./LineChart";
import Resizable from "./Resizable";
import ValueAxis from "./ValueAxis";
import { TimeRange } from "pondjs";
import data from "../data/bikeLight";
import connect from "../lib/connect";

const minTime = new Date(data.time[0] * 1000);
const maxTime = new Date(data.time[data.time.length - 1] * 1000);

export default connect(state => ({
  channels: state.timeline.channels,
  timeRange: state.timeline.timeRange,
  tracker: state.timeline.tracker
}))(({ channels, timeRange, tracker, actions }) => {
  const { changeTimeRange, moveTracker } = actions;
  channels = { ...channels };
  const durationPerPixel = timeRange.duration() / 800 / 1000;
  const rows = [];

  Object.keys(channels).forEach(id => {
    const channel = channels[id];
    const charts = [];
    let series = channel.series;

    channel.rollups.forEach(rollup => {
      if (rollup.duration < durationPerPixel * 2) {
        series = rollup.series.crop(
          new TimeRange([
            timeRange.begin() - timeRange.duration() / 2,
            timeRange.end() + timeRange.duration() / 2
          ])
        );
      }
    });

    if (channel.chartType === "line")
      charts.push(
        <LineChart
          key={`line-${id}`}
          axis={`${id}_axis`}
          series={series}
          columns={[id]}
          style={channel.styles}
          breakLine
        />
      );
    else if (channel.chartType === "boolean") charts.push(null);

    let value = "--";
    if (tracker) {
      const approx =
        (+tracker - +timeRange.begin()) /
        (+timeRange.end() - +timeRange.begin());
      const ii = Math.floor(approx * series.size());
      const i = series.bisect(new Date(tracker), ii);
      const v = i < series.size() ? series.at(i).get(id) : null;
      if (v) {
        value = parseInt(v, 10);
      }
    }

    rows.push(
      <ChartRow
        titleStyle={{
          fill: "#fff",
          fontFamily: "Space Mono"
        }}
        titleBoxStyle={{ fill: "#333" }}
        height="80"
        key={`row-${id}`}
        title={id}
      >
        <YAxis
          id={`${id}_axis`}
          visible={false}
          min={channel.min}
          max={channel.max}
        />
        <Charts>{charts}</Charts>
        <ValueAxis
          id={`${id}_valueaxis`}
          value={value}
          detail={channels[id].units}
          width={60}
          min={0}
          max={35}
        />
      </ChartRow>
    );
  });

  return (
    <Resizable>
      <ChartContainer
        timeRange={timeRange}
        format="relative"
        showGrid={false}
        trackerShowTime={false}
        enablePanZoom
        minDuration={1000}
        maxTime={maxTime}
        minTime={minTime}
        trackerPosition={tracker}
        onTimeRangeChanged={changeTimeRange}
        onTrackerChanged={moveTracker}
        hideTimeAxis
      >
        {rows}
      </ChartContainer>
    </Resizable>
  );
});
