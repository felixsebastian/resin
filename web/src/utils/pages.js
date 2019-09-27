import Dashboard from "../views/Dashboard";
import Incidents from "../views/Data";
import Context from "../views/Data";
import LogOut from "../views/Data";

export default [
  {
    id: "dashboard",
    name: "Dashboard",
    component: Dashboard
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
