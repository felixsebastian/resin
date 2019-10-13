import React from "react";
import "moment-duration-format";
import moment from "moment";
import Viewport from "../Viewport";
import styled from "styled-components";
import StatusBar from "./StatusBar";
import Channels from "./Channels";
import { connect } from "react-redux";

const Layout = styled(Viewport)`
  width: 100%;
  position: relative;
  background-color: #000;
`;

const NotReadyLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Center = styled.div`
  text-align: center;
  color: #eee;
`;

const NotReady = () => (
  <NotReadyLayout>
    <Center>building timeline...</Center>
  </NotReadyLayout>
);

export default connect(
  state => ({
    ...state.timeline
  }),
  null
)(({ ready, tracker }) => (
  <Layout>
    {ready ? (
      <>
        <Channels />
        <StatusBar time={tracker ? moment.duration(+tracker).format() : null} />
      </>
    ) : (
      <NotReady />
    )}
  </Layout>
));
