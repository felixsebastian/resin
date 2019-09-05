import React from "react";
import {
  Header as HeaderCarbon,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  const go = location => history.push(`/${location || ""}`);
  return (
    <HeaderCarbon style={{ position: "static" }}>
      <HeaderName onClick={() => go()} prefix="">
        Resin
      </HeaderName>
      <HeaderNavigation>
        <HeaderMenuItem onClick={() => go("dashboard")}>
          Dashboard
        </HeaderMenuItem>
        <HeaderMenuItem onClick={() => go("add-data")}>Add Data</HeaderMenuItem>
        <HeaderMenuItem onClick={() => go("log-out")}>Log Out</HeaderMenuItem>
      </HeaderNavigation>
    </HeaderCarbon>
  );
});
