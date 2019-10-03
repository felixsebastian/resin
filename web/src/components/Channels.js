import React from "react";
import ChartContainer from "./ChartContainer";
import ChartRow from "./ChartRow";
import Charts from "./Charts";
import YAxis from "./YAxis";
import LineChart from "./LineChart";
import Resizable from "./Resizable";
import ValueAxis from "./ValueAxis";
import styler from "../lib/styler";
import { TimeRange } from "pondjs";
import { connect } from "react-redux";
import data from "../data/bike.json";
import { TimeSeries, avg } from "pondjs";
import fibbonacci from "../lib/fibbonacci";
import {
  timeRangeChanged,
  trackerMoved,
  zoomLevelChanged
} from "../lib/actionCreators";

const minTime = new Date(data.time[0]);
const maxTime = new Date(data.time[data.time.length - 1]);
const rollupLevels = fibbonacci(200);

const style = channels =>
  styler(
    Object.keys(channels).map(key => ({
      key,
      color: channels[key].color,
      width: 2
    }))
  );

export default connect(
  state => ({
    channels: state.timeline.channels,
    range: state.timeline.range,
    tracker: state.timeline.tracker
  }),
  dispatch => ({
    timeRangeChanged: () => dispatch(timeRangeChanged()),
    trackerMoved: () => dispatch(trackerMoved()),
    zoomLevelChanged: () => dispatch(zoomLevelChanged())
  })
)(({ channels, range, tracker, timeRangeChanged }) => {
  channels = { ...channels };
  const durationPerPixel = range.duration() / 800 / 1000;
  const rows = [];

  Object.keys(channels).forEach(channelName => {
    const channel = channels[channelName];

    const series = new TimeSeries({
      name: channel.name,
      columns: ["time", channelName],
      points: channel.data
    });

    channel.series = series;

    channel.rollups = rollupLevels.map(rollupLevel => ({
      duration: rollupLevel,
      series: series.fixedWindowRollup({
        windowSize: rollupLevel + "s",
        aggregation: { [channelName]: { [channelName]: avg() } }
      })
    }));

    channel.avg = parseInt(series.avg(channelName), 10);
    channel.min = parseInt(series.min(channelName), 10);
    channel.max = parseInt(series.max(channelName), 10);
  });

  Object.keys(channels).forEach(channelName => {
    const channel = channels[channelName];
    const charts = [];
    let series = channel.series;

    console.log(channel);

    channel.rollups.forEach(rollup => {
      if (rollup.duration < durationPerPixel * 2) {
        series = rollup.series.crop(
          new TimeRange([
            range.begin() - range.duration() / 2,
            range.end() + range.duration() / 2
          ])
        );
      }
    });

    if (channel.chartType === "line")
      charts.push(
        <LineChart
          key={`line-${channelName}`}
          axis={`${channelName}_axis`}
          series={series}
          columns={[channelName]}
          breakLine
          style={style(channels)}
        />
      );
    else if (channel.chartType === "boolean") charts.push();

    let value = "--";
    if (tracker) {
      const approx =
        (+this.state.tracker - +range.begin()) /
        (+range.end() - +range.begin());
      const ii = Math.floor(approx * series.size());
      const i = series.bisect(new Date(this.state.tracker), ii);
      const v = i < series.size() ? series.at(i).get(channelName) : null;
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
        key={`row-${channelName}`}
        title={channelName}
      >
        <YAxis
          id={`${channelName}_axis`}
          visible={false}
          min={channel.min}
          max={channel.max}
        />
        <Charts>{charts}</Charts>
        <ValueAxis
          id={`${channelName}_valueaxis`}
          value={value}
          detail={channels[channelName].units}
          width={60}
          min={0}
          max={35}
        />
      </ChartRow>
    );
  });

  console.log(tracker);

  return (
    <Resizable>
      <ChartContainer
        timeRange={range}
        format="relative"
        showGrid={false}
        trackerShowTime={false}
        enablePanZoom
        minDuration={1000}
        maxTime={maxTime}
        minTime={minTime}
        trackerPosition={tracker}
        onTimeRangeChanged={timeRangeChanged}
        onChartResize={zoomLevelChanged}
        onTrackerChanged={trackerMoved}
        hideTimeAxis
      >
        {rows}
      </ChartContainer>
    </Resizable>
  );
});
