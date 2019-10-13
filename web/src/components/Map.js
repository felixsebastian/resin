/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  MarkerClusterer
} from "react-google-maps";
import { compose } from "recompose";
import Viewport from "./Viewport";
import styled from "styled-components";
import Incident from "./IncidentMarker";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
import averageGeoPosition from "../lib/averageGeoPosition";
import pickKeys from "../lib/pickKeys";
// const {
//   DrawingManager
// } = require("react-google-maps/lib/components/drawing/DrawingManager");

const INCIDENTS = gql`
  {
    incidents {
      id
      latitude
      longitude
    }
  }
`;

const Box = styled(Viewport)`
  width: 100%;
`;

const Map = compose(
  withScriptjs,
  withGoogleMap
)(() => {
  const { loading, error, data } = useQuery(INCIDENTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;
  const markers = [];

  data.incidents.forEach(incident => {
    markers.push({
      id: incident.id,
      lat: incident.latitude,
      lng: incident.longitude
    });
  });

  const center = averageGeoPosition(
    data.incidents.map(incident =>
      pickKeys(incident, ["latitude", "longitude"])
    )
  );

  return (
    <GoogleMap
      defaultZoom={16}
      center={{ lat: center.latitude, lng: center.longitude }}
    >
      {/* <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      > */}
      {markers.map(marker => (
        <Incident key={marker.id} marker={marker} />
      ))}
      {/* </MarkerClusterer> */}
      <DrawingManager
        //defaultDrawingMode={google.maps.drawing.OverlayType.RECTANGLE}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.RECTANGLE]
          },
          rectangleOptions: {
            fillColor: `blue`,
            fillOpacity: 0.4,
            strokeWeight: 1,
            clickable: false,
            editable: true,
            zIndex: 1
          }
        }}
        onRectangleComplete={rectangle => {
          console.log(rectangle.getBounds().ka.g);
          rectangle.setMap(null);
        }}
      />
    </GoogleMap>
  );
});

export default () => (
  <Box>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk&libraries=geometry,drawing,places"
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </Box>
);
