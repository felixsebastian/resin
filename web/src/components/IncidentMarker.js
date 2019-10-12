import React, { useState, useEffect } from "react";
import { compose, withStateHandlers } from "recompose";
import { Marker, InfoWindow, Circle } from "react-google-maps";
import store from "../lib/store";
import { selectIncident, addIncidentToSelection } from "../actions";

function useKey(key) {
  // Keep track of key state
  const [pressed, setPressed] = useState(false);

  // Does an event match the key we're watching?
  const match = event => key.toLowerCase() == event.key.toLowerCase();

  // Event handlers
  const onDown = event => {
    if (match(event)) setPressed(true);
  };

  const onUp = event => {
    if (match(event)) setPressed(false);
  };

  // Bind and unbind events
  useEffect(() => {
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [key]);

  return pressed;
}

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
      onClickedOpen: ({ isClicked }) => marker => ({
        isClicked: !isClicked
      })
    }
  )(props => {
    const isShiftPressed = useKey("shift");

    return (
      <Marker
        position={props.marker}
        onClick={() => {
          if (isShiftPressed)
            store.dispatch(addIncidentToSelection(props.marker.id));
          else store.dispatch(selectIncident(props.marker.id));
          props.onClickedOpen();
        }}
        onMouseOver={props.onToggleOpen}
        onMouseOut={props.onToggleOpen}
        icon={"./marker.png"}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <p>
                {"{"}
                {props.marker.lat}
                {","}
                {props.marker.lng}
                {"}"}
              </p>
            </div>
          </InfoWindow>
        )}
        {props.isClicked && (
          <Circle
            center={props.marker}
            radius={100}
            options={{
              fillColor: "red",
              strokeColor: "red"
            }}
          />
        )}
      </Marker>
    );
  })
);

export default Incident;
