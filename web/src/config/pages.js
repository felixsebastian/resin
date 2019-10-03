import Dashboard from "../components/Dashboard";
import Setup from "../components/Incidents";
import Incidents from "../components/Incidents";
import Context from "../components/Incidents";
import LogOut from "../components/Incidents";

export default [
  {
    id: "dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    id: "correlate",
    name: "Correlate",
    component: Context
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
    id: "context",
    name: "Context",
    component: Context
  },
  {
    id: "log-out",
    name: "Log Out",
    component: LogOut
  }
];
