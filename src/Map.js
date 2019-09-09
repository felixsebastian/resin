import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
  OverlayView,
} from "react-google-maps";
import DataPanel from "./DataPanel";
import { css } from "glamor";
import { compose, withStateHandlers, withProps } from "recompose";
import { geo } from "./data";

import {connect} from 'react-redux'
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

/*
var markers = [
  {
    id: '1',
    lat: '-34.397',
    lng: '150.64', 
  },
  {
    id: '2',
    lat: '-34.5',
    lng: '150.64',
  }
];

function setMark(mark) {
  console.log(markers)
}

*/
const dataPanelCss = css({});

const Map =
  compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQNVlrpDGGHrW5wdTK2tPbB0S8SwWlL7w",
      loadingElement: <div />,
      containerElement: <div style={{ height: "100%", width: "100%" }} />,
      mapElement: <div style={{ height: "100%", width: "100%" }} />,
    }),
    withStateHandlers(() => ({
      isOpen: false, isClicked: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
      onClicked: ({ isClicked }) => () => ({
        isClicked: !isClicked,
      }),
      onMarkerClick: () => (marker) => {
        const clickedMarkers = marker;
        console.log(clickedMarkers)
      }
    }), 
  withScriptjs,
  withGoogleMap)(props => (
    <GoogleMap 
      defaultZoom={12} 
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      //onClick={e => setMark(e)}
    >
      {
          <Marker 
            position={{ lat: -34.397, lng: 150.644 }} 
            onClick={props.onClicked}
            onMouseOver={props.onToggleOpen}
            onMouseOut={props.onToggleOpen}
          >
            {
              props.isOpen &&
              <InfoWindow onCloseClick={props.onToggleOpen}>
                <div>
                  <p>{'Showing something in the info window'}</p>
                </div>
              </InfoWindow>
            } 
            
            { props.isClicked &&
              <OverlayView
                position={{ lat: -34.397, lng: 150.644 }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div style={{ background: `white`, border: `1px solid #ccc`, padding: 15}}>
                  <h1>Overlay View</h1>
                  <button 
                    onClick={props.onClicked} 
                    style={{ left: '91%', top: '10%', position: 'absolute'}}>
                    X
                  </button>
                  <DataPanel
                    className={dataPanelCss}
                    items={geo}
                  />
                </div>
              </OverlayView>
            }
          </Marker>
       /* 
        props.markerList.map((marker) => 
          <Marker
            key={marker.id}
            position={{lat: -34.397, lng: 150.644 }}
            onClick={props.onMarkerClick(marker)}
            onMouseOver={props.onToggleOpen}
            onMouseOut={props.onToggleOpen}
          >
            {
            props.isOpen &&
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <p>{marker}</p>
              </div>
            </InfoWindow>
            } 
          </Marker>
        )
        */
      }
    </GoogleMap>
  ));

export default props => (
  <Map
    isMarkerShown = {true}
    //markerList = {markers}
  />
);
