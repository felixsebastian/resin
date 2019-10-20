import React from "react";
import { useSelector } from "react-redux";

export default props => {
  const filter = useSelector(state => state.filters[props.index]);

  const value = filter.value || {
    centerLatitude: "",
    centerLongitude: "",
    distance: ""
  };

  const onChange = e =>
    props.onChange({ ...value, [e.target.dataset.field]: e.target.value });

  return (
    <>
      <input
        type="number"
        placeholder="center lat"
        size="5"
        data-field="centerLatitude"
        onChange={onChange}
        value={value.centerLatitude}
      />
      <input
        type="number"
        placeholder="center lon"
        size="5"
        data-field="centerLongitude"
        onChange={onChange}
        value={value.centerLongitude}
      />
      <input
        type="number"
        placeholder="distance (kms)"
        size="5"
        data-field="distance"
        onChange={onChange}
        value={value.distance}
      />
    </>
  );
};
