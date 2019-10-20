import React from "react";
import Button from "../Button";
import sources from "../../lib/incidentSources";
import types from "../../lib/filterTypes";
import DefaultInput from "./inputs/Default";
import styled from "styled-components";
import PaddingRight from "../PaddingRight";
import Flyout from "../flyout";
import { useSelector } from "react-redux";
import useActions from "../../hooks/useActions";

const BoxA = styled.span`
  padding: 0 1rem 0 0;
`;

export default () => {
  const filters = useSelector(state => state.filters);
  const { changeFilterValue, changeFilterType, removeFilter } = useActions();

  return filters.map((filter, index) => {
    const { field } = filter;

    const Input =
      types[sources.incident.fields[field].type][filter.type].component ||
      DefaultInput;

    const usableFilterTypes = types[sources.incident.fields[field].type];

    return (
      <BoxA key={field}>
        <Input
          onChange={value => changeFilterValue(field, value)}
          index={index}
        />{" "}
        <PaddingRight>
          <Flyout
            optionSelected={id => changeFilterType(field, id)}
            options={Object.keys(usableFilterTypes).map(type => ({
              id: type,
              text: usableFilterTypes[type].text
            }))}
          >
            Type
          </Flyout>
        </PaddingRight>
        <Button onClick={() => removeFilter(field)}>Remove</Button>
      </BoxA>
    );
  });
};
