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
      <HeaderName href="" onClick={() => go()} prefix="">
        Resin
      </HeaderName>
      <HeaderNavigation>
        <HeaderMenuItem href="" onClick={() => go("dashboard")}>
          Dashboard
        </HeaderMenuItem>
        <HeaderMenuItem href="" onClick={() => go("data")}>
          Data
        </HeaderMenuItem>
        <HeaderMenuItem href="" onClick={() => go("log-out")}>
          Log Out
        </HeaderMenuItem>
      </HeaderNavigation>
    </HeaderCarbon>
  );
});
