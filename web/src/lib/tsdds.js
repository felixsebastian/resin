import data from "../data/bike.json";

export const sources = {
  altitude: {
    units: "feet",
    label: "Altitude",
    format: "d",
    series: null,
    chartType: "line",
    color: "magenta"
  },
  cadence: {
    units: "rpm",
    label: "Cadence",
    format: "d",
    series: null,
    chartType: "line",
    color: "blue"
  },
  power: {
    units: "watts",
    label: "Power",
    format: ",.1f",
    series: null,
    chartType: "line",
    color: "yellow"
  }
};

export default (sources, start, end, detailLevel) => {
  return {};
};
