import React from "react";
import { connect } from "react-redux";
import {
    StructuredListWrapper,
    StructuredListHead,
    StructuredListBody,
    StructuredListRow,
    StructuredListInput,
    StructuredListCell
} from "carbon-components-react";
import { islandCss } from "./Dashboard";
import { css } from "glamor";

const detailsCss = css({
    width: "20rem"
  });

const mapStateToProps = state => {
    return {
        briefIsOpen: state.briefIsOpen,
        panelIsOpen: state.panelIsOpen
    }
}

const InfoPanel = ({panelIsOpen}) => (
    <div className={`${detailsCss} ${islandCss}`}>
        <StructuredListWrapper>
            <StructuredListHead>
            <StructuredListCell head style={{ width: "33%" }}>
                Key
            </StructuredListCell>
            <StructuredListCell head>Value</StructuredListCell>
            </StructuredListHead>
            <StructuredListBody>
            <StructuredListRow>
                <StructuredListCell>make:</StructuredListCell>
                <StructuredListCell>
                <b>ford</b>
                </StructuredListCell>
            </StructuredListRow>
            </StructuredListBody>
        </StructuredListWrapper>
    </div>
);

const LeftInfoPanel = connect(mapStateToProps)(InfoPanel)

export default LeftInfoPanel;