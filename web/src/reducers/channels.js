import data from "../data/bike";

const genExampleData = channel => {
  return [...data.time].map((time, i) => [time, data[channel][i] * 1000]);
};

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

export default (state = channels, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
