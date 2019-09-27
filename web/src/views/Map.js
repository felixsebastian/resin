import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs
} from "react-google-maps";
import { compose, withStateHandlers } from "recompose";
import store from "./store";
import { clickToggleInfoPanel } from "./action";
import Viewport from "./Viewport";
import styled from "styled-components";

const Map = compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
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
          store.dispatch(clickToggleInfoPanel());
        }}
        onMouseOver={props.onToggleOpen}
        onMouseOut={props.onToggleOpen}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <p>{"Click to see info on left panel"}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    }
  </GoogleMap>
));

const Layout = styled(Viewport)`
  width: 100%;
`;

export default props => (
  <Layout>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk"
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </Layout>
);
