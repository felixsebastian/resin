import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Polygon,
  Polyline
} from "react-google-maps";
import { compose } from "recompose";
import Viewport from "./Viewport";
import styled from "styled-components";
import Incident from "./IncidentMarker";

const position = { lat: -34.397, lng: 150.644 };

const coords = [
  { lat: -34.4, lng: 150.65 },
  { lat: -34.39, lng: 150.64 },
  { lat: -34.398, lng: 150.6 }
];

const markers = [
  { lat: -34.4, lng: 150.65 },
  { lat: -34.39, lng: 150.64 },
  { lat: -34.398, lng: 150.6 }
];

const coords2 = [{ lat: -34.3, lng: 150.6 }, { lat: -34.45, lng: 150.7 }];

const Map = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={position}>
    {markers.map(marker => (
      <Incident marker={marker}/>
    ))}
    <Polygon
      path={coords}
      options={{
        fillColor: "green",
        strokeColor: "blue"
      }}
    />
    <Polyline
      path={coords2}
      geodesic={true}
      options={{
        strokeColor: "green"
      }}
    />
  </GoogleMap>
));

const Layout = styled(Viewport)`
  width: 100%;
`;

export default () => (
  <Layout>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk"
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </Layout>
);
