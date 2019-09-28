import React from "react";
import {Map, TileLayer, Marker, Popup, LayersControl} from "react-leaflet";
//import {GoogleLayer} from "react-leaflet-google";
import { compose, withStateHandlers } from "recompose";
import store from "./store";
import { clickToggleInfoPanel } from "./action";
import Viewport from "./Viewport";
import styled from "styled-components";

const position = [51.505, -0.09];

const Layout = styled(Viewport)`
  width: 100%;
`;

export default () => {
    return (
    <Layout>
        <Map center={position} zoom={13} zoomControl={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*<GoogleLayer
                googlekey="AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk"
            />*/}
        </Map>
    </Layout>)
};

