import React from "react";
import Geo from "./Geo.js";
import Time from "./Time.js";
import { css } from "glamor";
import {
  Header as HeaderCarbon,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

// styles

const islandCss = css({
  border: "0.5rem solid #eee"
});

const appCss = css({
  display: "flex",
  "flex-direction": "column",
  height: "150vh",
  width: "1200px",
  "max-width": "100%",
  margin: "0 auto"
});

const headerCss = css({
  padding: "1rem 2rem",
  "border-bottom": 0
});

const viewportRowCss = css({
  display: "flex"
});

const geoCss = css({
  "border-bottom": 0
});

const timeCss = css({});

const viewportsFrameCss = css({
  display: "flex",
  "flex-direction": "column"
});

// component

const Header = withRouter(({ history }) => {
  const go = location => history.push(`/${location}`);

  return (
    <HeaderCarbon>
      <HeaderName onClick={() => go("dashboard")} prefix="">
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

const App = ({ history }) => {
  return (
    <Router>
      <Header />
      <div className={`${appCss} container`}>
        <div className={`${viewportsFrameCss}`} style={{ flexGrow: 1 }}>
          <Geo
            classNameCss={`${geoCss} ${islandCss} ${viewportRowCss}`}
            style={{ flexGrow: 1 }}
          />
          <Time
            classNameCss={`${timeCss} ${islandCss} ${viewportRowCss}`}
            style={{ flexGrow: 1 }}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
