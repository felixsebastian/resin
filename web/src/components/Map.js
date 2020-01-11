/* global google */
import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { compose } from "recompose";
import Viewport from "./Viewport";
import styled from "styled-components";
import Incident from "./IncidentMarker";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
import averageGeoPosition from "../lib/averageGeoPosition";
import pickKeys from "../lib/pickKeys";
import connect from "../lib/connect";
import styles from "../lib/mapStyles";

const GOOGLE_MAPS_API_KEY = "AIzaSyBBvr0hEu7XpgMI6g0OJEzfai88VJNNm_c";

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

const heatMapOptions = {
  radius: 40,
  opacity: 0.3,
  gradient: ["transparent", "red"]
};

const Map = compose(
  connect(),
  withScriptjs,
  withGoogleMap
)(props => {
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
      onClick={props.actions.clearSelection}
      defaultZoom={16}
      center={{ lat: center.latitude, lng: center.longitude }}
      options={{ styles }}
    >
      <MarkerClusterer
        onClick={() => 1}
        averageCenter
        enableRetinaIcons
        gridSize={40}
      >
        {markers.map(marker => (
          <Incident key={marker.id} marker={marker} />
        ))}
      </MarkerClusterer>
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
      <HeatmapLayer
        data={markers.map(
          marker => new google.maps.LatLng(marker.lat, marker.lng)
        )}
        options={heatMapOptions}
      />
    </GoogleMap>
  );
});

export default () => (
  <Box>
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,visualization`}
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </Box>
);
