import React from "react";
import "moment-duration-format";
import moment from "moment";
import { TimeSeries, TimeRange, avg } from "pondjs";
import ChartContainer from "./ChartContainer";
import ChartRow from "./ChartRow";
import Charts from "./Charts";
import YAxis from "./YAxis";
import Viewport from "./Viewport";
import LineChart from "./LineChart";
import Resizable from "./Resizable";
import ValueAxis from "./ValueAxis";
import data from "../data/bike.json";
import styled from "styled-components";
import styler from "../lib/styler";
import get, { sources as channels } from "../lib/tsdds";
import fibbonacci from "../lib/fibbonacci";

const Wrapper = styled(Viewport)`
  width: 100%;
  position: relative;
  background-color: #000;
`;

const style = styler(
  Object.keys(channels).map(key => ({
    key,
    color: channels[key].color,
    width: 2
  }))
);

const usingChannels = ["altitude"];

const rollupLevels = fibbonacci(200);

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    const initialRange = new TimeRange([75 * 60 * 1000, 125 * 60 * 1000]);

    this.state = {
      ready: false,
      channels: Object.keys(channels)
        .filter(key => usingChannels.includes(key))
        .reduce((res, o) => ({ ...res, [o]: channels[o] }), {}),
      rollup: "1m",
      tracker: null,
      timerange: initialRange
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const channels = this.state.channels;
      const points = {};

      Object.keys(channels).forEach(channelName => {
        points[channelName] = [];
      });

      for (let i = 1; i < data.time.length; i += 1) {
        const time = data.time[i] * 1000;
        Object.keys(channels).forEach(channelName => {
          points[channelName].push([time, data[channelName][i]]);
        });
      }

      Object.keys(channels).forEach(channelName => {
        const channel = channels[channelName];
        const series = new TimeSeries({
          name: channel.name,
          columns: ["time", channelName],
          points: points[channelName]
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

      const minTime = channels.altitude.series.range().begin();
      const maxTime = channels.altitude.series.range().end();
      this.setState({ ready: true, channels, minTime, maxTime });
    }, 0);
  }

  handleTrackerChanged = tracker => this.setState({ tracker });

  handleTimeRangeChange = timerange =>
    this.setState({
      timerange: timerange || this.state.channels["altitude"].range()
    });

  handleChartResize = width => this.setState({ width });

  handleActiveChange = channelName => {
    const channels = this.state.channels;
    channels[channelName].show = !channels[channelName].show;
    this.setState({ channels });
  };

  renderChannelsChart = () => {
    const { timerange, channels, maxTime, minTime } = this.state;
    const durationPerPixel = timerange.duration() / 800 / 1000;
    const rows = [];

    Object.keys(channels).forEach(channelName => {
      const channel = channels[channelName];
      const charts = [];
      let series = channel.series;

      channel.rollups.forEach(rollup => {
        if (rollup.duration < durationPerPixel * 2) {
          series = rollup.series.crop(
            new TimeRange([
              timerange.begin() - timerange.duration() / 2,
              timerange.end() + timerange.duration() / 2
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
            style={style}
          />
        );
      else if (channel.chartType === "boolean") charts.push();

      let value = "--";
      if (this.state.tracker) {
        const approx =
          (+this.state.tracker - +timerange.begin()) /
          (+timerange.end() - +timerange.begin());
        const ii = Math.floor(approx * series.size());
        const i = series.bisect(new Date(this.state.tracker), ii);
        const v = i < series.size() ? series.at(i).get(channelName) : null;
        if (v) {
          value = parseInt(v, 10);
        }
      }

      rows.push(
        <ChartRow
          height="80"
          key={`row-${channelName}`}
          title={channelName}
          titleStyle={{ color: "#fff", backgroundColor: "#222" }}
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

    return (
      <ChartContainer
        timeRange={this.state.timerange}
        format="relative"
        showGrid={false}
        trackerShowTime={false}
        enablePanZoom
        minDuration={1000}
        maxTime={maxTime}
        minTime={minTime}
        trackerPosition={this.state.tracker}
        onTimeRangeChanged={this.handleTimeRangeChange}
        onChartResize={width => this.handleChartResize(width)}
        onTrackerChanged={this.handleTrackerChanged}
        hideTimeAxis
      >
        {rows}
      </ChartContainer>
    );
  };

  render = () => (
    <Wrapper>
      {this.state.ready ? (
        <>
          <div>
            <Resizable>{this.renderChannelsChart()}</Resizable>
          </div>
          <div
            style={{
              borderTop: "0.2rem solid #aaa",
              backgroundColor: "#ccc",
              color: "fff",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0
            }}
          >
            {this.state.tracker
              ? `${moment.duration(+this.state.tracker).format()}`
              : "-:--:--"}
          </div>{" "}
        </>
      ) : (
        <div>{"..."}</div>
      )}
    </Wrapper>
  );
}
