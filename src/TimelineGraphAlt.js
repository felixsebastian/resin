import "moment-duration-format";
import moment from "moment";
import React from "react";
import { format } from "d3-format";
import _ from "underscore";

import { TimeSeries, TimeRange, avg } from "pondjs";

import {
  ChartContainer,
  ChartRow,
  Charts,
  YAxis,
  LineChart,
  Resizable,
  ValueAxis,
  styler
} from "react-timeseries-charts";

import data from "./bike.json";

// Styling relates a channel to its rendering properties. In this way you
// can achieve consistent styles across different charts and labels by supplying
// the components with this styler object

const style = styler([
  { key: "distance", color: "#e2e2e2" },
  { key: "altitude", color: "#e2e2e2" },
  { key: "cadence", color: "#ff47ff" },
  { key: "power", color: "green", width: 1, opacity: 0.5 },
  { key: "temperature", color: "#cfc793" },
  { key: "speed", color: "steelblue", width: 1, opacity: 0.5 }
]);

// Baselines are the dotted average lines displayed on the chart
// In this case these are separately styled

const baselineStyles = {
  speed: {
    stroke: "steelblue",
    opacity: 0.5,
    width: 0.25
  },
  power: {
    stroke: "green",
    opacity: 0.5,
    width: 0.25
  }
};

// d3 formatter to display the speed with one decimal place
const speedFormat = format(".1f");

class cycling extends React.Component {
  constructor(props) {
    super(props);
    const initialRange = new TimeRange([75 * 60 * 1000, 125 * 60 * 1000]);

    // Storage for all the data channels
    const channels = {
      distance: {
        units: "miles",
        label: "Distance",
        format: ",.1f",
        series: null,
        show: false
      },
      altitude: {
        units: "feet",
        label: "Altitude",
        format: "d",
        series: null,
        show: false
      },
      cadence: {
        units: "rpm",
        label: "Cadence",
        format: "d",
        series: null,
        show: true
      },
      power: {
        units: "watts",
        label: "Power",
        format: ",.1f",
        series: null,
        show: true
      },
      temperature: {
        units: "deg F",
        label: "Temp",
        format: "d",
        series: null,
        show: false
      },
      speed: {
        units: "mph",
        label: "Speed",
        format: ",.1f",
        series: null,
        show: true
      }
    };

    // Channel names list, in order we want them shown
    const channelNames = [
      "speed",
      "power",
      "cadence",
      "temperature",
      "distance",
      "altitude"
    ];

    // Channels we'll actually display on our charts
    const displayChannels = ["speed", "power", "cadence"];

    // Rollups we'll generate to reduce data for the screen
    const rollupLevels = ["1s", "3s", "8s", "15s", "20s", "35s"];

    this.state = {
      ready: false,
      mode: "channels",
      channels,
      channelNames,
      displayChannels,
      rollupLevels,
      rollup: "1m",
      tracker: null,
      timerange: initialRange,
      brushrange: initialRange
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const {
        channelNames,
        channels,
        displayChannels,
        rollupLevels
      } = this.state;

      //
      // Process the data file into channels
      //

      const points = {};
      channelNames.forEach(channel => {
        points[channel] = [];
      });

      for (let i = 0; i < data.time.length; i += 1) {
        if (i > 0) {
          const deltaTime = data.time[i] - data.time[i - 1];
          const time = data.time[i] * 1000;

          points["distance"].push([time, data.distance[i]]);
          points["altitude"].push([time, data.altitude[i] * 3.28084]); // convert m to ft
          points["cadence"].push([time, data.cadence[i]]);
          points["power"].push([time, data.watts[i]]);
          points["temperature"].push([time, data.temp[i]]);

          // insert a null into the speed data to put breaks in the data where
          // the rider was stationary
          if (deltaTime > 10) {
            points["speed"].push([time - 1000, null]);
          }

          const speed =
            (data.distance[i] - data.distance[i - 1]) /
            (data.time[i] - data.time[i - 1]); // meters/sec
          points["speed"].push([time, 2.236941 * speed]); // convert m/s to miles/hr
        }
      }

      // Make the TimeSeries here from the points collected above
      for (let channelName of channelNames) {
        // The TimeSeries itself, for this channel
        const series = new TimeSeries({
          name: channels[channelName].name,
          columns: ["time", channelName],
          points: points[channelName]
        });

        if (_.contains(displayChannels, channelName)) {
          const rollups = _.map(rollupLevels, rollupLevel => {
            return {
              duration: parseInt(rollupLevel.split("s")[0], 10),
              series: series.fixedWindowRollup({
                windowSize: rollupLevel,
                aggregation: { [channelName]: { [channelName]: avg() } }
              })
            };
          });

          // Rollup series levels
          channels[channelName].rollups = rollups;
        }

        // Raw series
        channels[channelName].series = series;

        // Some simple statistics for each channel
        channels[channelName].avg = parseInt(series.avg(channelName), 10);
        channels[channelName].max = parseInt(series.max(channelName), 10);
      }

      // Min and max time constraints for pan/zoom, along with the smallest timerange
      // the user can zoom into. These are passed into the ChartContainers when we come to
      // rendering.

      const minTime = channels.altitude.series.range().begin();
      const maxTime = channels.altitude.series.range().end();
      const minDuration = 10 * 60 * 1000;

      this.setState({ ready: true, channels, minTime, maxTime, minDuration });
    }, 0);
  }

  handleTrackerChanged = t => {
    this.setState({ tracker: t });
  };

  // Handles when the brush changes the timerange
  handleTimeRangeChange = timerange => {
    const { channels } = this.state;

    if (timerange) {
      this.setState({ timerange, brushrange: timerange });
    } else {
      this.setState({
        timerange: channels["altitude"].range(),
        brushrange: null
      });
    }
  };

  handleChartResize = width => {
    this.setState({ width });
  };

  handleActiveChange = channelName => {
    const channels = this.state.channels;
    channels[channelName].show = !channels[channelName].show;
    this.setState({ channels });
  };

  renderChannelsChart = () => {
    const {
      timerange,
      displayChannels,
      channels,
      maxTime,
      minTime,
      minDuration
    } = this.state;

    const durationPerPixel = timerange.duration() / 800 / 1000;
    const rows = [];

    console.log("displayChannels", displayChannels);

    for (let channelName of displayChannels.slice(0, 2)) {
      const charts = [];
      let series = channels[channelName].series;
      _.forEach(channels[channelName].rollups, rollup => {
        if (rollup.duration < durationPerPixel * 2) {
          series = rollup.series.crop(timerange);
        }
      });

      charts.push(
        <LineChart
          key={`line-${channelName}`}
          axis={`${channelName}_axis`}
          series={series}
          columns={[channelName]}
          style={style}
          breakLine
        />
      );

      // Get the value at the current tracker position for the ValueAxis
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
          visible={channels[channelName].show}
          key={`row-${channelName}`}
        >
          <YAxis
            id={`${channelName}_axis`}
            label={channelName}
            min={0}
            max={channels[channelName].max}
            width={55}
            type="linear"
            format=",.0f"
          />
          <Charts>{charts}</Charts>
          <ValueAxis
            id={`${channelName}_valueaxis`}
            value={value}
            detail={channels[channelName].units}
            width={80}
            min={0}
            max={35}
          />
        </ChartRow>
      );
    }

    return (
      <ChartContainer
        timeRange={this.state.timerange}
        format="relative"
        showGrid={false}
        enablePanZoom
        minDuration={1000}
        maxTime={maxTime}
        minTime={minTime}
        minDuration={minDuration}
        trackerPosition={this.state.tracker}
        onTimeRangeChanged={this.handleTimeRangeChange}
        onChartResize={width => this.handleChartResize(width)}
        onTrackerChanged={this.handleTrackerChanged}
      >
        {rows}
      </ChartContainer>
    );
  };

  renderModeOptions = () => {
    const linkStyle = {
      fontWeight: 600,
      color: "grey",
      cursor: "default"
    };

    const linkStyleActive = {
      color: "steelblue",
      cursor: "pointer"
    };

    if (this.state.mode === "multiaxis") {
      return <div />;
    } else if (this.state.mode === "channels") {
      return <div />;
    }
    return <div />;
  };

  render() {
    const { ready, channels, displayChannels } = this.state;

    if (!ready) {
      return <div>{`Building rollups...`}</div>;
    }
    const chartStyle = {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#DDD",
      paddingTop: 10,
      marginBottom: 10
    };

    const brushStyle = {
      boxShadow: "inset 0px 2px 5px -2px rgba(189, 189, 189, 0.75)",
      background: "#FEFEFE",
      paddingTop: 10
    };

    // Generate the legend
    const legend = displayChannels.map(channelName => ({
      key: channelName,
      label: channels[channelName].label,
      disabled: !channels[channelName].show
    }));

    return (
      <div>
        <div className="row">
          <div className="col-md-6" />

          <div className="col-md-6">
            {this.state.tracker
              ? `${moment.duration(+this.state.tracker).format()}`
              : "-:--:--"}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={chartStyle}>
            <Resizable>
              {ready ? this.renderChannelsChart() : <div>Loading.....</div>}
            </Resizable>
          </div>
        </div>
      </div>
    );
  }
}

// Export example
export default cycling;
