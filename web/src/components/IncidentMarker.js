import React from "react"
import { compose, withStateHandlers } from "recompose";
import {
    Marker,
    InfoWindow,
    Circle
} from "react-google-maps";
import store from "../lib/store";
import { incidentSelected } from "../lib/actionCreators";

const Incident = compose(
    withStateHandlers(
      () => ({
        isOpen: false,
        isClicked: false
      }),
      {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen
        }),
        onClickedOpen: ({ isClicked }) => (marker) => ({
          isClicked: !isClicked
        })
      }
    )(props => (
      <Marker
        position={props.marker}
        onClick={() => {
          store.dispatch(incidentSelected());
          props.onClickedOpen();
        }}
        onMouseOver={props.onToggleOpen}
        onMouseOut={props.onToggleOpen}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <p>
                {props.marker.lat} and {props.marker.lng}
              </p>
            </div>
          </InfoWindow>
        )}
        {props.isClicked && (
          <Circle
            center={props.marker}
            radius={10000}
            options={{
              fillColor: "red",
              strokeColor: "red"
            }}
          />
        )}
      </Marker>
    ))
  )

export default Incident;