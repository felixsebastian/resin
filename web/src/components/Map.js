import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
  Circle,
  Polygon,
  Polyline
} from "react-google-maps";
import { compose, withStateHandlers } from "recompose";
import store from "../lib/store";
import { selectIncident } from "../lib/actions";
import Viewport from "./Viewport";
import styled from "styled-components";
const {
  DrawingManager
} = require("react-google-maps/lib/components/drawing/DrawingManager");

const position = { lat: -34.397, lng: 150.644 };

const coords = [
  { lat: -34.4, lng: 150.65 },
  { lat: -34.39, lng: 150.64 },
  { lat: -34.398, lng: 150.6 }
];

const coords2 = [{ lat: -34.3, lng: 150.6 }, { lat: -34.45, lng: 150.7 }];

const Map = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
      isClicked: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      }),
      onClickedOpen: ({ isClicked }) => () => ({
        isClicked: !isClicked
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={() => {
          store.dispatch(selectIncident(1));
        }}
        onMouseOver={props.onToggleOpen}
        onMouseOut={props.onToggleOpen}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <p>
                {"Click to see info on "}
                <strike>{"left"}</strike>
                {" right panel"}
              </p>
            </div>
          </InfoWindow>
        )}
        {props.isClicked && (
          <Circle
            center={position}
            radius={10000}
            options={{
              fillColor: "red",
              strokeColor: "red"
            }}
          />
        )}
      </Marker>
    }
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
