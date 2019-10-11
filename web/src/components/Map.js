/*global google */

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
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";

const INCIDENTS = gql`
  {
    incidents {
      id
      timestamp
      latitude
      longitude
      numVehicles
      damageSeverity
      description
      dca
      weatherDesc
    }
  }
`;

const Layout = styled(Viewport)`
  width: 100%;
`;

const coords = [{ lat: -34.3, lng: 150.6 }, { lat: -34.45, lng: 150.7 }];

const Map = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  const { loading, error, data } = useQuery(INCIDENTS);

  if (loading) console.log("loading");
  if (error) console.log("Error");

  const markers = [];

  if (!loading)
    data.incidents.forEach(vehicle => {
      markers.push({
        id: vehicle.id,
        time: vehicle.timestamp,
        lat: vehicle.latitude,
        lng: vehicle.longitude,
        num: vehicle.numVehicles,
        dmg: vehicle.damageSeverity,
        desc: vehicle.description,
        dca: vehicle.dca,
        weather: vehicle.weatherDesc,
        mode: vehicle.mode
      });
    });

  console.log(data);

  var position = markers.reduce(
    (result, next) => {
      result.lat += next.lat;
      result.lng += next.lng;
      return result;
    },
    { lat: 0, lng: 0 }
  );

  position = {
    lat: position.lat / markers.length,
    lng: position.lng / markers.length
  };

  return (
    <GoogleMap defaultZoom={16} center={position}>
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
  <Layout>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk&libraries=geometry,drawing,places"
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </Layout>
);
