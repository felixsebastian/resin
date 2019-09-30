import React from "react";
import store from "./store";
import Viewport from "./Viewport";
import styled from "styled-components";
import { compose, withStateHandlers } from "recompose";

import _ from "underscore";
import Moment from "moment"
import { 
  Charts, 
  ChartContainer, 
  ChartRow, 
  YAxis, 
  LineChart,
  AreaChart,
  Resizable,
  ScatterChart,
  Legend,
  styler
} from "react-timeseries-charts";
import { TimeSeries, TimeRange, IndexedEvent, Collection } from "pondjs";

import weatherJSON from "./weather.json";

const Layout = styled(Viewport)`
  width: 100%;
`;

//
//Read in data
//

const temperaturePoints = [];
const pressurePoints = [];
const windPoints = [];
const gustPoints = [];
const rainPoints = [];
const rainAccumPoints = [];
_.each(weatherJSON, readings => {
    const time = new Moment(readings.Time).toDate().getTime();
    const tempReading = readings.TemperatureF;
    const pressureReading = readings["PressureIn"];
    const windReading = readings["WindSpeedMPH"] === "Calm" ? 0 : readings["WindSpeedMPH"];
    const gustReading = readings["WindSpeedGustMPH"];
    const rainReading = readings["HourlyPrecipIn"] === "N/A" ? 0 : readings["HourlyPrecipIn"];
    const rainAccumReading = readings["dailyrainin"];

    temperaturePoints.push([time, tempReading]);
    pressurePoints.push([time, pressureReading]);

    // Somewhat fake the wind speed...
    windPoints.push([time, windReading * 5]);
    if (gustReading !== "-" && gustReading !== 0) {
        gustPoints.push([time, gustReading * 5 + Math.random() * 2.5 - 2.5, gustReading / 3]);
    }
    rainPoints.push([time, rainReading]);
    rainAccumPoints.push([time, rainAccumReading]);
});

//
// Timeseries
//

const tempSeries = new TimeSeries({
  name: "Temperature",
  columns: ["time", "temp"],
  points: temperaturePoints
});
const pressureSeries = new TimeSeries({
  name: "Pressure",
  columns: ["time", "pressure"],
  points: pressurePoints
});
const windSeries = new TimeSeries({
  name: "Wind",
  columns: ["time", "wind"],
  points: windPoints
});
const gustSeries = new TimeSeries({
  name: "Gust",
  columns: ["time", "gust", "radius"],
  points: gustPoints
});
const rainSeries = new TimeSeries({
  name: "Rain",
  columns: ["time", "rain"],
  points: rainPoints
});
const rainAccumSeries = new TimeSeries({
  name: "Rain Accum",
  columns: ["time", "rainAccum"],
  points: rainAccumPoints
});

//
// Styling
//

const scheme = {
  temp: "#CA4040",
  pressure: "#9467bd",
  wind: "#987951",
  gust: "#CC862A",
  rain: "#C3CBD4",
  rainAccum: "#000"
};

const style = styler([
  { key: "temp", color: "#CA4040" },
  { key: "pressure", color: "#9467bd" },
  { key: "wind", color: "#987951" },
  { key: "gust", color: "#CC862A" },
  { key: "rain", color: "#C3CBD4" },
  { key: "rainAccum", color: "#333" }
]);

//
// Chart
//

export default class Timeline extends React.Component {
  state = {
    tracker: null,
    timerange: new TimeRange([1425168000000, 1433116800000]),
    selection: null
  };

  render() {
    return (
    <Layout>
      <Resizable>
        <ChartContainer
          utc={false}
          timeRange={tempSeries.timerange()}
          showGridPosition="under"
          onTrackerChanged={(tracker) => this.setState({tracker})}
          trackerPosition={this.state.tracker}
        >
          <ChartRow height="80">
          <YAxis
                id="temp"
                label="Temperature (°F)"
                labelOffset={5}
                style={style.axisStyle("temp")}
                min={50}
                max={70}
                width="100"
                type="linear"
                format=",.1f"
            />
            <Charts>
                <LineChart
                    axis="temp"
                    series={tempSeries}
                    columns={["temp"]}
                    style={style}
                />
            </Charts>
            
          </ChartRow>

          <ChartRow height="80">
            <YAxis
              id="wind"
              label="Wind (mph)"
              labelOffset={5}
              style={{ labelColor: scheme.wind }}
              min={0}
              max={50}
              width="100"
              type="linear"
              format=",.1f"
            />
            <Charts>
              <LineChart
                axis="wind"
                series={windSeries}
                columns={["wind"]}
                interpolation="curveStepBefore"
                style={style}
              />
              <ScatterChart
                axis="wind-gust"
                series={gustSeries}
                columns={["gust"]}
                style={style}
                radius={event => {
                    return event.get("radius");
                }}
              />
            </Charts>
            <YAxis
              id="wind-gust"
              label="Wind gust (mph)"
              labelOffset={-5}
              style={style.axisStyle("gust")}
              min={0}
              max={50}
              width="100"
              type="linear"
              format=",.1f"
            />
          </ChartRow>

          <ChartRow height="80">
            <YAxis
              id="total-rain"
              label="Total Precipitation (in)"
              style={style.axisStyle("rainAccum")}
              labelOffset={5}
              min={0}
              max={rainAccumSeries.max("rainAccum")}
              width="100"
              type="linear"
              format=",.2f"
            />
            <Charts>
              <AreaChart
                axis="rain"
                series={rainSeries}
                columns={{ up: ["rain"] }}
                style={style}
                interpolation="curveBasis"
                fillOpacity={0.4}
              />
              <LineChart
                axis="total-rain"
                series={rainAccumSeries}
                columns={["rainAccum"]}
                style={style}
              />
            </Charts>
            <YAxis
              id="rain"
              label="Precipitation (in)"
              labelOffset={-5}
              style={style.axisStyle("rain")}
              min={0}
              max={rainSeries.max("rain")}
              width="100"
              type="linear"
              format=",.2f"
            />
          </ChartRow>
        </ChartContainer>
      </Resizable>
      <Legend
          type="line"
          align="left"
          stack={false}
          style={style}
          categories={[
              { key: "temp", label: "Temperature" },
              { key: "pressure", label: "Pressure" },
              { key: "wind", label: "Wind speed" },
              { key: "gust", label: "Gust speed", symbolType: "dot" },
              { key: "rain", label: "Rainfall", symbolType: "swatch" },
              { key: "rainAccum", label: "Accumulated rainfall" }
          ]}
      />
    </Layout>
    )
  };
}