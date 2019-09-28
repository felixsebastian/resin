import React from "react";
import {
  Header as HeaderCarbon,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react";
import pages from "../config/pages";
import { withRouter } from "react-router-dom";
import _ from "element-closest";

const MENU_ITEM_CLASS = "FgbR8ge3OfxYmR6jmrfk";

export default withRouter(({ history }) => {
  const goHome = () => history.push("/");

  const go = e => {
    e.preventDefault();
    history.push(
      `/${e.target.closest(`.${MENU_ITEM_CLASS}`).firstElementChild.dataset
        .location || ""}`
    );
  };

  return (
    <HeaderCarbon style={{ position: "static" }}>
      <HeaderName href="" onClick={goHome} prefix="">
        Resin
      </HeaderName>
      <HeaderNavigation>
        {pages.map(page => (
          <HeaderMenuItem
            href=""
            className={MENU_ITEM_CLASS}
            data-location={page.id}
            onClick={go}
          >
            {page.name}
          </HeaderMenuItem>
        ))}
      </HeaderNavigation>
    </HeaderCarbon>
  );
});
