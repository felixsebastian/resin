import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs
} from "react-google-maps";

var isShowInfoWindow = false;

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {
        props.isMarkerShown &&
        <Marker position={{ lat: -34.397, lng: 150.644 }} 
          onClick={(e)=>onMarkerClick(e)}
          onMouseOver={(e)=>onMarkerHoverOn(e)}
          onMouseOut={(e)=>onMarkerHoverOff(e)}
        >
          <InfoWindow 
            //onClose = {}
            visible={isShowInfoWindow}>
            <div>
              <p>{'Showing something in the info window'}</p>
            </div>
          </InfoWindow>
        </Marker>
      }
    </GoogleMap>
  ))
);

function onMarkerClick(e) 
{
  return console.log('Clicked at' + e.latLng.lat());
}

function onMarkerHoverOn(e) {
  //return console.log(marker);
  isShowInfoWindow = true;
  return console.log('Show Info Window: ' + isShowInfoWindow);
}

function onMarkerHoverOff(e) {
  //return console.clear();
  isShowInfoWindow = false;
  return console.log('Show Info Window: ' + isShowInfoWindow);
}

export default props => (
  <Map
    isMarkerShown = {true}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQNVlrpDGGHrW5wdTK2tPbB0S8SwWlL7w"
    loadingElement={<div />}
    containerElement={<div style={{ height: "100%", width: "100%" }} />}
    mapElement={<div style={{ height: "100%", width: "100%" }} />}
  />
);
