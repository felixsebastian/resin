/*global google */

import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Polygon,
  Polyline,
} from "react-google-maps";
import { compose } from "recompose";
import Viewport from "./Viewport";
import styled from "styled-components";
import Incident from "./IncidentMarker";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";

const GET_ALL_INCIDENT = gql`
  {
    Incident {
      incident
    }
  }
`;

/*
function getAllIncident() 
{
  const { loading, error, data } = useQuery(GET_ALL_INCIDENT);

  if (loading) console.log("loading");
  if (error) console.log("Error");

  return data.Incident.map(({ incident }) => (
    console.log({ incident })
  ));
}
*/

const Layout = styled(Viewport)`
  width: 100%;
`;

const position = { lat: -34.397, lng: 150.644 };

const markers = [
  { lat: -34.4, lng: 150.65 },
  { lat: -34.39, lng: 150.64 },
  { lat: -34.398, lng: 150.6 }
];

const coords = [{ lat: -34.3, lng: 150.6 }, { lat: -34.45, lng: 150.7 }];

const Map = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={position}>
    {markers.map(marker => (
      <Incident marker={marker} />
    ))}
    <Polygon
      path={markers}
      options={{
        fillColor: "green",
        strokeColor: "blue"
      }}
    />
    <Polyline
      path={coords}
      geodesic={true}
      options={{
        strokeColor: "green"
      }}
    />
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.RECTANGLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        rectangleOptions: {
          fillColor: `blue`,
          fillOpacity: 0.5,
          strokeWeight: 3,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
));

export default () => (
  <Layout>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk&libraries=drawing"
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </Layout>
);
