import { createStore } from "redux";
import geoReducer from "../reducers/GeoReducer";

const geoStore = createStore(geoReducer);

export default geoStore;
