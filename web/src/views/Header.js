import React from "react";
import {
  Header as HeaderCarbon,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react";
import pages from "../utils/pages";
import { withRouter } from "react-router-dom";
import _ from "element-closest";

const MENU_ITEM_CLASS = "FgbR8ge3OfxYmR6jmrfk";

export default withRouter(({ history }) => {
  const go = e => {
    e.preventDefault();
    console.log(e.target.closest(`.${MENU_ITEM_CLASS}`).dataset);
    history.push(
      `/${e.target.closest(`.${MENU_ITEM_CLASS}`).firstElementChild.dataset
        .location || ""}`
    );
  };

  return (
    <HeaderCarbon style={{ position: "static" }}>
      <HeaderName href="" onClick={go} prefix="">
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
