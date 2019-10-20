import React from "react";
import { useSelector } from "react-redux";

export default props => {
  const filter = useSelector(state => state.filters[props.index]);

  const value = filter.value || {
    center: {
      latitude: 0,
      longitude: 0
    },
    distance: 0
  };

  return (
    <>
      <input
        type="number"
        placeholder="center lat"
        size="5"
        onChange={e =>
          props.onChange({
            distance: value.distance,
            center: {
              longitude: value.center.longitude,
              latitude: parseFloat(e.target.value, 10)
            }
          })
        }
        value={value.center.latitude}
      />
      <input
        type="number"
        placeholder="center lon"
        size="5"
        data-field="centerLongitude"
        onChange={e =>
          props.onChange({
            distance: value.distance,
            center: {
              latitude: value.center.latitude,
              longitude: parseFloat(e.target.value, 10)
            }
          })
        }
        value={value.center.longitude}
      />
      <input
        type="number"
        placeholder="distance (kms)"
        size="5"
        onChange={e =>
          props.onChange({
            center: value.center,
            distance: parseFloat(e.target.value, 10)
          })
        }
        value={value.distance}
      />
    </>
  );
};
