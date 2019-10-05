import actionTypes from "../lib/actionTypes";

const { TOGGLE_FILTER_FIELD_CLICKED } = actionTypes;

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FILTER_FIELD_CLICKED:
      const { field: newField } = payload;
      
      return state.includes(newField) ? state.filter(field => field !== newField) : [...state, newField]
    default:
      return state;
  }
};
