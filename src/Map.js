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
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk"
    loadingElement={<div />}
    containerElement={<div style={{ height: "100%", width: "100%" }} />}
    mapElement={<div style={{ height: "100%", width: "100%" }} />}
  />
);
