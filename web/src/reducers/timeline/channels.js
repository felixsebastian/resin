import { TimeSeries, avg } from "pondjs";
import fibbonacci from "../../lib/fibbonacci";
import data from "../../data/bikeLight";
import getChannelStyles from "../../lib/getChannelStyles";

const genExampleData = channel => {
  return [...data.time].map((time, i) => [time * 1000, data[channel][i]]);
};

const rollupLevels = fibbonacci(200);

const channels = {
  altitude: {
    units: "feet",
    format: "d",
    chartType: "line",
    color: "magenta",
    show: true,
    data: genExampleData("altitude")
  },
  cadence: {
    units: "rpm",
    format: "d",
    chartType: "line",
    color: "blue",
    show: true,
    data: genExampleData("cadence")
  },
  power: {
    units: "watts",
    format: ",.1f",
    chartType: "line",
    color: "yellow",
    show: true,
    data: genExampleData("power")
  }
};

Object.keys(channels).forEach(id => (channels[id].id = id));

Object.keys(channels).forEach(
  id => (channels[id].styles = getChannelStyles(channels[id]))
);

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

export default (state = channels, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
