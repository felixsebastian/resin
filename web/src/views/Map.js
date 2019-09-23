import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
  OverlayView
} from "react-google-maps";
import DataPanel from "./DataPanel";
import { css } from "glamor";
import { compose, withStateHandlers, withProps } from "recompose";
import { islandCss } from "./Dashboard";

import store from "./Store";
import { clickTogglePanel } from "./Action";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
      clickTogglePanel: () => dispatch(clickTogglePanel())
  };
}

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
      onClicked: ({ isClicked }) => () => ({
        isClicked: !isClicked
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {<Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={ () => {
          console.log(store.getState())
        }}
        onMouseOver={props.onToggleOpen}
        onMouseOut={props.onToggleOpen}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <p>{"Showing something in the info window"}</p>
            </div>
          </InfoWindow>
        )}
        {props.isClicked && (
          <OverlayView
            position={{ lat: -34.397, lng: 150.644 }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                background: `white`,
                border: `1px solid #ccc`,
                padding: 15
              }}
            >
              <h1>Overlay View</h1>
              <button
                onClick={props.onClicked}
                style={{ left: "85%", top: "10%", position: "absolute" }}
              >
                X
              </button>
              <DataPanel
                items={[
                  { name: "road seg type", value: "intersection" },
                  { name: "terrain type", value: "built up" },
                  { name: "road type", value: "normal" }
                ]}
              />
            </div>
          </OverlayView>
        )}
      </Marker>
    }
  </GoogleMap>
));

connect()

const mapCss = css({
  width: "100%"
});

export default props => (
  <div className={`${islandCss} ${mapCss}`}>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk"
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </div>
);
