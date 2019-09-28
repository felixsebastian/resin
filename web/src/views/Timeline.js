import React from "react";
import store from "./store";
import Viewport from "./Viewport";
import styled from "styled-components";

import { 
  Charts, 
  ChartContainer, 
  ChartRow, 
  YAxis, 
  LineChart,
  Baseline,
  Resizable,
  Brush
} from "react-timeseries-charts";
import { TimeSeries } from "pondjs";

const Layout = styled(Viewport)`
  width: 100%;
`;

const data = require("./usd_vs_aud.json");
const points = data.widget[0].data.reverse();
const series = new TimeSeries({
    name: "USD_vs_AUD",
    columns: ["time", "value"],
    points
});
const style = {
  value: {
      stroke: "#a02c2c",
      opacity: 0.2
  }
};

const baselineStyle = {
  line: {
      stroke: "steelblue",
      strokeWidth: 1,
      opacity: 0.4,
      strokeDasharray: "none"
  },
  label: {
      fill: "steelblue"
  }
};

const baselineStyleLite = {
  line: {
      stroke: "steelblue",
      strokeWidth: 1,
      opacity: 0.5
  },
  label: {
      fill: "steelblue"
  }
};

const baselineStyleExtraLite = {
  line: {
      stroke: "steelblue",
      strokeWidth: 1,
      opacity: 0.2,
      strokeDasharray: "1,1"
  },
  label: {
      fill: "steelblue"
  }
};

const brushStyle = {
  fill: "#777",
  fillOpacity: 0.3,
  stroke: "#fff",
  shapeRendering: "crispEdges",
  cursor: "ew-resize"
};

export default () => {
  return( 
    <Layout>
      <Resizable>
        <ChartContainer
          title="AUD price (USD)"
          titleStyle={{ fill: "#555", fontWeight: 500 }}
          timeRange={series.range()}
          format="%b '%y"
          timeAxisTickCount={5}
        >
          <ChartRow height="150">
            <YAxis
              id="price"
              label="Price ($)"
              min={series.min()}
              max={series.max()}
              width="60"
              format="$,.2f"
            />
            <Charts>
              <LineChart 
                axis="price" 
                series={series} 
                style={style} 
              />
              <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series.max()}
                  label="Max"
                  position="right"
              />
              <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series.min()}
                  label="Min"
                  position="right"
              />
              <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series.avg() - series.stdev()}
              />
              <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series.avg() + series.stdev()}
              />
              <Baseline
                  axis="price"
                  style={baselineStyle}
                  value={series.avg()}
                  label="Avg"
                  position="right"
              />
            </Charts>
          </ChartRow>
        </ChartContainer>
      </Resizable>
    </Layout>
  )
}
