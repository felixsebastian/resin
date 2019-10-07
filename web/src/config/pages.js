import Context from "../components/Context";
import Correlate from "../components/Correlate";
import Setup from "../components/Incidents";
import Incidents from "../components/Incidents";
import LogOut from "../components/Incidents";

export default [
  {
    id: "context",
    name: "Context",
    component: Context
  },
  {
    id: "correlate",
    name: "Correlate",
    component: Correlate
  },
  {
    id: "setup",
    name: "Setup",
    component: Setup
  },
  {
    id: "incidents",
    name: "Incidents",
    component: Incidents
  },
  {
    id: "log-out",
    name: "Log Out",
    component: LogOut
  }
];
