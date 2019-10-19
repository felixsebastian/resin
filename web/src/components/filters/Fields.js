import React from "react";
import connect from "../../lib/connect";
import Button from "../Button";
import sources from "../../lib/incidentSources";
import types from "../../lib/filterTypes";
import DefaultInput from "./inputs/Default";
import styled from "styled-components";
import PaddingRight from "../PaddingRight";
import Flyout from "../flyout";

const BoxA = styled.span`
  padding: 0 1rem 0 0;
`;

export default connect(state => ({
  filters: state.filters
}))(({ filters, actions }) =>
  filters.map(filter => {
    const { field } = filter;

    const Input =
      types[sources.incident.fields[field].type][filter.type].component ||
      DefaultInput;

    const usableFilterTypes = types[sources.incident.fields[field].type];

    return (
      <BoxA key={field}>
        <Input
          onChange={value => actions.changeFilterValue(field, value)}
          field={field}
        />{" "}
        <PaddingRight>
          <Flyout
            optionSelected={id => actions.changeFilterType(field, id)}
            options={Object.keys(usableFilterTypes).map(type => ({
              id: type,
              text: usableFilterTypes[type].text
            }))}
          >
            Type
          </Flyout>
        </PaddingRight>
        <Button onClick={() => actions.removeFilter(field)}>Remove</Button>
      </BoxA>
    );
  })
);
