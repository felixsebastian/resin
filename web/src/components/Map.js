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
import sources from "../lib/incidentSources";

const GOOGLE_MAPS_API_KEY = "AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk";

const INCIDENTS = gql`
  query incidents($filters: FiltersInput!) {
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
        countryOfManufacture
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

const Map = compose(
  withScriptjs,
  withGoogleMap
)(() => {
  const { clearSelection } = useActions();
  const filters = useSelector(state => state.filters);

  const { loading, error, data } = useQuery(INCIDENTS, {
    variables: {
      filters: filters.reduce((result, filter) => {
        if (
          ["time", "location"].includes(
            sources.incidents.fields[filter.field].type
          )
        )
          result[filter.field] = { type: filter.type, value: filter.value };
        else result[filter.field] = { [filter.type]: filter.value };
        return result;
      }, {})
    }
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;
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
        options={heatMap}
      />
    </GoogleMap>
  );
});

export default () => (
  <Map
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,visualization`}
    loadingElement={<div />}
    containerElement={<div style={{ height: "100%", width: "100%" }} />}
    mapElement={<div style={{ height: "100%", width: "100%" }} />}
  />
);
