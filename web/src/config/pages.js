import Context from "../components/Context";
import Correlate from "../components/Correlate";
import Vehicles from "../components/Vehicles";
import Incidents from "../components/Incidents";
import Sensors from "../components/Sensors";

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
  incidents: {
    name: "Incidents",
    type: "PAGE",
    component: Incidents
  },
  vehicles: {
    name: "Vehicles",
    type: "PAGE",
    component: Vehicles
  },
  sensors: {
    name: "Sensors",
    type: "PAGE",
    component: Sensors
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
