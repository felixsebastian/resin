import React from "react";
import { useSelector } from "react-redux";

export default props => {
  const filter = useSelector(state => state.filters[props.index]);

  const value = filter.value || {
    pointA: {
      latitude: 0,
      longitude: 0
    },
    pointB: {
      latitude: 0,
      longitude: 0
    }
  };

  return (
    <>
      <input
        type="number"
        placeholder="point A lat"
        size="5"
        onChange={e =>
          props.onChange({
            pointB: value.pointB,
            pointA: {
              longitude: value.pointA.longitude,
              latitude: parseFloat(e.target.value, 10)
            }
          })
        }
        value={value.pointA.latitude}
      />
      <input
        type="number"
        placeholder="point A lon"
        size="5"
        onChange={e =>
          props.onChange({
            pointB: value.pointB,
            pointA: {
              latitude: value.pointA.latitude,
              longitude: parseFloat(e.target.value, 10)
            }
          })
        }
        value={value.pointA.longitude}
      />
      <input
        type="number"
        placeholder="point B lat"
        size="5"
        onChange={e =>
          props.onChange({
            pointA: value.pointA,
            pointB: {
              longitude: value.pointB.longitude,
              latitude: parseFloat(e.target.value, 10)
            }
          })
        }
        value={value.pointB.latitude}
      />
      <input
        type="number"
        placeholder="point B lon"
        size="5"
        onChange={e =>
          props.onChange({
            pointA: value.pointA,
            pointB: {
              latitude: value.pointB.latitude,
              longitude: parseFloat(e.target.value, 10)
            }
          })
        }
        value={value.pointB.longitude}
      />
    </>
  );
};
