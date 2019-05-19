import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);

export default props => (
  <Map
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCo3IgVCx38MJbR-x-O-QYJZgnZK-HhKqU"
    loadingElement={<div />}
    containerElement={<div style={{ height: "100%", width: "100%" }} />}
    mapElement={<div style={{ height: "100%", width: "100%" }} />}
  />
);
