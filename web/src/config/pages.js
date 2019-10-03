import Dashboard from "../components/Dashboard";
import Setup from "../components/Data";
import Incidents from "../components/Data";
import Context from "../components/Data";
import LogOut from "../components/Data";

export default [
  {
    id: "dashboard",
    name: "Dashboard",
    component: Dashboard
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
