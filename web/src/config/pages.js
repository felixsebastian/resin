import Context from "../components/Context";
import Correlate from "../components/Correlate";
import Setup from "../components/Incidents";
import Incidents from "../components/Incidents";

const pages = {
  context: {
    name: "Context",
    type: "PAGE",
    component: Context
  },
  correlate: {
    name: "Correlate",
    type: "PAGE",
    component: Correlate
  },
  setup: {
    name: "Setup",
    type: "PAGE",
    component: Setup
  },
  incidents: {
    name: "Incidents",
    type: "PAGE",
    component: Incidents
  },
  "log-out": {
    name: "Log Out",
    type: "ACTION",
    action: "logOut"
  }
};

Object.keys(pages).forEach(id => (pages[id].id = id));
pages.index = Object.keys(pages);
export default pages;
