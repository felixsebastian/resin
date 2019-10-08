import React from "react";
import {
  Header as HeaderCarbon,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react";
import pages from "../config/pages";
import { withRouter } from "react-router-dom";
// eslint-disable-next-line
import _ from "element-closest";
import { compose } from "redux";
import connect from "../lib/connect";

const MENU_ITEM_CLASS = "FgbR8ge3OfxYmR6jmrfk";

export default compose(
  withRouter,
  connect(state => ({ loggedIn: state.user !== null }))
)(({ history, loggedIn, actions }) => {
  const logoClicked = e => {
    e.preventDefault();
    history.push("/");
  };

  const itemClicked = e => {
    e.preventDefault();
    const page =
      pages[
        e.target.closest(`.${MENU_ITEM_CLASS}`).firstElementChild.dataset.id
      ];

    if (page.type === "PAGE") history.push(`/${page.id || ""}`);
    else actions[page.action]();
  };

  return (
    <HeaderCarbon aria-label="" style={{ position: "static" }}>
      <HeaderName href="" onClick={logoClicked} prefix="">
        Resin
      </HeaderName>
      {loggedIn && (
        <HeaderNavigation aria-label="">
          {pages.index.map(id => (
            <HeaderMenuItem
              key={id}
              href=""
              className={MENU_ITEM_CLASS}
              data-id={id}
              onClick={itemClicked}
            >
              {pages[id].name}
            </HeaderMenuItem>
          ))}
        </HeaderNavigation>
      )}
    </HeaderCarbon>
  );
});
