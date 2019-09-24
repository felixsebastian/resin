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
import { clickToggleInfoPanel } from "./Action";

const detailsCss = css({
    width: "20rem"
  });

const mapStateToProps = state => {
    return {
        infoPanelIsOpen: state.infoPanelIsOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clickTogglePanel: () => dispatch(clickToggleInfoPanel())
    }
}

const infoPanel = ({infoPanelIsOpen}) => (
    <div className={`${detailsCss} ${islandCss}` }>
        {infoPanelIsOpen === true && (
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
        )}
    </div>
);

const InfoPanel = connect(mapStateToProps, mapDispatchToProps)(infoPanel)

export default InfoPanel;