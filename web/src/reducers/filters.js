import types from "../lib/actionTypes";
import filterTypes from "../lib/filterTypes";
import sources from "../lib/incidentSources";

const changeFilterByKey = (state, id, key, value) => [
  ...state.filter(filter => filter.field !== id),
  { ...state.find(filter => filter.field === id), [key]: value }
];

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_FILTER:
      return [
        ...state,
        {
          field: payload.id,
          type: Object.keys(
            filterTypes[sources.incident.fields[payload.id].type]
          )[0],
          value: ""
        }
      ];
    case types.REMOVE_FILTER:
      return state.filter(filter => filter.field !== payload.id);
    case types.CLEARS:
      return [];
    case types.CHANGE_FILTER_VALUE:
      return changeFilterByKey(state, payload.field, "value", payload.value);
    case types.CHANGE_FILTER_TYPE:
      return changeFilterByKey(state, payload.field, "type", payload.type);
    default:
      return state;
  }
};
