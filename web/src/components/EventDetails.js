import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell
} from "carbon-components-react";
import styled from "styled-components";
import Viewport from "./Viewport";
import { selectIncident } from "../lib/actionCreators";
import { connect } from "react-redux";

const data = {
  make: "mitsubishi",
  model: "bolt",
  time: "10:15am"
};

const Layout = styled(Viewport)`
  flex-grow: 1;
`;

const mapStateToProps = state => {
  return {
    infoPanelIsOpen: state.infoPanelIsOpen
  };
};

function mapDispatchToProps(dispatch) {
  return {
    clickTogglePanel: () => dispatch(selectIncident())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({ infoPanelIsOpen }) =>
    infoPanelIsOpen == true && (
      <Layout>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListCell head style={{ width: "33%" }}>
              Key
            </StructuredListCell>
            <StructuredListCell head>Value</StructuredListCell>
          </StructuredListHead>
          <StructuredListBody>
            {Object.keys(data).map(key => (
              <StructuredListRow>
                <StructuredListCell>{key}:</StructuredListCell>
                <StructuredListCell>
                  <b>{data[key]}</b>
                </StructuredListCell>
              </StructuredListRow>
            ))}
          </StructuredListBody>
        </StructuredListWrapper>
      </Layout>
    )
);
