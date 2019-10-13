/* global google */
import React, { useState } from "react";
import { Marker, InfoWindow, Circle, GoogleMap } from "react-google-maps";
import connect from "../lib/connect";

const Halo = props => (
  <Circle
    center={props.center}
    radius={20}
    options={{
      fillColor: "red",
      strokeColor: "red"
    }}
  />
);

const Info = props => (
  <InfoWindow onCloseClick={props.onToggleOpen}>
    <div>
      <p>
        {"{"}
        {props.latitude}
        {","}
        {props.longitude}
        {"}"}
      </p>
    </div>
  </InfoWindow>
);

export default connect((state, props) => ({
  isShiftKeyDown: state.keysDown.includes("Shift"),
  selected: state.selection.includes(props.marker.id)
}))(props => {
  const { marker } = props;
  const [state, setState] = useState({ isOpen: false });

  return (
    <Marker
      position={marker}
      onClick={() =>
        props.isShiftKeyDown
          ? props.actions.addIncidentToSelection(marker.id)
          : props.actions.selectIncident(marker.id)
      }
      onMouseOver={() => setState({ ...state, isOpen: true })}
      onMouseOut={() => setState({ ...state, isOpen: false })}
      icon={{ url: "/marker.png", anchor: new google.maps.Point(9, 9) }}
    >
      {props.isOpen && <Info latitude={marker.lat} longitude={marker.lng} />}
      {props.selected && <Halo center={marker} />}
    </Marker>
  );
});
