/* global google */
import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { compose } from "recompose";
import Incident from "./IncidentMarker";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
import averageGeoPosition from "../lib/averageGeoPosition";
import styles from "../lib/mapStyles";
import useActions from "../hooks/useActions";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GOOGLE_MAPS_API_KEY = "AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk";

const INCIDENTS = gql`
  query incidents($filters: [FilterInput]) {
    incidents(filters: $filters) {
      id
      timestamp
      location {
        latitude
        longitude
      }
      numVehicles
      damageSeverity
      description
      dca
      vehicles {
        vin
        type
        registration
        make
        model
        yearOfManufacture
        autonomyLevel
        sensors {
          type
        }
      }
    }
  }
`;

const heatMap = {
  radius: 40,
  opacity: 0.2,
  gradient: [
    "transparent",
    "#0000FF",
    "#00FFFF",
    "#00FF00",
    "#FFFF00",
    "#FF0000"
  ]
};

const serializeFilters = src =>
  src.map(filter => ({
    ...filter,
    value: btoa(JSON.stringify(filter.value))
  }));

const Map = compose(
  withScriptjs,
  withGoogleMap
)(() => {
  const { clearSelection } = useActions();

  const { loading, error, data } = useQuery(INCIDENTS, {
    variables: {
      filters: serializeFilters(useSelector(state => state.filters))
    },
    pollInterval: 2000
  });

  if (loading || error) return null;
  const markers = [];

  data.incidents.forEach(incident => {
    markers.push({
      id: incident.id,
      lat: incident.location.latitude,
      lng: incident.location.longitude
    });
  });

  const center = averageGeoPosition(
    data.incidents.map(incident => incident.location)
  );

  return (
    <GoogleMap
      onClick={clearSelection}
      defaultZoom={16}
      center={
        data.incidents.length > 0
          ? { lat: center.latitude, lng: center.longitude }
          : undefined
      }
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
        options={heatMap}
      />
    </GoogleMap>
  );
});

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
`;

const Toolbar = styled.div`
  padding: 0.2rem;
  border-bottom: 1px solid #aaaaaa;
  color: #fff;
`;

const Container = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const MapBox = styled.div`
  width: 100%;
  height: 100%;
`;

const HeatMapIcon = styled.button`
  display: inline-block;
  border: none;
  width: 1rem;
  height: 1rem;
  /* border-radius: 50%; */
  background-image: radial-gradient(
    #ff0000,
    #0000ff,
    #00ffff,
    #00ff00,
    #ffff00
  );
`;

export default () => (
  <Box>
    {/* <Toolbar>
      <HeatMapIcon />
    </Toolbar> */}
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,visualization`}
      loadingElement={<div />}
      containerElement={<Container />}
      mapElement={<MapBox />}
    />
  </Box>
);
